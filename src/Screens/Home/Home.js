import React from 'react'
import { Button, Col, Content, Form, Grid, Input, Item, Label, Picker, Container, Header, Left, Right, Body, Title } from 'native-base'
import { View, Text } from 'react-native'
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux'

// Styles
import spacing from './../../Supports/Styles/Spacing'
import color from './../..//Supports/Styles/Color'

// Redux
import {onSetDeparture, onSetArrival} from './../../Redux/Actions/FilterAction'

const Home = ({onSetDeparture, onSetArrival, filter}) => {

    const checkGStore = () => {
        console.log(filter)
    }

    return(
        <Container>
            <Header style={{...color.bgPrimary}}>
                <Left />
                <Body style={{borderWidth: 1, borderColor: 'white', width: '100%'}}>
                    <Title>
                        MyBus
                    </Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <View style={{...spacing.mFive, backgroundColor: 'white'}}>
                <Form>
                    <Item stackedLabel>
                        <Label>Mulai Dari</Label>
                        <Input onChangeText={onSetDeparture} />

                    </Item>
                </Form>
                <Form>
                    <Item stackedLabel>
                        <Label>Kota Tujuan</Label>
                        <Input onChangeText={onSetArrival} />
                    </Item>
                </Form>
                </View>
                <Grid style={{...spacing.mFive, backgroundColor: 'white'}}>
                    <Col>
                        <Form>
                            <Item stackedLabel>
                                <Label>Tanggal Perjalanan</Label>
                                <DatePicker
                                    style={{width: 200, marginTop: 10}}
                                    date={new Date()}
                                    minDate={new Date()}
                                    mode="date"
                                    format="DD-MM-YYYY"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    
                                    customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        marginLeft: 20
                                    },
                                    dateInput: {
                                        marginLeft: 0,
                                        marginTop: -10,
                                        borderWidth: 0
                                    }
                                    // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {setTanggal(date)}}
                                />
                            </Item>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Item stackedLabel>
                                <Label>Jumlah Seat</Label>
                                {/* <Picker
                                    selectedValue={1}
                                    style={{ height: 50, width: 150 }}
                                    onValueChange={(itemValue, itemIndex) => setJumlahSeat(itemValue)}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                    <Picker.Item label="3" value="3" />
                                    <Picker.Item label="4" value="4" />
                                </Picker> */}

                            </Item>
                        </Form>
                    </Col>
                </Grid>
                <View style={{...spacing.mThree}}>
                    <Button rounded onPress={checkGStore} info style={{width: '100%', ...color.bgPrimary}}>
                        <Text style={{...color.light, width: '100%', textAlign: 'center'}}>
                            SEARCH SHUTTLES
                        </Text>                        
                    </Button>
                </View>
                
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onSetDeparture, onSetArrival
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)