const INITIAL_VALUE = {
    lang: "EN",
    theme: "light",
}

export function Reducer (state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {...state, lang: action.payload}
        
        case 'CHANGE_THEME':
            return {...state, theme: action.payload}
        default:
            return state
    }
}