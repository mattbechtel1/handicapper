import React from 'react'


const AmericanOptionsContainer = ({count}) => {
    const options = []
    let i = 0
    while (i < count) {
        options.push[i]
    }
    console.log(options)
    return options.map(optNum => <AmericanOption key={optNum} />)
}

export default AmericanOptionsContainer