import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-Container'>
      <h1 >ContactUs</h1>
      <div className='main2'>
        <div className='left'>
          <h2 className='contactus'>Contact Us</h2>

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
        <div className='right'>
          <h2 className='contactus'>Follow Us</h2>

          <div className=''>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct4'></div>
              <div>
                <h3 className=''>+081-453-0011</h3>
              </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct5'></div>
              <div>
                <h3 className=''>@Ethereal-Palazzo.com</h3>
              </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct6'></div>
              <div>
                <h3 className=''>#Ethereal-Palazzo.com</h3>
              </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
              <div className='imgAct7'></div>
              <div>
                <h3 className=''>@Ethereal-Palazzo/real.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
