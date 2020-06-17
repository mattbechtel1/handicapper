import React, {useReducer} from 'react'
import AmericanOption from './AmericanOption'
import { View, Text, StyleSheet } from 'react-native'
import { amOddsMoneylineReducer } from '../state/reducers'


const styles = StyleSheet.create({
    note: {
        flexDirection: 'column-reverse',
        padding: 15,
        // fontStyle: 'italic'
    }
})

const AmericanOptionsContainer = ({options, changeLine, changeProbability}) => {

    return <View style={{flexDirection: 'row'}}>
        <View style={styles.note}>
            <Text>Should add up to 100%</Text>
        </View>
        {options.map((option, index) => <AmericanOption 
            key={index} 
            optIdx={index} 
            option={option} 
            changeLine={changeLine}
            changeProbability={changeProbability}
        />)}
    </View> 
}

export default AmericanOptionsContainer