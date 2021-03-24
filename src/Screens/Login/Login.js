import { Container, Content, Grid, Col, Row, Text, Item, Label, Input, Button } from 'native-base'
import React, {useState} from 'react'
import {connect} from 'react-redux'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Typography'

// Action
import {onUserLogin} from './../../Redux/Actions/UserAction'

const Login = ({navigation: {navigate}, onUserLogin, user}) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputError, setInputError] = useState('')

    const submitLogin = () => {
        if(inputEmail === '' || inputPassword === ''){
            setInputError('Inputan Harus Diisi')
        }else{
            onUserLogin(inputEmail, inputPassword)
        }
    }

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
                            <Input onChangeText={(input) => setInputEmail(input)} />
                        </Item>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Item floatingLabel style={{width: '100%'}}>
                            <Label>Enter Your Password</Label>
                            <Input onChangeText={(input) => setInputPassword(input)} />
                        </Item>
                    </Row>
                    <Row style={{justifyContent: 'flex-end', ...Spacing.prFive}}>
                        <Text style={{color: 'blue'}}>
                            Forgot Password
                        </Text>
                    </Row>
                    <Row style={{justifyContent: 'center', ...Spacing.prFive}}>
                        <Text style={{color: 'red', fontStyle: 'italic'}}>
                            {
                                inputError?
                                    inputError
                                :
                                    null
                            }
                            {
                                user.error?
                                    user.error
                                :
                                    null
                            }
                        </Text>
                    </Row>
                    <Row style={{...Spacing.pxFive, ...Spacing.ptFive}}>
                        <Button rounded onPress={submitLogin} style={{width: '100%', ...Color.bgPrimary}}>
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

const mapDispatchToProps ={
    onUserLogin
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)