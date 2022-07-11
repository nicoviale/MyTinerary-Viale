const initialState = {
    itineraries: [],
    getOneItinerary: {},
    getItinerariesByCity: []
}

const itinerariesReducer = (state = initialState, action) => {
console.log(action)
    switch(action.type){
        case "GET_ITINERARIES":
            return{
                ...state,
                itineraries: action.payload
            }
            case "GET_ONE_ITINERARY":
                return{
                    ...state,
                    getOneItinerary: action.payload
                }
            case "GET_ITINERARIES_BYCITY":
                return{
                    ...state,
                    getItinerariesByCity: action.payload
                }
            case "FIND_ITINERARIES":
                return{
                    ...state,
                    itineraries: action.payload
                }

            default:
                return state
    }

}
export default itinerariesReducer;