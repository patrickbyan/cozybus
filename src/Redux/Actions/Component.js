import React from 'react'
import { View } from 'react-native'

// Redux
import {connect} from 'react-redux'

// Action
import {getData} from './../Actions/GetDataAction'

const Component = ({getData, data}) => {
    return(
        <View>

        </View>
    )
}

const mapDispatchToProps = {
    getData
}

const mapStateToProps = (state) => {
    return{
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
