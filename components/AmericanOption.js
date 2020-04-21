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
        fontWeight: 700
    }
})

const AmericanOption = ({title}) => {
    const [odds, setOdds] = useState(100)
    const [winPercent, setPercent] = useState(0)
    const displayedOdds = odds > 0 ? `+${odds}` : odds

    return <View style={styles.outerBox}>
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.optionNum}>{title}</Text>
            <NumericInput
                value={String(odds)}
                onChangeText={value => setOdds(value)}
            />
            <Text style={{alignSelf: 'center'}}>{displayedOdds}</Text>
            <NumericInput
                value={String(winPercent)}
                onChangeText={value => setPercent(value)}
            />
        </View>
    </View>
}

export default AmericanOption