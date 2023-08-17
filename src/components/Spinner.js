import React from 'react'
import loading from './loading.gif'

const Spinner = ()=>{
    return (
    <div>
        <img src={loading} alt="loading" style={{width: '25px', margin: 'auto', display: 'block'}}/>
    </div>
    )
}

export default Spinner
