import React from 'react'


function SneakerCard(props) {

  return (
    <div>
      {props.sneakers?.map(sneaker => (
        <>
          <div className='sneaker-card--body'>
            <h2 className='sneaker-card--title'>{sneaker.name}</h2>
            <img className='sneaker-card-img' src={sneaker.img_url} alt='' />
            <div>
              <h3 className='sneaker-card--ratings'>{sneaker.how_rare}</h3>
            </div>
          </div>
        </>
      ))
      }
    </div >
  )
}

export default SneakerCard