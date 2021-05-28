import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Button, Content, Grid, Input, Item, Container, Header, Body, Row, Text, Card, CardItem, Spinner} from 'native-base'
import { Image } from 'react-native'
import DatePicker from 'react-native-datepicker'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome' 

// Styles
import spacing from './../../Supports/Styles/Spacing'
import color from './../..//Supports/Styles/Color'
import font from './../../Supports/Styles/Typography'

// Redux
import {onSetDeparture, onSetArrival, onSetTotalSeat, onSetDate} from './../../Redux/Actions/FilterAction'

const Home = ({navigation: {navigate}, onSetDeparture, onSetArrival, filter, onSetDate}) => {
    
    const [error, setError] = useState('')

    const onSearchShuttle = () => {

        if(filter.departure && filter.arrival && filter.date){
            navigate('ShuttleLists', {data: filter})
            setError('')
        }else{
            return setError('Masukan Semua Inputan')
        }
    }
    
    return(
        <Container>
            <Header style={{...color.bg_primary}}>
                <Body style={{alignItems: 'center', width: '100%'}}>
                    <Image source={require('../../Supports/Images/logo.png')} style={{width: '50%', resizeMode: 'center'}} />
                </Body>
            </Header>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Row style={{width: '100%', ...spacing.pt_10, ...spacing.pb_0}}>
                                <Item style={{width: '100%'}}>
                                    <Icon name='map-marker' style={{...spacing.px_20, ...spacing.py_0, ...font.fs_20, ...color.secondary}} />
                                    <Input placeholder='Masukan Asal' onChangeText={onSetDeparture} style={{...spacing.py_0, ...font.fs_15}} />
                                </Item>
                            </Row>
                            <Row style={{width: '100%', ...spacing.pt_10, ...spacing.pb_0}}>
                                <Item style={{width: '100%'}}>
                                    <Icon name='bus' style={{...spacing.px_20, ...spacing.py_0, ...font.fs_20, ...color.secondary}} />
                                    <Input placeholder='Masukan Tujuan' onChangeText={onSetArrival} style={{...spacing.py_0, ...font.fs_15}} />
                                </Item>
                            </Row>
                            <Row style={{width: '100%', ...spacing.pt_10, ...spacing.pb_20}}>
                                <Item style={{width: '100%'}}>
                                    <Icon name='calendar' style={{...spacing.px_20, ...spacing.py_0, ...font.fs_25, ...color.secondary}} />
                                    <DatePicker
                                        placeholder='Pilih Tanggal'
                                        style={{width: 200, ...spacing.mt_10}}
                                        date={filter.date}
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
                            <Row style={{justifyContent: 'center', alignSelf: 'center', ...spacing.p_0}}>
                                <Text style={{...color.danger, ...font.fst_italic}}>
                                    {
                                        error
                                    }
                                </Text>
                            </Row>
                            <Row style={{...spacing.pt_10}}>
                                <Button onPress={onSearchShuttle} block style={{width: '100%', ...color.bg_primary}} >
                                    <Text style={{width: '100%', textAlign: 'center', ...font.fs_15, ...font.fw_light, ...color.light}}>
                                        Search
                                    </Text>
                                </Button>
                            </Row>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onSetDeparture, onSetArrival, onSetTotalSeat, onSetDate
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)