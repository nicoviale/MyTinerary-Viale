const initialState = {
    cities: [],
    auxiliar: [],
    getOneCity: {},
    Filtercity:[],
}

const citiesReducer = (state = initialState, action) => {

    switch(action.type){
        case "GET_CITIES":
            return{
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
                Filtercity: action.payload
            }
            case "GET_ONE_CITY":
                return{
                    ...state,
                    getOneCity: action.payload,
                    auxiliar: action.payload,
                }
            case "FILTERCITIES":
                let filter = state.cities.filter(city => city.country.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
                return{
                    ...state,
                    Filtercity: filter
                }

            default:
                return state
    }

}
export default citiesReducer;