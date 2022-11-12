import React from 'react'
import './aside.css'

export default function Asidehero() {
  return (
    <div className='leftaside g-0 col-md-9'>
        <div className='asidecontent'>
            <div className='picture'>
                <img src='images/image-web-3-desktop.jpg' alt='web3'/>
            </div>
            <div className='bottomcontent row'>
                <div className='maintitle g-0 col-md-6'>
                    <p className='text-dark'>The Bright Future of Web 3.0?</p>
                </div>

                <div className='description  ps-3 col-md-6'>
                    <p className='text-muted'>we give the next evollution of the web that claims to put the power of the platform back into the hands of the peaple. But is it really fulfilling its promise?</p>
                    <button className='px-5 py-3' >READ MORE</button>
                </div>
            </div>
        </div>
    </div>
  )
}
