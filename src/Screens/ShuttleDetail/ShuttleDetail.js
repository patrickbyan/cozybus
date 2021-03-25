import { Card, Col, Container, Content, Grid, Header, Row, Text, Title } from 'native-base'
import {Image} from 'react-native'
import React from 'react'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

const ShuttleDetail = () => {
    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Title>
                    Shuttle Detail
                </Title>
            </Header>
            <Content>
                <Grid>
                    <Row>
                        <Image source={{uri: 'https://st.redbus.in/bo-images/IDN/WM/16130/1215/FR/L/LSk97O.jpeg'}} style={{width: '100%', height: 200}} />
                    </Row>
                </Grid>
                <Grid>
                    <Col>
                        <Image source={{uri: 'https://st.redbus.in/bo-images/IDN/WM/16130/1215/SI/L/U9Hfkw.jpeg'}} style={{height: 100}} />
                    </Col>
                    <Col>
                        <Image source={{uri: 'https://st.redbus.in/bo-images/IDN/WM/16130/1215/SI/L/U9Hfkw.jpeg'}} style={{height: 100}} />
                    </Col>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                    <Col>
                        <Text style={{...Font.fsSix, fontWeight: 'bold'}}>
                            Pahala Kencana
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
                            Rp. 200.000
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
                                Surabaya
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
                                Tangerang
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
                    <Col>
                        <Text>
                            A
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            A
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            A
                        </Text>
                    </Col>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Seat
                        </Text>
                    </Row>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtTwo, flexWrap: 'wrap'}}>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%'}}>
                    
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%'}}>
                    
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%'}}>
                    
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%'}}>
                    
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                    <Col style={{width: '20%', ...Spacing.mbTwo}}>
                        <Icon1 name='person-outline' style={{fontSize: 25}} />
                    </Col>
                </Grid>
            </Content>
        </Container>
    )
}

export default ShuttleDetail