/* eslint-disable no-unused-vars */
import React from 'react'

const Client = (props) => {
  return (
        <>
          <div className="client__avatar">
            <img src={props.avatar} alt="" />
          </div>
          <h5 className="client__name">{props.name}</h5>
          <small className="client__review">{props.review}</small>
        </>

  )
}

export default Client