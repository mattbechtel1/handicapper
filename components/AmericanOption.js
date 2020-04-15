import React, { useState } from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'

const styles = StyleSheet.create({
    outerBox: {
        flex: 1,
        justifyContent: 'center'
    },
    picker: {
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
        marginBottom: 10
    }
})

const AmericanOption = () => {
    const [odds, setOdds] = useState(100)
    const displayedOdds = odds > 0 ? `+${odds}` : odds

    return <View style={styles.outerBox}>
        <TextInput
            value={odds}
            keyboardType='number-pad'
            style={styles.picker}
            onChangeText={value => setOdds(value)
            }
        />
        <Text>{displayedOdds}</Text>
    </View>
}

export default AmericanOption