import React from 'react'

const Card = (props) => {
  return (
      <div className='timeline__item'>
          <i className={props.icon}>
              <span className='timeline__date'>{props.year}</span>
              <h3 className="timeline__title">{props.title}</h3>
              <p className="timeline">{props.desc }</p>
          </i>
    </div>
  )
}

export default Card