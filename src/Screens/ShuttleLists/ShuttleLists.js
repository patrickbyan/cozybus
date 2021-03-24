import { Col, Container, Content, Grid, Header, Row, Text, Title, View } from 'native-base'
import React, {useEffect} from 'react'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const ShuttleLists = ({route}) => {

    useEffect(() => {
        console.log(route.params.data)
    }, [])

    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Title>
                    Bandung to Surabaya
                </Title>
            </Header>
            <Content style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                <View style={{...Spacing.mbThree, ...Spacing.pbFive, borderBottomWidth: 1, borderColor: 'grey'}}>
                    <Grid>
                        <Col>
                            <Text style={{...Font.fsFive}}>
                                12:00 - 12:00
                            </Text>
                        </Col>
                        <Col>
                            <Text style={{textAlign: 'right', fontWeight: 'bold', ...Font.fsFive}}>
                                Rp.250.000
                            </Text>
                        </Col>
                    </Grid>
                    <Grid>
                        <Row>
                            <Text>
                                10H 11M - 32 Tempat Duduk
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.mtThree, alignItems: 'center'}}>
                        <Col>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Pahala Kencana
                            </Text>
                        </Col>
                        <Col style={{width: '12%'}}>
                            <Text style={{textAlign: 'center', borderRadius: 3, paddingVertical: 3, ...Color.bgSuccess, ...Color.light}}>
                                <Icon name='star' /> 5
                            </Text>
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.mtThree}}>
                        <Row>
                            <Text style={{...Font.fsFive}}>
                                Bandung - Surabaya
                            </Text>
                        </Row>
                    </Grid>
                </View>
            </Content>
        </Container>
    )
}

export default ShuttleLists