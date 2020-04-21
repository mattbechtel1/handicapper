import React from 'react'
import AmericanOption from './AmericanOption'
import { View, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    note: {
        flexDirection: 'column-reverse',
        padding: 15,
        fontStyle: 'italic'
    }
})

const AmericanOptionsContainer = ({count}) => {
    const options = []
    let i = 0
    while (i < count) {
        options.push(i)
        i++
    }

    return <View style={{flexDirection: 'row'}}>
        <View style={styles.note}>
            <Text>Must add up to 100%</Text>
        </View>
        {options.map(optNum => <AmericanOption key={optNum} title={`Option #${optNum + 1}`} />)}
    </View> 
}

export default AmericanOptionsContainer