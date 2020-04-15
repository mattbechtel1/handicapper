import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AmericanOptionsContainer from './AmericanOptionsContainer'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginTop: 50,
        flex: 1,
    },
    text: {
        // textAlign: 'center',
        flex: 1
    },
    optLine: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f44336',
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
           <View style={styles.text}>
                <AmericanOptionsContainer count={optCount} />
           </View>

        </View>
        <View style={styles.secondArea} />
    </View>
}

export default AmericanOdds