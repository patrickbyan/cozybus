import { Card, CardItem, Container, Content, Spinner, Text } from 'native-base'
import { Image } from 'react-native'
import React from 'react'
// import splash from require('../../Supports/Images/PleaseWait.png')

import color from '../../Supports/Styles/Color'
import spacing from '../../Supports/Styles/Spacing'

const Splash = () => {
    return(
        <Container>
            <Content style={{...color.bg_cb_darkblue}}>
                <Image source={require('../../Supports/Images/PleaseWait.png')} style={{width: '100%', resizeMode: 'center', marginTop: 200}} />
                <Spinner color='white' />
            </Content>
        </Container>
    )
}

export default Splash