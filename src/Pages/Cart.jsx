import React from 'react'
import { getItem, setItem } from '../services/LocalStorageFunctions'
import { useState } from 'react'
import {BsFillCartDashFill} from 'react-icons/bs'
import {ProductsArea, Subtotal, PageTitle} from '../styles/style'



export const Cart = () => {
  const [data, setData] = useState(getItem('cartMl') || [])

  const removeItem = (obj) =>{
    const arrFilter = data.filter((e) => e.id !== obj.id)
    setData(arrFilter)
    setItem('cartMl', arrFilter)
  }

  const subTotal = data.reduce((acc, cur) => acc + cur.price,0)


  return (
    <div>
      <PageTitle>Carrinho</PageTitle>
      <Subtotal>{`Valor total dos produtos: R$ ${subTotal}`}</Subtotal>
      <ProductsArea>
        {
          data.map((e) => (
            <div className='content' key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.thumbnail} alt={e.title} />
              <h4>{`R$ ${e.price}`}</h4>
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

