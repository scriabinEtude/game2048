import {
    createReducer,
    createSetValueAction,
    FETCH_PAGE,
    setValueReducer
} from '../../common/redux-helper'

//enum
export const Types = {
    SetValue: 'search/SetValue',
    FetchAutoComplete: 'search/FetchAutoComplete',
    FetchAllHistory: 'search/FetchAllHistory'
}
export const actions = {
    setValue: createSetValueAction(Types.SetValue),
    fetchAutoComplete: keyword => ({
        type: Types.FetchAutoComplete,
        keyword
    }),
    fetchAllHistory: page => ({
        type: Types.FetchAllHistory,
        page
    }),
}

const INITIAL_STATE = {
    keyword: '',
    autoCompletes: [],
    history: []
}
const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue]: setValueReducer
})
export default reducer;