import { Body, Container, Content, Grid, Header, Input, Item, Label, Left, Row, Text } from 'native-base'
import React, {useEffect, useState} from 'react'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import spacing from './../../Supports/Styles/Spacing'

const BookingDetail = ({route, navigation: {navigate}, navigation}) => {

    const [selectedSeat, setSelectedSeat] = useState([])

    useEffect(() => {
        setSelectedSeat(route.params.seat)
    }, [])

    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Left>
                    <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
                </Left>
                <Body>
                    <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                        Booking Detail
                    </Text>
                </Body>
            </Header>
            <Content>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Informasi Kontak
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Email</Label>
                            <Input style={{width: '100%'}} />
                        </Item>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Phone Number</Label>
                            <Input style={{width: '100%'}} />
                        </Item>
                    </Row>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtSeven}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Informasi Penumpang
                        </Text>
                    </Row>
                </Grid>
                {
                    selectedSeat.map((value, index) => {
                        return(
                            <Grid key={index} style={{...Spacing.pxFive}}>
                                <Row>
                                    <Text style={{textAlign: 'right', width: '100%', fontWeight: 'bold'}}>
                                        Seat : {value}
                                    </Text>
                                </Row>
                                <Row style={{...Spacing.mtThree}}>
                                    <Item stackedLabel style={{width: '100%'}}>
                                        <Label>Email</Label>
                                        <Input style={{width: '100%'}} />
                                    </Item>
                                </Row>
                                <Row style={{...Spacing.mtThree}}>
                                    <Item stackedLabel style={{width: '100%'}}>
                                        <Label>Phone Number</Label>
                                        <Input style={{width: '100%'}} />
                                    </Item>
                                </Row>
                            </Grid>
                        )
                    })
                }
            </Content>
        </Container>
    )
}

export default BookingDetail