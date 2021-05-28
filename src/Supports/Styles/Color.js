const { StyleSheet } = require('react-native');

const primary = '#0d6efd'
const secondary = '#6c757d'
const success = '#198754'
const info = '#0dcaf0'
const warning = '#ffc107'
const danger = '#dc3545'
const light = '#f8f9fa'
const dark = '#212529'
const muted = '#6c757d'

const cb_darkblue = '#3E64FF'
const cb_lightblue = '#5EDFFF'
const cb_light = '#ECFCFF'

const color = StyleSheet.create({
    primary : { color : primary },
    bg_primary : { backgroundColor : primary },
    secondary : { color : secondary },
    bg_secondary : { backgroundColor : secondary },
    success : { color : success },
    bg_success : { backgroundColor : success },
    info : { color : info },
    bg_info : { backgroundColor : info },
    warning : { color : warning },
    bg_warning : { backgroundColor : warning },
    danger : { color : danger },
    bg_danger : { backgroundColor : danger },
    light : { color : light },
    bg_light : { backgroundColor : light },
    dark : { color : dark },
    bg_dark : { backgroundColor : dark },
    muted : { color: muted },
    bg_muted : { backgroundColor: '#f3f4ed' },

    cb_darkblue : { color : cb_darkblue },
    bg_cb_darkblue : { backgroundColor : cb_darkblue },
    cb_lightblue : { color : cb_lightblue },
    bg_cb_lightblue : { backgroundColor : cb_lightblue },
    cb_light : { color : cb_light },
    bg_cb_light : { backgroundColor : cb_light },


    rounded_1 : { borderRadius : 10 },
    rounded_2 : { borderRadius : 20 },
    rounded_3 : { borderRadius : 30 },
    rounded_4 : { borderRadius : 40 },
    rounded_5 : { borderRadius : 50 }
})

export default color