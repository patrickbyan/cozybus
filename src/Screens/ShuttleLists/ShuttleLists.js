import { Col, Container, Content, Grid, Header, Row, Spinner, Text, Title, View, Icon, Left, Button, Body, Right } from 'native-base'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Typography'

// Action
import {getShuttleLists} from './../../Redux/Actions/ShuttlesAction'

const ShuttleLists = ({route, getShuttleLists, shuttles, navigation: {navigate}}) => {

    useEffect(() => {
        let departure = route.params.data.departure
        let arrival = route.params.data.arrival
        console.log(route.params.data.date)
        getShuttleLists(departure, arrival)
    }, [])

    if(shuttles.shuttleList === null){
        return(
            <Container>
                <Header style={{alignItems: 'center', ...color.bg_primary}}>
                    <Title>
                        Bandung to Surabaya
                    </Title>
                </Header>
                <Spinner color='red' />
                <Text style={{textAlign: 'center', ...font.fs_20}}>
                    Loading
                </Text>
            </Container>
        )
    }

    return(
        <Container>
            <Header style={{...color.bg_primary}}>
                <Left>
                    <Button transparent onPress={() => navigate('Home')}>
                        <Icon name='chevron-back-outline' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{...font.fs_15, ...font.fw_bold}}>
                        {route.params.data.departure} - {route.params.data.arrival}
                    </Title>
                </Body>
                <Right>
                    <Button hasText transparent>
                        <Text></Text>
                    </Button>
                </Right>
            </Header>
            <Content style={{...spacing.px_30, ...spacing.mt_15}}>
                {
                    shuttles.shuttleList.length === 0?
                        null
                    :
                        <View>
                            <Grid>
                                <Row>
                                    <Text style={{textAlign: 'center', width: '100%', ...color.muted}}>
                                        Pencarian Sebanyak {shuttles.shuttleList.length} Bus Berhasil.
                                    </Text>
                                </Row>
                            </Grid>
                        </View>
                }
                {
                    shuttles.shuttleList.length === 0?
                        <View>
                            <Grid>
                                <Row>
                                    <Text style={{textAlign: 'center', width: '100%', ...color.muted}}>
                                        Armada Tidak Ditemukan
                                    </Text>
                                </Row>
                            </Grid>
                        </View>
                    :
                    shuttles.shuttleList.map((value, index) => {
                        return(
                            <TouchableOpacity key={index} onPress={() => navigate('ShuttleDetail', {id: value.id})}>
                                <View style={{...spacing.my_10, ...spacing.pb_25, borderBottomWidth: 1, borderColor: 'grey'}}>
                                    <Grid>
                                        <Col>
                                            <Text style={{...font.fs_20, ...font.fw_bold}}>
                                                {value.name}
                                            </Text>
                                        </Col>
                                        <Row>
                                            <Text style={{...font.fs_12, ...color.success, ...font.fw_bold, ...spacing.mt_8}}>
                                                {value.seat.length} Seat Tersedia
                                            </Text>
                                        </Row>
                                        <Row style={{...spacing.mt_15}}>
                                            <Col>
                                                <Text style={{...font.fs_12, ...color.muted}}>
                                                    Kelas
                                                </Text>
                                                <Text style={{...font.fs_15, ...font.fw_bold}}>
                                                    {value.class}
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Text style={{...font.fs_12, ...color.muted}}>
                                                    Tarif
                                                </Text>
                                                <Text style={{...font.fs_15, ...font.fw_bold}}>
                                                    Rp {(value.price).toLocaleString()}
                                                </Text>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getShuttleLists
}

const mapStateToProps = (state) => {
    return{
        shuttles: state.shuttles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShuttleLists)