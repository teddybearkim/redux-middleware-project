import React from 'react'

const ProductCard = ({ data }) => {
  const choice = data.choice
  const img = data.img
  const isNew = data.new
  const title = data.title
  const price = data.price

  return (
    <div className='product-card' style={{ padding: '10px' }}>
      <img src={img} alt='' style={{ width: '100%' }} />
      {choice ? <div className='choice'>Conscious choice</div> : <div className='choice'>­</div>}
      <div>{title}</div>
      <div>₩{price.toLocaleString()}</div>
      {isNew ? <small className='신상 new-arrivals' style={{ color: 'green', background:'gold', fontWeight:'bold'}}>신제품</small> : null}
    </div>
  )
}

export default ProductCard