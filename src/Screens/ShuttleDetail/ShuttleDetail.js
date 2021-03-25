import { Body, Button, Card, Col, Container, Content, Grid, Header, Left, Right, Row, Spinner, Text, Title } from 'native-base'
import {Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

// Action
import {getShuttleDetail} from './../../Redux/Actions/ShuttlesAction'

const ShuttleDetail = ({navigation, route, getShuttleDetail, shuttles}) => {

    useEffect(() => {
        getShuttleDetail(route.params.id)
    }, [])

    if(shuttles.shuttleDetail){
    
        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                    <Left>
                        <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
                    </Left>
                    <Body>
                        <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                            Shuttle Detail
                        </Text>
                    </Body>
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
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Col>
                            <Text style={{...Font.fsSix, fontWeight: 'bold'}}>
                                {shuttles.shuttleDetail.name}
                            </Text>
                        </Col>
                        <Col style={{width: '12%'}}>
                            <Text style={{textAlign: 'right', paddingVertical: 3, textAlign: 'center', borderRadius: 3, ...Color.bgSuccess, ...Color.light}}>
                                <Icon name='star' /> 5
                            </Text>
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive}}>
                        <Row>
                            <Text>
                                Executive
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{...Font.fsFive, ...Spacing.mtThree, fontWeight: 'bold'}}>
                                Rp. {shuttles.shuttleDetail.price}
                            </Text>
                        </Row>
                    </Grid>
                    <Card style={{...Spacing.mlFive, ...Spacing.mrFive, ...Spacing.mtFive}}>
                        <Grid style={{...Spacing.pxFive, ...Spacing.myThree}}>
                            <Col>
                                <Text style={{...Font.fsThree}}>
                                    Dari : 
                                </Text>
                                <Text style={{...Font.fsFive}}>
                                    {shuttles.shuttleDetail.from}
                                </Text>
                            </Col>
                            <Col>
                                <Text style={{textAlign: 'center', ...Font.fsFive}}>
                                    -
                                </Text>
                            </Col>
                            <Col>
                                <Text style={{...Font.fsThree}}>
                                    Tujuan : 
                                </Text>
                                <Text style={{...Font.fsFive}}>
                                    {shuttles.shuttleDetail.to}
                                </Text>
                            </Col>
                        </Grid>
                    </Card>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Row>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Facility
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtTwo}}>
                        {
                            shuttles.shuttleDetail.facility.map((value, index) => {
                                return(
                                    <Col key={index}>
                                        <Image source={{uri: value.image}} style={{width: 350, height: 350}} />
                                    </Col>
                                )
                            })
                        }
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Row>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Seat
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtTwo, flexWrap: 'wrap'}}>
                        {
                            shuttles.shuttleDetail.seat.map((value, index) => {
                                return(
                                    <Col style={{width: '25%', ...Spacing.mbTwo}}>
                                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                                        <Text>
                                            {value}
                                        </Text>
                                    </Col>
                                )
                            })
                        }
                    </Grid>
                </Content>
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
                    <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                        Shuttle Detail
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

const mapDispatchToProps = {
    getShuttleDetail
}

const mapStateToProps = (state) => {
    return{
        shuttles: state.shuttles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShuttleDetail)