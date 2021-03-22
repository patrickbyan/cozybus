import { Container, Content, Grid, Col, Row, Text, Item, Label, Input, Button } from 'native-base'
import React from 'react'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

const Login = ({navigation: {navigate}}) => {
    return(
        <Container>
            <Content>
                <Grid> 
                    <Row style={{...Spacing.plFive, ...Spacing.ptFive}}>
                        <Text style={{...Font.fsFive, ...Font.fStyleBold}}>
                            Sign In
                        </Text>
                    </Row>
                    <Row style={{...Spacing.plFive, ...Spacing.ptFive}}>
                        <Text style={{...Font.fsSeven, ...Font.fStyleBold, ...Color.primary}}>
                            Welcome!
                        </Text>
                    </Row>
                    <Row style={{...Spacing.plFive}}>
                        <Text style={{...Font.fsThree}}>
                            Enter your account to continue booking!
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
                    <Row style={{justifyContent: 'flex-end', ...Spacing.prFive}}>
                        <Text style={{color: 'blue'}}>
                            Forgot Password
                        </Text>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Button rounded style={{width: '100%', ...Color.bgPrimary}}>
                            <Text style={{textAlign: 'center', width: '100%'}}>
                                Login
                            </Text>
                        </Button>
                    </Row>
                    <Row style={{justifyContent: 'center', ...Spacing.ptFive}}>
                        <Text onPress={() => navigate('Register')}>
                            Don't have account? Sign Up
                        </Text>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

export default Login