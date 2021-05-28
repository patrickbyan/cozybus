import { Body, Button, Card, Col, Container, Content, Grid, Header, Left, Right, Row, Spinner, Text, Title, Icon, CardItem } from 'native-base'
import { Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Typography'

// Action
import {getShuttleDetail, getSeatBooked} from './../../Redux/Actions/ShuttlesAction'

import Splash from '../Splash/Splash'

import FaIcon from 'react-native-vector-icons/FontAwesome'

const ShuttleDetail = ({navigation: {navigate}, navigation, route, getShuttleDetail, shuttles, getSeatBooked, filter}) => {

    const [selectedSeat, setSelectedSeat] = useState([])
    const [isTotalSeatTrue, setIsTotalSeatTrue] = useState(false)
    const [errorSelectedSeat, setErrorSelectedSeat] = useState('')

    const seat = 3

    useEffect(() => {
        getShuttleDetail(route.params.id)
        getSeatBooked(route.params.id, filter.date)
    }, [])

    const onSelectSeat = (seatNumber) => {
        
        // Apakah jumlah selected seat < 3
        if(selectedSeat.length < seat){
            if(selectedSeat.includes(seatNumber)){
                // 1. Cari seat ada di index ke berapa (Unselect)
                let indexSeat = selectedSeat.indexOf(seatNumber)
    
                let arrSelectedSeat = [...selectedSeat]
                arrSelectedSeat.splice(indexSeat, 1)

                setSelectedSeat(arrSelectedSeat)
            }else{
                setSelectedSeat([...selectedSeat, seatNumber])
            }
        }else if(selectedSeat.length >= seat){
            // Apakah seat yg dipilih ada di dalam selected seat
            if(selectedSeat.includes(seatNumber)){
                // 1. Cari seat ada di index ke berapa
                let indexSeat = selectedSeat.indexOf(seatNumber)
    
                let arrSelectedSeat = [...selectedSeat]
                arrSelectedSeat.splice(indexSeat, 1)
    
                setSelectedSeat(arrSelectedSeat)
                setErrorSelectedSeat('')
            }else{
                setErrorSelectedSeat('Total Seat Maksimal Hanya ' + seat)
            }
        }
    }

    const onCheckoutSubmit = () => {
        console.log('button submit dipencet')
        console.log(selectedSeat)
        console.log(errorSelectedSeat)
        if(selectedSeat.length === 0) return alert('Minimal Pilih Seat Berjumlah 1 Sampai 3')

        navigate('BookingDetail', {seat: selectedSeat, price: selectedSeat.length * shuttles.shuttleDetail.price, idShuttle: route.params.id, name: shuttles.shuttleDetail.name, class: shuttles.shuttleDetail.class, })
    }

    if(shuttles.shuttleDetail && shuttles.seatBooked){
        return(
            <Container>
                <Header style={{alignItems: 'center', ...color.bg_primary}}>
                    <Left>
                        <Icon name='chevron-back-outline' onPress={() => navigation.goBack()} style={{...color.light}} />
                    </Left>
                    <Body>
                        <Title style={{...color.light, ...font.fw_bold}}>
                            Shuttle Detail
                        </Title>
                    </Body>
                    <Right>
                        <Button transparent hasText>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Image source={{uri: shuttles.shuttleDetail.image1}} style={{width: '100%', height: 200}} />
                        </Row>
                    </Grid>
                    <Grid>
                        <Col>
                            <Image source={{uri: shuttles.shuttleDetail.image2}} style={{height: 100}} />
                        </Col>
                        <Col>
                            <Image source={{uri: shuttles.shuttleDetail.image3}} style={{height: 100}} />
                        </Col>
                    </Grid>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                <Grid>
                                    <Col>
                                        <Text style={{...font.fs_25, ...font.fw_bold}}>
                                            {shuttles.shuttleDetail.name}
                                        </Text>
                                    </Col>
                                    <Col style={{width: '15%', ...color.bg_success}}>
                                        <Grid style={{alignItems: 'center' ,...spacing.ml_8}}>
                                            <Col>
                                                <Text>
                                                    <Icon name='star' style={{...color.light, ...font.fs_20}} />
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Text style={{...font.fs_20, ...font.fw_bold, ...color.light}}>
                                                    5
                                                </Text>
                                            </Col>
                                        </Grid>
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Text>
                                            Executive
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Text style={{...font.fs_20, ...spacing.mt_20, ...font.fw_bold}}>
                                            Rp. {shuttles.shuttleDetail.price.toLocaleString()}
                                        </Text>
                                    </Row>
                                </Grid>
                                <Grid style={{...spacing.my_20}}>
                                    <Col>
                                        <Text style={{...font.fs_12}}>
                                            Dari : 
                                        </Text>
                                        <Text style={{...font.fs_15}}>
                                            {shuttles.shuttleDetail.from}
                                        </Text>
                                    </Col>
                                    <Col>
                                        <Text style={{...font.fs_12}}>
                                            Tujuan : 
                                        </Text>
                                        <Text style={{...font.fs_15}}>
                                            {shuttles.shuttleDetail.to}
                                        </Text>
                                    </Col>
                                </Grid>
                                <Grid style={{...spacing.mt_8}}>
                                    <Row>
                                        <Text style={{...font.fs_20, ...font.fw_bold}}>
                                            Facility
                                        </Text>
                                    </Row>
                                </Grid>
                                <Grid style={{...spacing.mt_15}}>
                                    {
                                        shuttles.shuttleDetail.facility.map((value, index) => {
                                            return(
                                                <Col key={index}>
                                                    <FaIcon name={value.image} style={{...font.fs_20}} />
                                                </Col>
                                            )
                                        })
                                    }
                                </Grid>
                                <Grid style={{...spacing.mt_15}}>
                                    <Row>
                                        <Text style={{...font.fs_20, ...font.fw_bold}}>
                                            Seat
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Text style={{...color.danger , ...font.fs_15}}>
                                            {
                                                errorSelectedSeat
                                            }
                                        </Text>
                                    </Row>
                                </Grid>
                                <Grid style={{...spacing.py_15, ...spacing.mt_10, flexWrap: 'wrap', borderWidth: 1, bordercolor: 'black', borderRadius: 3}}>
                                    {
                                        shuttles.shuttleDetail.seat.map((value, index) => {
                                            return(
                                                <Col key={index} style={{width: '25%', alignItems: 'center', ...spacing.mb_10}}>
                                                    {
                                                        shuttles.seatBooked.includes(value)?
                                                            <>
                                                                <Icon name='person' style={{...font.fs_25}} />
                                                                <Text>
                                                                    Booked
                                                                </Text>
                                                            </>
                                                        :
                                                            
                                                            <>
                                                                <TouchableOpacity onPress={() => onSelectSeat(value)}>
                                                                    <Icon name={selectedSeat.includes(value)? 'person' : 'person-outline'} style={selectedSeat.includes(value)? {fontSize: 25, ...color.success} : {fontSize: 25, ...color.dark}} />
                                                                    <Text>
                                                                        {value}
                                                                    </Text>
                                                                </TouchableOpacity>
                                                            </>
                                                    }
                                                </Col>
                                            )
                                        })
                                    }
                                </Grid>
                            </Body>
                        </CardItem>
                    </Card>
                    <Grid style={{...spacing.px_15, ...spacing.py_15, ...spacing.mt_10, ...color.bg_primary, alignItems: 'center'}}>
                        {
                            Number(selectedSeat.length) <= Number(seat)?
                                <>
                                    <Col>
                                        <Text style={{...color.light, ...font.fs_18, ...font.fw_bold}}>
                                            Rp {selectedSeat.length * shuttles.shuttleDetail.price.toLocaleString('en-in')}
                                        </Text>
                                        <Col>
                                            <Text style={{...color.light, ...font.fs_18}}>
                                                Seat:&nbsp;
                                                {
                                                    selectedSeat.map((value, index) => {
                                                        return(
                                                            <Text key={index} style={{...color.light, ...font.fs_18}}>
                                                                {value}&nbsp;
                                                            </Text>
                                                        )
                                                    })
                                                }
                                            </Text>
                                        </Col>
                                    </Col>
                                    <Col>
                                        <Button onPress={() => {onCheckoutSubmit()}}  style={{width: '100%'}}>
                                            <Text style={{width: '100%', textAlign: 'center'}}>
                                                Checkout
                                            </Text>
                                        </Button>
                                    </Col>
                                </>
                            :
                                null
                        }
                    </Grid>
                </Content>
            </Container>
        )
    }

    return(
        // <Container>
        //     <Header style={{alignItems: 'center', ...color.bg_primary}}>
        //         <Left>
        //             <Icon name='chevron-back-outline' style={{...color.light}} />
        //         </Left>
        //         <Body>
        //             <Title style={{...color.light, ...font.fw_bold}}>
        //                 Shuttle Detail
        //             </Title>
        //         </Body>
        //         <Right>
        //             <Button transparent hasText>
        //                 <Text></Text>
        //             </Button>
        //         </Right>
        //     </Header>
        //     <Spinner color='red' />
        //     <Text style={{textAlign: 'center', ...font.fsFive}}>
        //         Loading
        //     </Text>
        // </Container>
        <Splash />
    )

}

const mapDispatchToProps = {
    getShuttleDetail, getSeatBooked
}

const mapStateToProps = (state) => {
    return{
        shuttles: state.shuttles,
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShuttleDetail)