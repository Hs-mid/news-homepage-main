import React from 'react'
import './aside.css'
export default function Aside() {
  return (
    <div className="card asideright col-md-3 g-0">

    <div className='contentcard p-3'>
        
            <h1 className="card-title">New</h1>
        

        <div className='listofnews'>
            <ul className='g-0'>

                <li className="list-group-item">
                    <a className='subtitle' href='#'>Hydrogen VS Electric Cars</a>
                    <p className='text-secondary'>will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>
                <div className='line'></div>
                <li className="list-group-item">
                    <a className='subtitle' href='#'>The downsides of AI Artistry</a>
                    <p className='text-secondary'>what are the possible advers effects of on-demand AI image generation?</p>
                </li>
                <div className='line'></div>
                <li className="list-group-item">
                    <a className='subtitle' href='#'>Is VC Funding drying Up?</a>
                    <p className='text-secondary'>Private funding by VC firms is down 50% YOY.we take a look at what that means.
                    </p>
                </li>

            </ul>
        </div>
            
    </div>
    </div>
            
    
        
    
    
  )
}
