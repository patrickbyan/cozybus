import React, {useState,useEffect} from 'react'
import { Button, Container, Content, Grid, Row, Text, Thumbnail, Title, Header, Body, Col, List, ListItem, Left, Right, Icon, Spinner } from 'native-base'
import { Image, View } from 'react-native'
import {connect} from 'react-redux'

// Styles
import Spacing from './../../Supports/Styles/Spacing'
import Color from './../../Supports/Styles/Color'
import Font from '../../Supports/Styles/Typography'

// Redux
import {onUserLogout, onPatchImage} from './../../Redux/Actions/UserAction'
import ImageCropPicker from 'react-native-image-crop-picker'
import color from './../../Supports/Styles/Color'
import axios from 'axios'
import { urlAPI } from '../../Supports/Constants/urlAPI'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({navigation: {navigate}, onUserLogout, user, onGetImage}) => {
    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        axios.get(urlAPI + `/users/${user.id}`)
        .then((res) => {
            setImageURL(res.data.image)
        })
        .catch((err) => {
            console.log(err)
        })
        

    }, [])

    const getImage = () => {
        // OPEN CAMERA
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        })
        .then(image => {
            onPatchImage(image.path)
        })
        .catch(err => {
            console.log(err)
        })
    }
    if(imageURL === null){
        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                    <Body style={{alignItems: 'center', width: '100%'}}>
                        <Text style={{...Font.fsFive, ...Color.light, fontWeight: 'bold'}}>
                            Profile
                        </Text>
                    </Body>
                </Header>
                <Spinner color='red' />
                <Text style={{textAlign: 'center', ...Font.fsFive}}>
                    Loading
                </Text>
            </Container>
        )
    }
    return(
        <Container>
            <Header style={{...Color.bgPrimary}}>
                <Body style={{alignItems: 'center', width: '100%'}}>
                    <Text style={{...Font.fsFive, ...Color.light, fontWeight: 'bold'}}>
                        Profile
                    </Text>
                </Body>
            </Header>
            <Content>
                <Grid style={{...color.bgMuted}}>
                    <Row style={{justifyContent: 'center', alignItems: 'center', ...Spacing.mySix}}>
                        {
                            user.imageURL?
                                <Col onPress={getImage} style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Thumbnail large source={{uri: user.imageURL}} />
                                    <Text style={{...Spacing.mtOne}}>Hello</Text>
                                </Col>   
                            :
                                <Col onPress={getImage} style={{justifyContent: 'center', alignItems: 'center'}}>
                                    {/* <Thumbnail large source={{uri: 'https://www.journalnetwork.org/assets/default-profile-54364fb08cf8b2a24e80ed8969012690.jpg'}} /> */}
                                    <Thumbnail large source={{uri: imageURL}} />
                                    <Text style={{...Spacing.mtOne}}>Add a Picture</Text>
                                </Col>

                        }
                    </Row>
                </Grid>
                <List>
                    <ListItem>
                        <Left>
                            <Text style={{...Color.muted}}>Dompet</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text style={{...Color.muted}}>Ajak & Dapatkan</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text style={{...Color.muted}}>Hadiah Saya</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text 
                                style={{...Color.muted}}
                                onPress={() => navigate('BookingHistory')}
                            >
                                Perjalanan Saya
                            </Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text style={{...Color.muted}}>Pengaturan</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text style={{...Color.muted}}>Tentang Kami</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                </List>
                <Row style={{justifyContent: 'center', alignItems: 'center', ...Spacing.mtEight}}>
                    <Button onPress={onUserLogout}>
                        <Text>
                            Logout
                        </Text>
                    </Button>
                </Row>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = {
    onUserLogout,
    onPatchImage
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)