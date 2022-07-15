import axios from 'axios';

const itinerariesActions = {

    getItineraries: () => {
        return async (dispatch,getState) => {
            const res = await axios.get('http://localhost:4000/api/itinerary')
           /*  console.log(res) */
            dispatch({type: 'GET_ITINERARIES', payload: res.data.response})

        }
    },
    getOneItinerary: (id) => {
        console.log(id)
        return async (dispatch, getState) => {

            const res = await axios.get(`http://localhost:4000/api/itinerary/${id}`)
           /*  console.log(res.data.response.itineraries) */
            dispatch ({type: 'GET_ONE_ITINERARY', payload: res.data.response.itineraries})
        }
    },
    getItinerariesByCity : (id) => {
        return async (dispatch, getState) => {

            const res = await axios.get(`http://localhost:4000/api/itinerariesbyCity/${id}`)
        /*     console.log(res.data.response.itineraries) */
            dispatch ({type: 'GET_ITINERARIES_BYCITY', payload: res.data.response.itineraries})
            return res
        }
    },
    findTimFromCity:(id) => {
        return async (dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/itineraries/City/${id}`)
            console.log(res)
            dispatch({type: 'FIND_ITINERARIES', payload: res.data.response.itinerary })
        }
    },
    likeDislike: (itineraryId) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                const res = await axios.put(`http://localhost:4000/api/tineraries/likeDislike/${itineraryId}`,{},
                    {headers: {Authorization: "Bearer "+token}}
                )
                /* console.log(res.data. */
                return res
            }catch (err) {
                console.log(err)
            }
        }
    },

    addComment: (commentaries) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.post(`http://localhost:4000/api/tineraries/comment`,{...commentaries},
                {headers: {'Authorization': "Bearer "+token}}
            )
            dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
            })
            return answer.data.response
        }
    },

    modifyComment: (comment) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.put(`http://localhost:4000/api/tineraries/comment`,{...comment},
            {headers: {Authorization: "Bearer "+token}}
        )
        dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
        })
        return answer.data.response
        }
    },

    deleteComment: (id) => {
        const token = localStorage.getItem('token')
            return async (dispatch, getState) => {
                const answer = await axios.post(`http://localhost:4000/api/tineraries/comment/${id}`,{},
                {headers: {Authorization: "Bearer "+token}}
            )
            dispatch({type: 'message', payload: {view: true, message: answer.data.message, success: answer.data.success}
            })
            return answer.data.response
        }
    }
}
export default itinerariesActions