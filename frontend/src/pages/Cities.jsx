import React, {useState} from 'react'
import '../styles/styles.css'
import { Input } from '@nextui-org/react'
//import Data from '../components/Data.js'
import Card from '../components/Card'
import Error from '../pages/Error'
//import {connect} from "react-redux"
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'
import { useEffect } from 'react'

function Cities (){

    const [inputSearch, setInputSearch] = useState("")
    const dispatch = useDispatch()
    const Cities = useSelector((store) => store.citiesReducer.Filtercity);

    useEffect(() => {
        dispatch(citiesActions.filterCities(inputSearch))
    },[inputSearch])


    //const [Cities,setCities]= useState([])
    //useEffect(() => {
      //  props.getCities()
        // eslint-disable-next-line
    //},[])
    //useEffect(()=>{axios.get('http://localhost:4000/api/cities').then(Data=>(setCities(Data.data.response)))},[]);
    console.log(Cities)

    let filter = Cities?.filter(city=>
        city.country.toLowerCase().startsWith(inputSearch.toLowerCase().trim())
    );
    return(
        <div className='fondocities'>
        <div className='conteiner-buscador'>
            <p className='titulo-cities'>Find your city!</p>
            <Input onKeyUp={(evento)=>{setInputSearch(evento.target.value)}} placeholder="Search cities" css={{marginTop:'1.5rem'}}></Input>
        </div>
        <div className='Tarjetas'>
        {filter?.length > 0 ? <Card cityFilter = {filter}/> : <Error/>}</div>
        </div>
    )
}

export default Cities
