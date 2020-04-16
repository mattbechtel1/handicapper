import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AmericanOptionsContainer from './AmericanOptionsContainer'
import Button from './Button'

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
        flex: 2,
        backgroundColor: '#ff6659'
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

    return <View style={styles.container}>
        <View style={styles.optLine}>
            <AmericanOptionsContainer count={optCount} />
            <Text>Change Available Options:</Text>
            <View style={{flexDirection: 'row'}}>
                <Button 
                    onPress={() => changeOptCount(optCount + 1)}
                    text='+'
                    disabled={optCount >= 10}
                />
                <Button 
                    onPress={() => changeOptCount(optCount - 1)}
                    text='-'
                    disabled={optCount <= 1}
                ><Text style={{color: '#000000'}}></Text></Button>
            </View>
        </View>
        <View style={styles.secondArea} />
    </View>
}

export default AmericanOdds