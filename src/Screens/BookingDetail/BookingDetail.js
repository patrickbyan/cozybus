import { Body, Button, Container, Content, Grid, Header, Input, Item, Label, Left, Row, Text } from 'native-base'
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import {urlAPI} from './../../Supports/Constants/urlAPI'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import spacing from './../../Supports/Styles/Spacing'

// Moment
import Moment from 'moment'
import 'moment-timezone'

// Action 
import {getAllDataTransaction} from './../../Redux/Actions/TransactionAction'

const BookingDetail = ({route, navigation: {navigate}, navigation, user, filter, getAllDataTransaction}) => {
    const [selectedSeat, setSelectedSeat] = useState([])
    const [passenger, setPassenger] = useState([])

    useEffect(() => {
        setSelectedSeat(route.params.seat) // [1D, 2D, 3D]
        console.log('idShuttle: ' + route.params.idShuttle)

        let selectedSeat = route.params.seat
        let newArr = []

        for(let i=0; i <selectedSeat.length; i++){
            newArr.push(
                {
                    seat: selectedSeat[i],
                    name: null,
                    umur: null
                }
            )
        }

        setPassenger(newArr)
    }, [])

    const dataPassenger = (input, seatNumber, inputType) => {
        console.log(seatNumber)
        console.log(input)
        console.log(inputType)

        // 1. Super Copy state Passenger
        let arrPassenger = [...passenger]

        // 2. Lakukan Looping didalam arrPassenger
        for(let i=0; i < arrPassenger.length; i++){
            // 3. Setiap kali looping kita samakan data seat number
            if(arrPassenger[i].seat === seatNumber){
                // 4. Check input type
                if(inputType === 'nama'){
                    arrPassenger[i].name = input
                }else if(inputType === 'umur'){
                    arrPassenger[i].umur = input
                }
            }

            setPassenger(arrPassenger)
        }
    }

    const onPayment = () => {
        // Tugas 1 : Buat validasi untuk data informasi penumpang (Pastikan semua data lengkap)

        // idShuttle : route.params.idShuttle 
        //  status : 'Unpaid'
        //  idUser : Global Store ---> User
        //  name : route.params.name
        // class : route.params.class
        //  from : Global Store ---> Filter
        // to : Global Store ---> Filter
        // departureDate : Global Store ---> Filter
        // seat : selectedSeat (state)
        // detailPassenger : passenger (state)
        // totalPrice : route.params.price

        let expiredAt = Moment(new Date()).add({minutes: 15}).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss')

        let dataToSend = {
            idShuttle: route.params.idShuttle,
            status: 'Unpaid',
            expiredAt: expiredAt,
            idUser: user.id,
            name: route.params.name,
            class: route.params.class,
            from: filter.departure,
            to: filter.arrival,
            departureDate: filter.date,
            seat: selectedSeat,
            detailPassenger: passenger,
            totalPrice: route.params.price
        }

        Axios.post(urlAPI + '/transactions', {...dataToSend})
        .then((res) => {
            getAllDataTransaction(user.id)
            navigate('Payment', {idTransaction: res.data.id})
        })
        .catch((err) => {
            console.log(err)
        })
    }
 
    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Left>
                    <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
                </Left>
                <Body>
                    <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                        Booking Detail
                    </Text>
                </Body>
            </Header>
            <Content>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Informasi Kontak
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Email</Label>
                            <Input style={{width: '100%'}} />
                        </Item>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Phone Number</Label>
                            <Input style={{width: '100%'}} />
                        </Item>
                    </Row>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtSeven}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Informasi Penumpang
                        </Text>
                    </Row>
                </Grid>
                {
                    selectedSeat.map((value, index) => {
                        return(
                            <Grid key={index} style={{...Spacing.pxFive, ...Spacing.pyThree, ...Spacing.mxFive, ...Spacing.mbThree, ...Color.bgLight}}>
                                <Row>
                                    <Text style={{textAlign: 'right', width: '100%', fontWeight: 'bold'}}>
                                        Seat : {value}
                                    </Text>
                                </Row>
                                <Row style={{...Spacing.mtThree}}>
                                    <Item stackedLabel style={{width: '100%'}}>
                                        <Label>Nama</Label>
                                        <Input onChangeText={(input) => dataPassenger(input, value, 'nama')} style={{width: '100%'}} />
                                    </Item>
                                </Row>
                                <Row style={{...Spacing.mtThree}}>
                                    <Item stackedLabel style={{width: '100%'}}>
                                        <Label>Umur</Label>
                                        <Input onChangeText={(input) => dataPassenger(input, value, 'umur')} style={{width: '100%'}} />
                                    </Item>
                                </Row>
                            </Grid>
                        )
                    })
                }
                <Grid style={{...Spacing.pxFive, ...Spacing.myThree}}>
                    <Button onPress={onPayment} style={{width: '100%'}}>
                        <Text style={{...Font.fsThree, width: '100%', textAlign: 'center'}}>
                            Payment
                        </Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getAllDataTransaction
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail)