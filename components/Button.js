import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#000000',
        fontSize: 24,
        fontWeight: 500,
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        backgroundColor: '#bcbcbc',
        paddingRight: 10,
        paddingLeft: 10,
        margin: 10
    },
    disabledBtn: {
        backgroundColor: '#eeeeee'
    }
})

const Button = ({title, onPress, disabled}) => {
    return <TouchableOpacity 
        onPress={disabled ? null : onPress} 
        style={disabled ? styles.disabledBtn : styles.button}>
        <Text style={styles.textStyle}>
            {title}
        </Text>
    </TouchableOpacity>
}

export default Button