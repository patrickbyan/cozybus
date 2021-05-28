import { Body, Button, Container, Content, Grid, Header, Input, Item, Label, Left, Row, Text, Icon, Title, Right } from 'native-base'
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import {urlAPI} from './../../Supports/Constants/urlAPI'

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Typography'

// Moment
import Moment from 'moment'
import 'moment-timezone'

// Action 
import {getAllDataTransaction, getExpiredAt} from './../../Redux/Actions/TransactionAction'

const BookingDetail = ({route, navigation: {navigate}, navigation, user, filter, getAllDataTransaction, getExpiredAt}) => {
    const [selectedSeat, setSelectedSeat] = useState([])
    const [passenger, setPassenger] = useState([])
    const [contact, setContact] = useState({email: null, phone: null})
    const [error, setError] = useState('')

    useEffect(() => {
        setSelectedSeat(route.params.seat)

        let selectedSeat = route.params.seat
        let newArr = []

        for(let i=0; i < selectedSeat.length; i++){
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
        // 1. Super Copy state Passenger
        let arrPassenger = [...passenger]

        // 2. Lakukan Looping didalam arrPassenger
        for(let i=0; i < arrPassenger.length; i++){
            // 3. Setiap kali looping kita samakan data seat number
            if(arrPassenger[i].seat === seatNumber){
                // 4. Check input type
                if(inputType === 'nama'){
                    if(!input){
                        console.log('nama tidak diisi')
                        setError('Nama Harus Diisi')
                    }else{
                        arrPassenger[i].name = input
                    }
                }else if(inputType === 'umur'){
                    if(!input){
                        console.log('umur tidak diisi')
                        setError('Umur Harus Diisi')
                    }else{
                        arrPassenger[i].umur = input
                    }
                }
            }

            setPassenger(arrPassenger)
        }
    }

    const onChangeContact = (input, inputType) => {
        if(inputType === 'email'){
            if(!input){
                setError('Email Harus Diisi')
            }else{
                contact.email = input
            }
        }else if(inputType === 'phone'){
            if(!input){
                setError('Nomor Telepon Harus Diisi')
            }else{
                contact.phone = input
            }
        }

        setContact(contact)
    }

    const onPayment = () => {
        console.log(contact, passenger)

        for(let i = 0; i < passenger.length; i++){
            if(passenger[i].name === null || passenger[i].umur === null) return setError('Isilah Informasi Penumpang')
            if(passenger[i].name.length === 0 || passenger[i].umur.length === 0) return setError('Isilah Informasi Penumpang')
        }

        if(contact.email === null || contact.phone === null) return setError('Isilah Informasi Kontak')
        if(contact.email.length === 0 || contact.phone.length === 0) return setError('Isilah Informasi Kontak')

        if(passenger || contact){
            setError('')
        }

        let idShuttle = route.params.idShuttle
        let status = 'Unpaid'
        let idUser = user.id
        let name = route.params.name
        let kelas = route.params.class
        let from = filter.departure
        let to = filter.arrival
        let departureDate = filter.date
        let seat = selectedSeat
        let detailPassenger = passenger
        let totalPrice = route.params.price

        let expiredAt = Moment(new Date()).add({minutes: 15}).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss')

        // ExpiredAt convert minutes to seconds
        let now = Moment(new Date()).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss')
        let diff = Moment.duration(Moment(expiredAt).diff(Moment(now)))
        let second = diff.asSeconds()
        
        getExpiredAt(second)

        let dataToSend = {
            idShuttle: idShuttle,
            status: status,
            expiredAt: expiredAt,
            idUser: idUser,
            name: name,
            class: kelas,
            from: from,
            to: to,
            departureDate: departureDate,
            seat: seat,
            detailPassenger: detailPassenger,
            totalPrice: totalPrice
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
            <Header style={{alignItems: 'center', ...color.bg_primary}}>
                <Left>
                    <Icon name='chevron-back-outline' onPress={() => navigation.goBack()} style={{...font.fs_35, ...color.light}} />
                </Left>
                <Body>
                    <Title style={{fontWeight: 'bold'}}>
                        Booking Detail
                    </Title>
                </Body>
                <Right>
                    <Button transparent hasText>
                        <Text></Text>
                    </Button>
                </Right>
            </Header>
            <Content>
                <Grid style={{...spacing.px_20, ...spacing.mt_20}}>
                    <Row>
                        <Text style={{...font.fs_20, ...font.fw_bold}}>
                            Informasi Kontak
                        </Text>
                    </Row>
                    <Row style={{...spacing.mt_10}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Email</Label>
                            <Input style={{width: '100%'}} defaultValue={user.email} onChangeText={(input) => onChangeContact(input, 'email')} />
                        </Item>
                    </Row>
                    <Row style={{...spacing.mt_10}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Phone Number</Label>
                            <Input style={{width: '100%'}} onChangeText={(input) => onChangeContact(input, 'phone')} />
                        </Item>
                    </Row>
                </Grid>
                <Grid style={{...spacing.px_25, ...spacing.mt_30}}>
                    <Row>
                        <Text style={{...font.fs_20, ...font.fw_bold}}>
                            Informasi Penumpang
                        </Text>
                    </Row>
                </Grid>
                {
                    selectedSeat.map((value, index) => {
                        return(
                            <Grid key={index} style={{...spacing.px_20, ...spacing.py_10, ...spacing.mx_20, ...spacing.mb_10, ...color.bg_light}}>
                                <Row>
                                    <Text style={{textAlign: 'right', width: '100%', ...font.fw_bold}}>
                                        Seat : {value}
                                    </Text>
                                </Row>
                                <Row style={{...spacing.mt_10}}>
                                    <Item stackedLabel style={{width: '100%'}}>
                                        <Label>Nama</Label>
                                        <Input onChangeText={(input) => dataPassenger(input, value, 'nama')} style={{width: '100%'}} />
                                    </Item>
                                </Row>
                                <Row style={{...spacing.mt_10}}>
                                    <Item stackedLabel style={{width: '100%'}}>
                                        <Label>Umur</Label>
                                        <Input onChangeText={(input) => dataPassenger(input, value, 'umur')} style={{width: '100%'}} />
                                    </Item>
                                </Row>
                            </Grid>
                        )
                    })
                }
                <Text style={{textAlign: 'center', ...color.danger, ...font.fs_15, ...spacing.mt_10}}>
                    {error}
                </Text>
                <Grid style={{...spacing.my_10}}>
                    <Button onPress={onPayment} style={{width: '100%'}}>
                        <Text style={{...font.fs_15, width: '100%', textAlign: 'center'}}>
                            Payment
                        </Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getAllDataTransaction, getExpiredAt
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail)