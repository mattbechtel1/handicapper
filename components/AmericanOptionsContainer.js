import React from 'react'
import AmericanOption from './AmericanOption'
import { View } from 'react-native'

const AmericanOptionsContainer = ({count}) => {
    const options = []
    console.log(count)
    let i = 0
    while (i < count) {
        options.push(i)
        i++
    }
    console.log(options)
    return <View style={{flexDirection: 'row'}}>
        {options.map(optNum => <AmericanOption key={optNum} />)}
    </View> 
}

export default AmericanOptionsContainer