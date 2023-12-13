import React from 'react';
import { useState } from 'react';
import { ClockLoader } from 'react-spinners/ClockLoader';

const LoadingPage = () => {

    const [loading, setLoading] = useState(true);
  return (
    <div className='loadingdiv'>
      <button 
      onClick={() => setLoading(!loading)}>
        Toggle Loaders
      </button>

      <br></br>

      <div className='loadingdiv2'>

       <div className='loadingdiv3'>
        <ClockLoader
        loading={loading}
        size={60}
        color="red"
        />
       </div>

      </div>
    </div>
  )
}

export default LoadingPage
