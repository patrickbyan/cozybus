import React, {useState} from 'react'
import { Button, Container, Content, Grid, Row, Text } from 'native-base'
import { Image } from 'react-native'
import {connect} from 'react-redux'

// Styles
import Spacing from './../../Supports/Styles/Spacing'

// Redux
import {onUserLogout} from './../../Redux/Actions/UserAction'

// ImagePicker
import ImagePicker from 'react-native-image-crop-picker';

const Profile = ({onUserLogout}) => {

    const [imageUrl, setImageUrl] = useState(null)

    const getImage = () => {
        // OPEN CAMERA
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        //   })
        //   .then(image => {
        //     setImageUrl(image.path)
        //   })
        //   .catch(err => {
        //       console.log(err)
        //   })

        // OPEN GALLERY
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          })
          .then(image => {
            setImageUrl(image.path)
          })
          .catch(err => {
              console.log(err)
          })
    }

    return(
        <Container>
            <Content>
                <Grid>
                    <Row style={{justifyContent: 'center', ...Spacing.mtFive}}>
                        <Image source={{uri: imageUrl}} 
                            style={{width: 100, height: 100, borderRadius: 100}} 
                        />
                    </Row>
                    <Row style={{justifyContent: 'center', ...Spacing.mtFive}}>
                        <Button onPress={getImage}>
                            <Text>
                                Edit Photo
                            </Text>
                        </Button>
                    </Row>
                </Grid>
                <Grid style={{...Spacing.mtFive}}>
                    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Button onPress={onUserLogout}>
                            <Text>
                                Logout
                            </Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onUserLogout
}

export default connect('', mapDispatchToProps)(Profile)