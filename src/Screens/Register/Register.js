import { Container, Content, Grid, Col, Row, Text, Item, Label, Input, Button } from 'native-base'
import React from 'react'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const Login = () => {
    return(
        <Container>
            <Content>
                <Grid style={{...Spacing.mtFive, alignItems: 'center'}}>
                    <Col style={{...Spacing.plFive, width: '10%'}}>
                        <Icon name='chevron-circle-left' style={{...Font.fsFive}} />
                    </Col>
                    <Col>
                        <Text style={{...Font.fsFive, ...Font.fStyleBold}}>
                            Register
                        </Text>
                    </Col>
                </Grid>
                <Grid> 
                    <Row style={{...Spacing.plFive, ...Spacing.ptFive}}>
                        <Text style={{...Font.fsSeven, ...Font.fStyleBold}}>
                            Welcome!
                        </Text>
                    </Row>
                    <Row style={{...Spacing.plFive}}>
                        <Text style={{...Font.fsThree}}>
                            Register your account to continue booking!
                        </Text>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Item floatingLabel style={{width: '100%'}}>
                            <Label>Enter Your Email</Label>
                            <Input />
                        </Item>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Item floatingLabel style={{width: '100%'}}>
                            <Label>Enter Your Password</Label>
                            <Input />
                        </Item>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Item floatingLabel style={{width: '100%'}}>
                            <Label>Enter Your Confirm Password</Label>
                            <Input />
                        </Item>
                    </Row>
                    <Row style={{justifyContent: 'flex-end', ...Spacing.prFive}}>
                        <Text style={{color: 'blue'}}>
                            Forgot Password
                        </Text>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Button rounded style={{width: '100%'}}>
                            <Text style={{textAlign: 'center', width: '100%'}}>
                                Register
                            </Text>
                        </Button>
                    </Row>
                    <Row style={{justifyContent: 'center', ...Spacing.ptFive}}>
                        <Text>
                            Already have account? Login
                        </Text>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

export default Login