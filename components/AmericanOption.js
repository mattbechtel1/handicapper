import React, { useState } from 'react'
import {StyleSheet, View, Picker, TextInput} from 'react-native'

const styles = StyleSheet.create({
    outerBox: {
        borderWidth: 5
    },
    picker: {
        height: 30,
        width: 50
    }
})

const AmericanOption = () => {
    [odds, setOdds] = useState(100)
    
    return <View style={styles.outerBox}>
        <TextInput
            value={odds}
            style={styles.picker}
            onChangeText={itemValue => setOdds(itemValue)}
        />
    </View>
}

export default AmericanOption