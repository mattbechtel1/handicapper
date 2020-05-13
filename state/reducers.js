export function amOddsReducer(state, action) {
    switch (action.type) {
        case 'CALCULATE':
            return 'blop'
        default:
            return state;
    }
}

export function amOddsMoneylineReducer(state, action) {
    switch (action.type) {
        case 'ADD_NEW':
            console.log(state)
            state.push({moneyline: 100, probability: 0})
            console.log(state)
            return state
        case 'REMOVE_ONE':
            state.pop()
            return state
        case 'EDIT_MONEYLINE':
            return state
        default:
            return state
    }
}

export function optionsCount(state, action) {
    switch (action.type) {
        case 'ADD_NEW':
            return state + 1
        case 'REMOVE_ONE':
            return state - 1
        default:
            return state
    }
}