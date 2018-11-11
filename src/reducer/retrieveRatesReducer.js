export default function retrieveRatesReducer(state = {
    rates: [],
    order: 'asc',
    orderBy: 'noteShort',
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 5,
}, action) {
    switch (action.type) {
        case 'RDX_RETRIEVE_RATES_SORT':
            return Object.assign({}, state, {
                order: action.payload.order,
                orderBy: action.payload.orderBy,
            })
        case 'RDX_RETRIEVE_RATES_UPDATE_SELECTED':
            return Object.assign({}, state, {
                selected: action.payload.selected
            })
        case 'RDX_RETRIEVE_RATES_CHANGE_PAGE':
            return Object.assign({}, state, {
                page: action.payload.page
            })
        case 'RDX_RETRIEVE_RATES_CHANGE_ROWS_PER_PAGE':
            return Object.assign({}, state, {
                rowsPerPage: action.payload.rowsPerPage
            })
        case 'RDX_RETRIEVE_RATES_SELECT_ALL':
            return Object.assign({}, state, {
                selected: action.payload.selected
            })
        case 'RDX_RETRIEVE_RATES_SUCCESS':
            return Object.assign({}, state, {
                rates: action.payload
            })
        case 'RDX_RETRIEVE_RATES_FAIL':
        default:
            return state
    }
}