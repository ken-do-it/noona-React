import React from 'react'

function Box(props) {
    console.log("props", props)
  return (
    <div>

        <div className='Box'>
            <h1>{props.name}</h1>
            <img className='item-img' src={props.item && props.item.img} alt="" />
            <h2>{props.result}</h2>
        </div>

    </div>
  )
}

export default Box


