import React from 'react';
import Carrousel from '../components/Carrousel';
import Body from '../components/Body';


export default function Index() {
    return (
       <>
            <Body/>
            <div className='carrou'>
            <Carrousel />
        </div>
        </>
    )
}