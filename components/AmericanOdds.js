import React, {useState} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import AmericanOptionsContainer from './AmericanOptionsContainer'
// import Button from './Button'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginTop: 50,
        flex: 1,
    },
    optLine: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#d32f2f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondArea: {
        flex: 1,
        backgroundColor: '#ff6659'
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold'
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

const AmericanOdds = ({theme}) => {
    const [optCount, changeOptCount] = useState(2)
    const [bestBet, calculateBet] = useState('')

    const displayResult = (e) => 'o'

    return <View style={styles.container}>
        <View style={styles.optLine}>
            <AmericanOptionsContainer count={optCount} />
            <Text>Change Available Options:</Text>
            <View style={{flexDirection: 'row'}}>
                <Button 
                    onPress={() => changeOptCount(optCount + 1)}
                    title='+'
                    disabled={optCount >= 10}
                    color='#ff00ff'
                />
                <Button 
                    onPress={() => changeOptCount(optCount - 1)}
                    title='-'
                    disabled={optCount <= 1}
                    color='#44c4c4'
                />
            </View>
            <View>
                <Button
                    onPress={displayResult}
                    title='Get best bet'
                    color='#555888'
                />
            </View>
        </View>
        <View style={styles.secondArea}>
            <Text style={styles.resultText}>Hi</Text>
        </View>
    </View>
}

export default AmericanOdds