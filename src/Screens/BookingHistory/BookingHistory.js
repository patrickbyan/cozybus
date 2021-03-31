import React, {useEffect, useState, useRef} from 'react'
import { Body, Header, Col, Content, Grid, Text, Row, Container, Title, Button, Spinner } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import {connect} from 'react-redux'

// Styles
import Spacing from './../../Supports/Styles/Spacing'
import Color from './../../Supports/Styles/Color'
import Font from '../../Supports/Styles/Typography'

// Action
import {getAllDataTransaction} from './../../Redux/Actions/TransactionAction'

// Icon
import Icon from 'react-native-vector-icons/Ionicons'

const BookingHistory = ({getAllDataTransaction, user, transactions, navigation: {navigate}}) => {

    useEffect(() => {
        console.log('Runnn')
        getAllDataTransaction(user.id)
    }, [])

    const checkData = () => {
        console.log(transactions.allTransaction)
    }

    if(transactions.allTransaction === null){
        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                    <Title style={{...Color.light}}>
                        Booking History
                    </Title>
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
                <Title style={{...Color.light}}>
                    Booking History
                </Title>
            </Header>
            <Content>
                {
                    transactions.allTransaction.length > 0?
                        transactions.allTransaction.map((value, index) => {
                            return(
                                <View key={index} onPress={() => navigation.navigate('Payment')} style={{...Spacing.mtFive,  ...Spacing.mxFive, borderColor: 'grey', borderWidth: 0.3, borderRadius: 3, elevation: 2, backgroundColor: 'white'}}>
                                    <Grid style={{...Spacing.mxFive, ...Spacing.mtFive, ...Spacing.mbTwo, borderBottomColor: 'grey', borderBottomWidth: 0.3}}>
                                        <Col>
                                            <Text style={{color: 'green'}}>
                                                {value.status}
                                            </Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity onPress={() => navigate('Payment', {idTransaction: value.id})} style={{height: 30}} >
                                                <Text style={{fontStyle: 'italic', ...Color.primary}}>
                                                    Pay Now?
                                                </Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col>
                                            <Text style={{...Spacing.mlThree, ...Spacing.mbTwo, textAlign: 'right'}}>
                                                {value.departureDate}
                                            </Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={{...Spacing.mxFive, alignItems: 'center'}}>
                                        <Col>
                                            <Text style={{color:'grey', ...Font.fsFifteen}}>
                                                From
                                            </Text>
                                            <Text>
                                                {value.from}
                                            </Text>
                                        </Col>
                                        <Col>
                                            <Text style={{textAlign: 'right', color:'grey', ...Font.fsFifteen}}>
                                                To
                                            </Text>
                                            <Text style={{textAlign: 'right'}}>
                                                {value.to}
                                            </Text>
                                        </Col>
                                    </Grid>
                                    <View style={{...Spacing.mxFive, ...Spacing.mbTwo, ...Spacing.mtTwo}}>
                                        <Text>
                                            {value.name}
                                        </Text>
                                    </View>
                                    <Grid>
                                        <Row>
                                            <Text>
                                                Expired At : {value.expiredAt}
                                            </Text>
                                        </Row>
                                    </Grid>
                                </View> 
                            )
                        })
                    :
                        <Grid style={{...Spacing.mtFive}}>
                            <Row style={{justifyContent: 'center'}}>
                                <Icon name='close-circle-outline' style={{...Font.fsSeven}} />
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                <Text>
                                    Booking Still Empty
                                </Text>
                            </Row>
                        </Grid>
                }
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
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistory)