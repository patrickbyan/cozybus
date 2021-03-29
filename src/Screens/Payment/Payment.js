import { Body, Button, Col, Container, Content, Grid, Header, Left, Row, Text } from 'native-base'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'

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

const Payment = ({route, getDataTransaction}) => {

    useEffect(() => {
        console.log(route.params.idTransaction)
    }, [])

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
                    <Col>
                        <Text style={{...Font.fsFive, ...Color.light, fontWeight: 'bold'}}>
                            Bandung
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
                            29-03-2021
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{...Font.fsFive, fontWeight: 'bold', textAlign: 'right', ...Color.light}}>
                            Surabaya
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
                            Rp. 10000000
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
                    <Row style={{...Spacing.mtFive}}>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Manual Bank Transfer
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtFive}}>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Pay Later
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtFive}}>
                        <Button style={{width: '100%'}}>
                            <Text style={{width: '100%', textAlign: 'center'}}>
                                Pay Now
                            </Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getDataTransaction
}

export default connect('', mapDispatchToProps)(Payment)