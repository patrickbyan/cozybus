import { Container, Header, Content, Icon, Grid, Col, Row, Text, Item, Label, Input, Button, Left, Body, Title, Form, Footer } from 'native-base'
import React, {useState} from 'react'
import {connect} from 'react-redux'

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Typography'

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
            onUserLogin(inputEmail.toLowerCase(), inputPassword)
        }
    }

    return(
        <Container>
            <Header>
                <Body>
                    <Title>Sign In</Title>
                </Body>
            </Header>

            <Content padder style={{...spacing.mt_10}}>
                <Content padder>
                    <Text style={{...font.fw_bold, ...font.fs_20}}>
                        Welcome!
                    </Text>
                    <Text style={{...color.muted, ...font.fs_15}}>
                        Enter your account to continue booking
                    </Text>
                    
                    <Form style={{...spacing.mt_30}}>
                        <Item stackedLabel last>
                            <Icon active name='person-outline' />
                            <Label style={{...font.fs_13}}>Email/Phone Number</Label>
                            <Input onChangeText={(input) => setInputEmail(input)} />
                        </Item>
                        <Item stackedLabel last>
                            <Icon active name='lock-closed-outline' />
                            <Label style={{...font.fs_13}}>Password</Label>
                            <Input onChangeText={(input) => setInputPassword(input)} />
                        </Item>
                    </Form>
                    <Text style={{textAlign: 'right', ...color.info, ...font.fw_bold, ...spacing.my_10}}>
                        Forgot Password
                    </Text>
                    <Text style={{textAlign: 'center', ...color.danger, ...font.fs_15, ...spacing.mt_10}}>
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
                </Content>

                <Content padder>
                    <Button rounded info block onPress={submitLogin}>
                        <Text>SIGN IN</Text>
                    </Button>
                    <Text style={{textAlign: 'center', ...font.fw_bold, ...font.fs_15, ...spacing.mt_15}}>
                        or sign in with
                    </Text>
                    <Button iconLeft rounded block style={{...spacing.my_15, ...color.bg_light}}>
                        <Icon name='logo-google' style={{color: 'black'}}/>
                        <Text style={{color: 'black'}}>Sign in with google</Text>
                    </Button>
                    <Button iconLeft rounded primary block>
                        <Icon name='logo-facebook' />
                        <Text>Sign in with facebook</Text>
                    </Button>
                </Content>
            </Content>
            <Footer>
                <Body style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>
                        Don't have an account? 
                    </Text>
                    <Text 
                        style={{...color.light, ...font.fw_bold, ...spacing.ml_10}} 
                        onPress={() => navigate('Register')}>
                        Sign Up
                    </Text>
                </Body>
            </Footer>
        </Container>
    )
}

const mapDispatchToProps = {
    onUserLogin
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)