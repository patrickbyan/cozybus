import React, {useState} from 'react'
import { Button, Container, Content, Grid, Row, Text } from 'native-base'
import {connect} from 'react-redux'

// Redux
import {onUserLogout} from './../../Redux/Actions/UserAction'

const Profile = ({onUserLogout}) => {

    return(
        <Container>
            <Content>
                <Grid>
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