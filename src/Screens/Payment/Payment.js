import { Body, Button, Col, Container, Content, Grid, Header, Left, Row, Spinner, Text } from 'native-base'
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import CountDown from 'react-native-countdown-component';
import Moment from 'moment'
import 'moment-timezone'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import spacing from './../../Supports/Styles/Spacing'

// Action
import {getDataTransaction} from './../../Redux/Actions/TransactionAction'
import axios from 'axios';
import { urlAPI } from '../../Supports/Constants/urlAPI';

const Payment = ({navigation, route, getDataTransaction, transactions}) => {

    const [countExpired, setCountExpired] = useState(null)

    useEffect(() => {
        getDataTransaction(route.params.idTransaction)

        if(transactions.dataTransaction !== null){
            console.log('Expired At' + transactions.dataTransaction.expiredAt)
            expiretTransactions()
        }
    }, [])


    const expiretTransactions = () => {
        let expiredAt = transactions.dataTransaction.expiredAt
        let now = Moment(new Date()).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss')

        let different = Moment.duration(Moment(expiredAt).diff(Moment(now)))
        let second = different.asSeconds()
        console.log('Second' + second)

        setCountExpired(second)
    }
    const onPay = () => {
        axios.patch(urlAPI + `/transactions/${route.params.idTransaction}`, {status: 'Paid', expiredAt: ''})
        .then((res) => {
            getDataTransaction(route.params.idTransaction)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    if(transactions.dataTransaction === null && countExpired === null){
        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Left>
                    <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
                </Left>
                <Body>
                    <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlEight, fontWeight: 'bold'}}>
                        Payment
                    </Text>
                </Body>
            </Header>
            <Spinner color='red' />
            <Text style={{textAlign: 'center', ...Font.fsFive}}>
                Loading
            </Text>
            </Container>
        )
    }

    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Left>
                    <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
                </Left>
                <Body>
                    <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlEight, fontWeight: 'bold'}}>
                        Payment
                    </Text>
                </Body>
            </Header>
            <Content>
                <Grid style={{...Spacing.pxFive, ...Spacing.ptFive, alignItems: 'center', ...Color.bgPrimary}}>
                    <Row>
                        <Text style={{...Color.light, fontStyle: 'italic'}}>
                            Selesaikan Pembayaran
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        {
                            transactions.dataTransaction.status === 'Unpaid'?
                                <CountDown
                                    until={countExpired? countExpired : 900}
                                    // Ketika onFinish, function ubah status : Unpaid -> Cancelled
                                    onFinish={() => alert('finished')}
                                    onPress={() => alert('hello')}
                                    timeLabels={{m: null, s: null}}
                                    timeToShow={['M', 'S']}
                                    size={12}
                                />
                            :
                                null
                        }
                    </Row>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.ptFive, alignItems: 'center', ...Color.bgPrimary}}>
                    <Col>
                        <Text style={{...Font.fsFive, ...Color.light, fontWeight: 'bold'}}>
                            {transactions.dataTransaction.from}
                        </Text>
                        <Text style={{...Font.fsThree, ...Color.light}}>
                            13:00 WIB
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{textAlign: 'center', ...Color.light}}>
                            <Icon1 name='arrow-forward-outline' style={{...Font.fsFive}} />
                        </Text>
                        <Text style={{textAlign: 'center', ...Font.fsTwo, ...Color.light}}>
                            {transactions.dataTransaction.departureDate}
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{...Font.fsFive, fontWeight: 'bold', textAlign: 'right', ...Color.light}}>
                            {transactions.dataTransaction.to}
                        </Text>
                        <Text style={{...Font.fsThree, textAlign: 'right', ...Color.light}}>
                            11:00 WIB
                        </Text>
                    </Col>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.pyFive, alignItems: 'center', ...Color.bgPrimary}}>
                    <Col>
                        <Text style={{...Font.fsFive, ...Color.light}}>
                            Bayar
                        </Text>
                        <Text style={{...Font.fsFive, fontWeight: 'bold', ...Color.light}}>
                            Rp. {transactions.dataTransaction.totalPrice}
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{...Font.fsFive, textAlign: 'right', ...Color.light}}>
                            Detail <Icon1 name='chevron-down-outline' style={{...Font.fsFive}} />
                        </Text>
                    </Col>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Virtual Account Transfer
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Icon name='credit-card' style={{...Font.fsSix, ...Color.primary}} />
                    </Row>
                    <Row style={{...Spacing.mtFive}}>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Credit Card
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Icon name='cc-visa' style={{...Font.fsSix, ...Color.primary}} />
                        <Icon name='cc-paypal' style={{...Font.fsSix, ...Color.primary, ...Spacing.mlFive}} />
                        <Icon name='cc-mastercard' style={{...Font.fsSix, ...Color.primary, ...Spacing.mlFive}} />
                    </Row>
                    <Row style={{...Spacing.mtFive}}>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Pay Later
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Icon name='cc-jcb' style={{...Font.fsSix, ...Color.primary}} />
                    </Row>
                    <Row style={{...Spacing.mtFive}}>
                        {
                            transactions.dataTransaction.status === 'Unpaid'?
                                <Button onPress={onPay} style={{width: '100%'}}>
                                    <Text style={{width: '100%', textAlign: 'center'}}>
                                        Pay Now
                                    </Text>
                                </Button>
                            :
                                null
                        }
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getDataTransaction
}

const mapStateToProps = (state) => {
    return{
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)