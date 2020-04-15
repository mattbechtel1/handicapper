import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AmericanOptionsContainer from './AmericanOptionsContainer'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginTop: 50,
        flex: 1,
    },
    optLine: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f44336',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondArea: {
        flex: 3,
        backgroundColor: '#2196f3'
    }
})


const calculate = (moneyline, certainty) => {
    if (moneyline === 'even' || moneyline === 100 || moneyline === -100) {
        return certainty > 0.5
    } else if (moneyline < 0) {
        return certainty > (moneyline / (moneyline - 100))
    } else {
        return certainty > (100 / moneyline)
    }
}

const AmericanOdds = () => {
    const [optCount, changeOptCount] = useState(2)

    return <View style={styles.container}>
        <View style={styles.optLine}>
                <AmericanOptionsContainer count={optCount} />
        </View>
        <Text>Change Available Options:</Text>
        <View style={styles.secondArea} />
    </View>
}

export default AmericanOdds