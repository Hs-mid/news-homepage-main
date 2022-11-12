import React ,{Component} from 'react'
import Aside from './homecomponent/Aside'
import Asidehero from './homecomponent/Asidehero'
import Cards from './homecomponent/Cards'
import './pages.css'

export default class Home extends Component {
  state={
    cardinfo:[
      {
        img:'images/image-retro-pcs.jpg',
        number:'01',
        title:'Reviving Retro PCs',
        text:'what happens when old PCs are givne modern upgardes'
      },
      {
        img:'images/image-top-laptops.jpg',
        number:'02',
        title:'Top 10 Laptops of 2022',
        text:'Our best picks for Varous needs and budgets.'
      },
      {
        img:'images/image-gaming-growth.jpg',
        number:'03',
        title:'The Growth of Gaming',
        text:'How the pandemic has sparked fresh opporunities.'
      },
      
    ]
  }
  render(){
        return (
          <div className='homepage'>
              <div className='row g-0'>
                  <Asidehero />
                  <Aside />
              </div>
              <div className='row mt-4 g-0'>
                  {this.state.cardinfo.map((item,index)=>{
                    return(<Cards key={index} info={item}/>)
                  })}
              </div>
              </div>
        
        
      )
  }
  
}
