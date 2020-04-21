import React from 'react'
import {TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    picker: {
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
        marginBottom: 10,
        backgroundColor: '#eeeeee'
    }
})

export default function NumericInput({value, onChangeText}) {
    const onChange = (text) => onChangeText(parseInt(text))

    return <TextInput 
        value={value}
        keyboardType='number-pad'
        style={styles.picker}
        onChangeText={(input) => onChange(input)}
    />
}