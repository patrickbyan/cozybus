import React, { useState } from 'react'
import { Container, Content, Icon, Text, Item, Label, Input, Button, Header, Left, Body, Title, Form, Footer } from 'native-base'

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Typography'

// Redux
import {connect} from 'react-redux'

import {onUserRegister} from './../../Redux/Actions/UserAction'

const Register = ({navigation: {navigate}, onUserRegister, user}) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errorInput, setErrorInput] = useState('')

    const onEmailValidation = (input) => {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(regex.test(input)){
            setInputEmail(input)
            setErrorInput('')
        }else{
            setErrorInput('Email Tidak Valid')
        }
    }

    const onPasswordValidation = (input) => {
        let symbol = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        
        if(!symbol.test(input)){
            return setErrorInput('Password Harus Memiliki Karakter Huruf Besar, Huruf Kecil, dan Angka Minimal 1 Karakter')
        }else{
            setInputPassword(input)
            setErrorInput('')
        }
    }

    const onConfirmPassword = (Input) => {
        if(inputPassword !== Input) return setErrorInput('Confirm Password tidak sama dengan Password')

        setErrorInput('')
    }

    const submitRegister = () => {
        onUserRegister(inputEmail.toLowerCase(), inputPassword)
    }

    return(
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => navigate('Login')}>
                        <Icon name='chevron-back-circle-outline'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Register</Title>
                </Body>
            </Header>

            <Content padder style={{...spacing.mt_10}}>
                <Content padder>
                    <Text style={{...font.fw_bold, ...font.fs_20}}>
                        Register for cozybus
                    </Text>
                    <Text style={{...color.muted, ...font.fs_15}}>
                        Fill in the data below to complete your registration
                    </Text>
                    
                    <Form style={{...spacing.mt_30}}>
                        <Item stackedLabel last>
                            <Icon active name='person-outline' />
                            <Label style={{...font.fs_12}}>Email/Phone Number</Label>
                            <Input name="email" onChangeText={(input) => onEmailValidation(input)} />
                        </Item>
                        <Item stackedLabel last>
                            <Icon active name='lock-closed-outline' />
                            <Label style={{...font.fs_12}}>Password</Label>
                            <Input name='password' onChangeText={(input) => onPasswordValidation(input)} />
                        </Item>
                        <Item stackedLabel last>
                            <Icon active name='lock-closed-outline' />
                            <Label style={{...font.fs_12}}>Confirm Password</Label>
                            <Input name="confirmPassword" onChangeText={(input) => onConfirmPassword(input)} />
                        </Item>
                    </Form>
                    <Text style={{textAlign: 'center', ...color.danger, ...font.fs_15, ...spacing.mt_10}}>
                        {errorInput}{user.error? user.error : null}
                    </Text>
                </Content>

                <Content padder>
                    {
                        user.loading?
                            <Button rounded info block disabled style={{...spacing.mt_10}}>
                                <Text>SIGN UP</Text>
                            </Button>
                        :
                            <Button rounded info block onPress={submitRegister} style={{...spacing.mt_15}}>
                                <Text>SIGN UP</Text>
                            </Button>
                    }
                    <Text style={{textAlign: 'center', ...font.fw_bold, ...font.fs_15, ...spacing.mt_15}}>
                        or sign in with
                    </Text>

                    <Button rounded block style={{...spacing.my_15, ...color.bg_light}}>
                        <Icon name='logo-google' style={{...color.dark}}/>
                        <Text style={{...color.dark}}>Sign up with google</Text>
                    </Button>
                    <Button rounded primary block>
                        <Icon name='logo-facebook' />
                        <Text>Sign up with facebook</Text>
                    </Button>
                </Content>
            </Content>
            <Footer>
                <Body style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{...color.light}}>
                        Have an account? 
                    </Text>
                    <Text 
                        style={{...color.light, ...font.fw_bold, ...spacing.ml_10}} 
                        onPress={() => navigate('Login')}>
                        Sign In
                    </Text>
                </Body>
            </Footer>
        </Container>
    )
}

const mapDispatchToProps = {
    onUserRegister
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)