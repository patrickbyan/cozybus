import React, {useEffect} from 'react'
import { Body, Header, Col, Content, Grid, Icon, Text, Row, Container, Title, Button, Spinner, Tabs, Tab } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import {connect} from 'react-redux'

// Styles
import spacing from './../../Supports/Styles/Spacing'
import color from './../../Supports/Styles/Color'
import font from '../../Supports/Styles/Typography'

import Splash from '../Splash/Splash'

// Action
import {getAllDataTransaction, getExpiredAt} from './../../Redux/Actions/TransactionAction'

// Moment
import Moment from 'moment'
import 'moment-timezone'


const BookingHistory = ({navigation: {navigate}, getAllDataTransaction, user, transactions, getExpiredAt}) => {
    useEffect(() => {
        console.log('masuk')
        getAllDataTransaction(user.id)
    }, [])

    const onPayment = (idTransaction, expiredAt) => {
        let now = Moment(new Date()).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss')
        let diff = Moment.duration(Moment(expiredAt).diff(Moment(now)))
        let second = diff.asSeconds()

        getExpiredAt(second)

        navigate('Payment', {idTransaction: idTransaction})
    }

    if(transactions.allTransaction === null){
        return(
            <Splash />
        )
    }

    return(
        <Container>
            <Header hasTabs style={{alignItems: 'center'}}>
                <Title style={{...color.light}}>
                    Booking History
                </Title>
            </Header>
            <Tabs>
                <Tab heading="Selesai">
                    <Content>
                        {
                            transactions.allTransaction.length > 0?
                                transactions.allTransaction.map((value, index) => {
                                    if(value.status === 'Paid' || value.status === 'Unpaid'){
                                        return(
                                            <View key={index} style={{...spacing.mt_20,  ...spacing.mx_20, bordercolor: 'grey', borderWidth: 0.3, borderRadius: 3, ...color.bg_light}}>
                                                <Grid style={{...spacing.mx_20, ...spacing.mt_20, ...spacing.mb_8, borderBottomcolor: 'grey', borderBottomWidth: 0.3}}>
                                                    <Row>
                                                        <Col>
                                                            <Text style={{...color.success}}>
                                                                {value.status}
                                                            </Text>
                                                        </Col>
                                                        <Col>
                                                            <Text style={{...spacing.ml_8, ...spacing.mb_8, textAlign: 'right'}}>
                                                                {value.departureDate}
                                                            </Text>
                                                        </Col>
                                                    </Row>
                                                    <Col>
                                                        <Text>
                                                            {value.seat}
                                                        </Text>
                                                    </Col>
                                                    <Col>
                                                    {
                                                        value.status === 'Unpaid'?
                                                            <TouchableOpacity onPress={() => onPayment(value.id, value.expiredAt)} style={{height: 30}} >
                                                                <Text style={{...font.fst_italic, ...color.primary}}>
                                                                    Pay Now?
                                                                </Text>
                                                            </TouchableOpacity>
                                                        :
                                                            null
                                                    }
                                                    </Col>
                                                </Grid>
                                                <Grid style={{...spacing.mx_20, alignItems: 'center'}}>
                                                    <Col>
                                                        <Text style={{...color.muted, ...font.fs_15}}>
                                                            From
                                                        </Text>
                                                        <Text>
                                                            {value.from}
                                                        </Text>
                                                    </Col>
                                                    <Col>
                                                        <Text style={{textAlign: 'right', ...color.muted, ...font.fs_15}}>
                                                            To
                                                        </Text>
                                                        <Text style={{textAlign: 'right'}}>
                                                            {value.to}
                                                        </Text>
                                                    </Col>
                                                </Grid>
                                                <Grid style={{...spacing.mx_20, alignItems: 'center'}}>
                                                    <Col>
                                                        <Text>
                                                            {value.name}
                                                        </Text>
                                                    </Col>
                                                    <Col>
                                                        <Text style={{textAlign: 'right'}}>
                                                            {value.expiredAt}
                                                        </Text>
                                                    </Col>
                                                </Grid>
                                            </View> 
                                        )
                                    }
                                })
                            :
                                <Text style={{textAlign: 'center', ...color.muted}}>
                                    There's no success booking yet
                                </Text>
                        }
                    </Content>
                </Tab>
                <Tab heading="Telah Dibatalkan">
                    <Content>
                        {
                            transactions.allTransaction.length > 0?
                                transactions.allTransaction.map((value, index) => {
                                    if(value.status === 'Cancelled'){
                                        return(
                                            <View key={index} style={{...spacing.mt_20,  ...spacing.mx_20, bordercolor: 'grey', borderWidth: 0.3, borderRadius: 3, elevation: 2, backgroundcolor: 'white'}}>
                                                <Grid style={{...spacing.mx_20, ...spacing.mt_20, ...spacing.mb_8, borderBottomcolor: 'grey', borderBottomWidth: 0.3}}>
                                                    <Row>
                                                        <Col>
                                                            <Text style={{color: 'green'}}>
                                                                {value.status}
                                                            </Text>
                                                        </Col>
                                                        <Col>
                                                            <Text style={{...spacing.ml_8, ...spacing.mb_8, textAlign: 'right'}}>
                                                                {value.departureDate}
                                                            </Text>
                                                        </Col>
                                                    </Row>
                                                    <Col>
                                                        <Text>
                                                            {value.seat}
                                                        </Text>
                                                    </Col>
                                                    <Col>
                                                    {
                                                        value.status === 'Unpaid'?
                                                            <TouchableOpacity onPress={() => onPayment(value.id, value.expiredAt)} style={{height: 30}} >
                                                                <Text style={{fontStyle: 'italic', ...color.primary}}>
                                                                    Pay Now?
                                                                </Text>
                                                            </TouchableOpacity>
                                                        :
                                                            null
                                                    }
                                                    </Col>
                                                </Grid>
                                                <Grid style={{...spacing.mx_20, alignItems: 'center'}}>
                                                    <Col>
                                                        <Text style={{...color.muted, ...font.fs_15}}>
                                                            From
                                                        </Text>
                                                        <Text>
                                                            {value.from}
                                                        </Text>
                                                    </Col>
                                                    <Col>
                                                        <Text style={{textAlign: 'right', ...color.muted, ...font.fs_15}}>
                                                            To
                                                        </Text>
                                                        <Text style={{textAlign: 'right'}}>
                                                            {value.to}
                                                        </Text>
                                                    </Col>
                                                </Grid>
                                                <Grid style={{...spacing.mx_20, alignItems: 'center'}}>
                                                    <Col>
                                                        <Text style={{textAlign: 'right'}}>
                                                            {value.expiredAt}
                                                        </Text>
                                                    </Col>
                                                </Grid>
                                            </View> 
                                        )
                                    }
                                })
                            :
                                <Text style={{textAlign: 'center', ...color.muted}}>
                                    There's no cancelled booking yet
                                </Text>
                        }
                    </Content>
                </Tab>
            </Tabs>
        </Container>
    )
}

const mapDispatchToProps = {
    getAllDataTransaction, getExpiredAt
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistory)