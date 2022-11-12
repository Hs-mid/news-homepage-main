import React from 'react'

export default function Cards(props) {
  return (
    <div className="card litlecard p-0 mb-3 col-md-4">
        <div className="row g-0">
            <div className="col-md-4 g-0">
            <img src={props.info.img} className="img-fluid" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body parag py-0">
                <p className="card-number">{props.info.number}</p>
                <p className="card-title">{props.info.title}</p>
                <p className="card-text">{props.info.text}</p>
            </div>
            </div>
        </div>
</div>
  )
}
