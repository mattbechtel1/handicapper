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
        fontWeight: 'bold',
        textAlign: 'center'
    }
})


const AmericanOdds = ({theme}) => {
    const [moneylines, changeMoneyline] = useState([{moneyline: 100, probability: 0, title: "Option #1"}, {moneyline: 100, probability: 0, title: "Option #2"}])
    console.log(moneylines)
    
    const changeOptionLine = (value, index) => {
        let selection = moneylines[index]
        selection.moneyline = value
        changeMoneyline([...moneylines.slice(0, index), selection, ...moneylines.slice(index + 1)])
    }

    const changeProbability = (value, index) => {
        let selection = moneylines[index]
        selection.probability = value
        changeMoneyline([...moneylines.slice(0, index), selection, ...moneylines.slice(index + 1)])
    }

    const [amOddsResult, displayResult] = useState('Please enter info')

    const calculateResult = () => {
        const implied_percentage = moneyline => { 
            if (moneyline > 0) { return 100 / (moneyline + 100) } 
            else { return moneyline / (moneyline - 100) }
        }

        const maximum_value = moneylines.reduce((memo, {moneyline, probability, title}) => {
            let value = (probability/100 - implied_percentage(moneyline)) * (probability/100.0) * 10
            if (memo.value >= value) { return memo } 
            else { return {value, title: `Best Bet: ${title}`} }
        }, {value: 0, title: "No good option. Don't bet!"})  

        displayResult(maximum_value.title)
    }

    return <View style={styles.container}>
        <View style={styles.optLine}>
            <AmericanOptionsContainer 
                options={moneylines}
                changeLine={changeOptionLine}
                changeProbability={changeProbability}
            />
            <Text>Change Available Options:</Text>
            <View style={{flexDirection: 'row'}}>
                <Button 
                    onPress={() => changeMoneyline([...moneylines, {moneyline: 100, probability: 0, title: `Option #${moneylines.length}`}])}
                    title='+'
                    disabled={moneylines.length >= 10}
                    color='#ff00ff'
                />
                <Button 
                    onPress={() => changeMoneyline(moneylines.slice(0, -1))}
                    title='-'
                    disabled={moneylines.length <= 1}
                    color='#44c4c4'
                />
            </View>
            <View>
                <Button
                    onPress={() => calculateResult()}
                    title='Get best bet'
                    color='#555888'
                />
            </View>
        </View>
        <View style={styles.secondArea}>
            <Text style={styles.resultText}>{amOddsResult}</Text>
        </View>
    </View>
}

export default AmericanOdds