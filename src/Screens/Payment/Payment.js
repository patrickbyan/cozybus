import { Body, Button, Col, Container, Content, Grid, Header, Left, Right, Row, Spinner, Text, Title, Icon } from 'native-base'
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import CountDown from 'react-native-countdown-component';
import Moment from 'moment'
import 'moment-timezone'

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Typography'

// Icon
import IconFa from 'react-native-vector-icons/FontAwesome'

// Action
import {getAllDataTransaction, getDataTransaction} from './../../Redux/Actions/TransactionAction'

import Splash from '../Splash/Splash'
import axios from 'axios';
import { urlAPI } from '../../Supports/Constants/urlAPI';

const Payment = ({navigation: {navigate}, route, getDataTransaction, transactions, getAllDataTransaction, user}) => {

    useEffect(() => {
        getDataTransaction(route.params.idTransaction)

    }, [])

    const onExpired = () => {
        axios.patch(urlAPI + `/transactions/${route.params.idTransaction}`, {status: 'Cancelled', expiredAt: ''})
        .then((res) => {
            if(res.data){
                getDataTransaction(route.params.idTransaction) 
                getAllDataTransaction(user.id)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onPay = () => {
        axios.patch(urlAPI + `/transactions/${route.params.idTransaction}`, {status: 'Paid', expiredAt: ''})
        .then((res) => {
            // Setelah berhasil nge-patch data -> Action untuk get data terbarunya
            getDataTransaction(route.params.idTransaction) 
            getAllDataTransaction(user.id)

            navigate('BookingHistory')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    if(transactions.dataTransaction === null){
        return(
           <Splash />
        )
    }

    return(
        <Container>
            <Header style={{alignItems: 'center', ...color.bg_primary}}>
                <Left>
                    <Icon name='chevron-back-outline' onPress={() => navigation.goBack()} style={{...color.light}} />
                </Left>
                <Body>
                    <Title style={{...color.light, ...font.fw_bold}}>
                        Payment
                    </Title>
                </Body>
                <Right transparent hasText>
                    <Text></Text>
                </Right>
            </Header>
            <Content>
                {
                    transactions.dataTransaction.status === 'Unpaid'?
                        <Grid style={{...spacing.px_20, alignItems: 'center', ...color.bg_primary}}>
                            <Row>
                                <Text style={{...color.light, ...font.fst_italic}}>
                                    Selesaikan Pembayaran
                                </Text>
                            </Row>
                            <Row style={{...spacing.mt_10}}>
                                <CountDown
                                    until={transactions.expiredAt}
                                    // Ketika onFinish, function ubah status : Unpaid -> Cancelled
                                    onFinish={onExpired}
                                    timeLabels={{m: null, s: null}}
                                    timeToShow={['M', 'S']}
                                    size={12}
                                />
                            </Row>
                        </Grid>
                                                    
                    :
                        null
                    }
                <Grid style={{...spacing.px_20, ...spacing.pt_20, alignItems: 'center', ...color.bg_primary}}>
                    <Col>
                        <Text style={{...font.fs_20, ...color.light, ...font.fw_bold}}>
                            {transactions.dataTransaction.from}
                        </Text>
                        <Text style={{...font.fs_15, ...color.light}}>
                            13:00 WIB
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{textAlign: 'center', ...font.fs_12, ...color.light}}>
                            {transactions.dataTransaction.departureDate}
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                            <Icon name='arrow-forward-outline' style={{...font.fs_20, ...color.light}} />
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{...font.fs_20, ...font.fw_bold, textAlign: 'right', ...color.light}}>
                            {transactions.dataTransaction.to}
                        </Text>
                        <Text style={{...font.fs_15, textAlign: 'right', ...color.light}}>
                            11:00 WIB
                        </Text>
                    </Col>
                </Grid>
                <Grid style={{...spacing.px_20, ...spacing.py_20, alignItems: 'center', ...color.bg_primary}}>
                    <Col>
                        <Text style={{...font.fs_20, ...color.light}}>
                            Bayar
                        </Text>
                        <Text style={{...font.fs_20, ...font.fw_bold, ...color.light}}>
                            Rp {transactions.dataTransaction.totalPrice}
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{...font.fs_20, textAlign: 'right', ...color.light}}>
                            Detail <Icon name='chevron-down-outline' style={{...font.fs_20}} />
                        </Text>
                    </Col>
                </Grid>
                <Grid style={{...spacing.px_20, ...spacing.mt_20}}>
                    <Row>
                        <Text style={{...font.fs_20, ...font.fw_bold}}>
                            Virtual Account Transfer
                        </Text>
                    </Row>
                    <Row style={{...spacing.mt_10}}>
                        <IconFa name='credit-card' style={{...font.fs_25, ...color.primary}} />
                    </Row>
                    <Row style={{...spacing.mt_20}}>
                        <Text style={{...font.fs_20, ...font.fw_bold}}>
                            Credit Card
                        </Text>
                    </Row>
                    <Row style={{...spacing.mt_10}}>
                        <IconFa name='cc-visa' style={{...font.fs_25, ...color.primary}} />
                        <IconFa name='cc-paypal' style={{...font.fs_25, ...color.primary, ...spacing.ml_20}} />
                        <IconFa name='cc-mastercard' style={{...font.fs_25, ...color.primary, ...spacing.ml_20}} />
                    </Row>
                    <Row style={{...spacing.mt_20}}>
                        <Text style={{...font.fs_20, ...font.fw_bold}}>
                            Pay Later
                        </Text>
                    </Row>
                    <Row style={{...spacing.mt_10}}>
                        <IconFa name='cc-jcb' style={{...font.fs_25, ...color.primary}} />
                    </Row>
                    <Row style={{...spacing.mt_30}}>
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
    getDataTransaction, getAllDataTransaction
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)