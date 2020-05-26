import React, { useState } from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import NumericInput from './NumericInput'

const styles = StyleSheet.create({
    outerBox: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionNum: {
        textAlign: 'center',
        fontWeight: "700"
    }
})

const AmericanOption = ({optIdx, option: {moneyline, probability}, changeLine, changeProbability}) => {
    const displayedOdds = moneyline > 0 ? `+${moneyline}` : moneyline

    return <View style={styles.outerBox}>
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.optionNum}>{`Option #${optIdx + 1}`}</Text>
            <NumericInput
                value={String(moneyline)}
                revertVal={String(moneyline)}
                onChangeText={newVal => changeLine(newVal, optIdx)}
            />
            <Text style={{alignSelf: 'center'}}>{`Odds: ${displayedOdds}`}</Text>
            <NumericInput
                value={String(probability)}
                revertVal={String(probability)}
                onChangeText={newVal => changeProbability(newVal, optIdx)}
            />
        </View>
    </View>
}

export default AmericanOption