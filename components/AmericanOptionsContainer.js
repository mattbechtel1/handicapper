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

const AmericanOptionsContainer = ({options, count}) => {

    return <View style={{flexDirection: 'row'}}>
        <View style={styles.note}>
            <Text>You have {count} options.</Text>
            <Text>Must add up to 100%</Text>
        </View>
        {options.map((option, index) => <AmericanOption key={index} title={`Option #${index + 1}`} moneyline={option.moneyline} prob={option.probability} />)}
    </View> 
}

export default AmericanOptionsContainer