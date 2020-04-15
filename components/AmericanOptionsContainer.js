import React from 'react'
import AmericanOption from './AmericanOption'

const AmericanOptionsContainer = ({count}) => {
    const options = []
    console.log(count)
    let i = 0
    while (i < count) {
        options.push(i)
        i++
    }
    console.log(options)
    return options.map(optNum => <AmericanOption key={optNum} />)
}

export default AmericanOptionsContainer