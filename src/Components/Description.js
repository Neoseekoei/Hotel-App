import React from 'react'
import { useLocation } from "react-router-dom";


const Description = () => {

     const location = useLocation();
     const data = location.state;
     console.log(data)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '220px' }}>
            <div className='Leftside' style={{ backgroundColor: '#A88346', width: '500px', height: '600px',borderWidth:'2px', borderColor:'gray',borderTopRightRadius:'15px' }}>
                <div className='inputscontact'>

                    <input className='inputsall'
                        placeholder='username...'
                        type='username'
                    />

                    <input className='inputsall'
                        placeholder='Email...'
                        type='email'
                    />

                    <input className='inputsall'
                        placeholder='Phone...'
                        type='phone'
                    />

                    <input className='inputsall'
                        placeholder='Massage...'
                        type='massage'
                    />

                    <button className='contactButton'>SEND</button>

                </div>
            </div>
            <div className='Rightside' style={{ backgroundColor: 'whitesmoke', width: '500px', display: 'flex',  }}>
                <div>
                    <img src={data.image} alt="React Image" style={{ display: 'flex', alignSelf: 'start', width: '500px', height: '330px',  }} />
                    <h1 style={{marginLeft:'100px'}}>{data.name}</h1>
                    <p  style={{width:'380px',textAlign:'center',marginLeft:'60px'}}>{data.description}</p>

                    <h2 style={{marginLeft:'130px'}}>{data.price}</h2>
                </div>
            </div>
        </div>
    )
}

export default Description
