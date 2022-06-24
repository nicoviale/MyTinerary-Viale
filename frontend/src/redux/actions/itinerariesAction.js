import axios from 'axios';

const itinerariesActions = {

    getItineraries: () => {
        return async (dispatch,getState) => {
            const res = await axios.get('http://localhost:4000/api/itineraries')
            console.log(res)
            dispatch({type: 'GET_ITINERARIES', payload: res.data.response})

        }
    },
    getOneItinerary: (id) => {

        return async (dispatch, getState) => {

            const res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
            console.log(res)
            dispatch ({type: 'GET_ONE_ITINERARY', payload: res.data.response.itinerary})
        }
    },
    getItinerariesByCity : (id) => {
        return async (dispatch, getState) => {

            const res = await axios.get(`http://localhost:4000/api/itinerariesbyCity/${id}`)
            console.log(res.data.response.itineraries)
            dispatch ({type: 'GET_ITINERARIES_BYCITY', payload: res.data.response.itineraries})
        }
    },
    findTimFromCity:(id) => {
        return async (dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/itineraries/City/${id}`)
            console.log(res)
            dispatch({type: 'FIND_ITINERARIES', payload: res.data.response.itinerary })
        }
    },
    readItineraries:(id) => {
        return async  (dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/itineraries/City/${id}`)
            dispatch({type: 'READ_ITINERARIES', payload: res.data.response.itinerary })        
    }
    }
}
export default itinerariesActions