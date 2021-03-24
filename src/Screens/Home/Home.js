import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Button, Content, Grid, Input, Item, Container, Header, Body, Row, Text, Card, CardItem} from 'native-base'
import DatePicker from 'react-native-datepicker'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome' 

// Styles
import Spacing from './../../Supports/Styles/Spacing'
import Color from './../..//Supports/Styles/Color'
import Font from './../../Supports/Styles/Typography'

// Redux
import {onSetDeparture, onSetArrival, onSetTotalSeat, onSetDate} from './../../Redux/Actions/FilterAction'

const Home = ({navigation: {navigate}, onSetDeparture, onSetArrival, filter, onSetTotalSeat}) => {
    return(
        <Container>
            <Header style={{...Color.bgPrimary}}>
                <Body style={{alignItems: 'center', width: '100%'}}>
                    <Text style={{...Font.fsFive, ...Color.light, fontStyle: 'italic', fontWeight: 'bold'}}>
                        MyBus Apps
                    </Text>
                </Body>
            </Header>
            <Content>
                <Grid style={{alignSelf: 'center', ...Spacing.pxThree, ...Spacing.pyZero, ...Spacing.mtFive}}>
                    <Card style={{width: '98%', borderRadius: 3}}>
                        <CardItem>
                            <Body>
                                <Row style={{width: '100%', ...Spacing.ptOne, ...Spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='map-marker' style={{...Spacing.pxThree, ...Spacing.pyZero, ...Font.fsFive, ...Color.secondary}} />
                                        <Input placeholder='Berangkat Dari' onChangeText={onSetDeparture} style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...Spacing.ptOne, ...Spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='map-marker' style={{...Spacing.pxThree, ...Spacing.pyZero, ...Font.fsFive, ...Color.secondary}} />
                                        <Input placeholder='Tujuan' onChangeText={onSetArrival} style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...Spacing.ptOne, ...Spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='bus' style={{...Spacing.pxThree, ...Spacing.pyZero, ...Font.fsFive, ...Color.secondary}} />
                                        <Input placeholder='Jumlah Kursi (Max 3)' onChangeText={onSetTotalSeat} style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...Spacing.ptOne, ...Spacing.pbSix}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='calendar' style={{...Spacing.pxThree, ...Spacing.pyZero, ...Font.fsFive, ...Color.secondary}} />
                                        <DatePicker
                                            style={{width: 200, marginTop: 10}}
                                            date={new Date()}
                                            minDate={new Date()}
                                            mode="date"
                                            format="DD-MM-YYYY"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            onDateChange={(date) => onSetDate(date)}
                                            showIcon={false}

                                            customStyles={{
                                                dateInput: {
                                                    fontSize: 20,
                                                    marginLeft: -115,
                                                    marginTop: -10,
                                                    borderWidth: 0
                                                }
                                            }}
                                        />
                                    </Item>
                                </Row>
                            </Body>
                        </CardItem>
                    </Card>
                </Grid>
                <Grid style={{alignSelf: 'center', ...Spacing.pxThree, ...Spacing.pyZero}}>
                    <Row style={{...Spacing.pxZero, ...Spacing.pyFive}}>
                        <Button onPress={() => navigate('ShuttleLists')} style={{width: '100%', borderRadius: 3, ...Color.bgPrimary}} block>
                            <Text style={{width: '100%', textAlign: 'center', ...Font.fsThree, ...Font.fStyleLight, ...Color.light}}>
                                Search
                            </Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onSetDeparture, onSetArrival, onSetTotalSeat
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)