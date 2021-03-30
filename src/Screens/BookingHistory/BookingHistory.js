import React, {useEffect, useState, useRef} from 'react'
import { Body, Header, Col, Content, Grid, Icon, Text, Row, Container, Title, Button } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import {connect} from 'react-redux'

// Styles
import Spacing from './../../Supports/Styles/Spacing'
import Color from './../../Supports/Styles/Color'
import Font from '../../Supports/Styles/Typography'

// Action
import {getAllDataTransaction} from './../../Redux/Actions/TransactionAction'

const BookingHistory = ({getAllDataTransaction, user, transactions}) => {

    useEffect(() => {
        console.log('Runnn')
        getAllDataTransaction(user.id)
    }, [])

    const checkData = () => {
        console.log(transactions.allTransaction)
    }

    if(transactions.allTransaction === null){
        return(
            null
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
                    transactions.allTransaction.map((value, index) => {
                        return(
                            <View key={index} style={{...Spacing.mtFive,  ...Spacing.mxFive, borderColor: 'grey', borderWidth: 0.3, borderRadius: 3, elevation: 2, backgroundColor: 'white'}}>
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
                                    <Col style={{width: 50}}>
                                        <Text>
                                            Arrow
                                        </Text>
                                    </Col>
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
                                <Grid>
                                    <Row>
                                        <Button onPress={checkData}>
                                            <Text>
                                                Check Data
                                            </Text>
                                        </Button>
                                    </Row>
                                </Grid>
                                <View style={{...Spacing.mxFive, ...Spacing.mbTwo, ...Spacing.mtTwo}}>
                                    <Text>
                                        {value.name}
                                    </Text>
                                </View>
                            </View> 
                        )
                    })
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