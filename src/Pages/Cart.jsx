import React from 'react'
import { getItem, setItem } from '../services/LocalStorageFunctions'
import { useState } from 'react'
import {BsFillCartDashFill} from 'react-icons/bs'
import {ProductsArea, PageTitle} from '../styles/style'



export const Cart = () => {
  const [data, setData] = useState(getItem('cartMl') || [])

  const removeItem = (obj) =>{
    const arrFilter = data.filter((e) => e.id !== obj.id)
    setData(arrFilter)
    setItem('cartMl', arrFilter)
  }


  return (
    <div>
      <PageTitle>Carrinho</PageTitle>
      <ProductsArea>
        {
          data.map((e) => (
            <div className='content' key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.thumbnail} alt={e.title} />
              <h4>{e.price}</h4>
              <button onClick={() => removeItem(e)}>
                <BsFillCartDashFill/>
              </button>
            </div>
          ))
        }
      </ProductsArea>
    </div>
  )
}

