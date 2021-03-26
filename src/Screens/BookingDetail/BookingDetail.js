import { Body, Button, Container, Content, Grid, Header, Input, Item, Label, Left, Row, Text } from 'native-base'
import React, {useEffect, useState} from 'react'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import spacing from './../../Supports/Styles/Spacing'

const BookingDetail = ({route, navigation: {navigate}, navigation}) => {

    const [objData, setObjData] = useState(
        {
            nama: null, 
            umur: null
        }
    )
    const [selectedSeat, setSelectedSeat] = useState([])
    const [passenger, setPassenger] = useState([])
    // [
    //     {
    //         seat: '1D',
    //         nama: null, 
    //         umur: null,
    //     },
    //     {
    //         seat: '2D',
    //         nama: null, 
    //         umur: null,
    //     },
    //     {
    //         seat: '3D',
    //         nama: null, 
    //         umur: null,
    //     }
    // ]

    useEffect(() => {
        setSelectedSeat(route.params.seat) // [1D, 2D, 3D]

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

        let arrPassenger = [...passenger]

        // for(let i=0; i < passenger.length; i++){
        //     if(passenger[i].seat === seatNumber){
        //         console.log(passenger[i])
        //         console.log(i)

        //         arrPassenger[i].nama = input

        //         setPassenger = [arrPassenger]
        //     }
        // }
    }

    const onCheck = () => {
        console.log(passenger)
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
                    <Button onPress={onCheck}>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Check
                        </Text>
                    </Button>
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
            </Content>
        </Container>
    )
}

export default BookingDetail