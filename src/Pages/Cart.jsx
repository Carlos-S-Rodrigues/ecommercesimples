import React from 'react'
import { getItem, setItem } from '../services/LocalStorageFunctions'
import { useState } from 'react'
import {BsFillCartDashFill} from 'react-icons/bs'
import styled from 'styled-components'

const ProductsArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap:wrap;
  align-items: center;

  .cart-content{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    height: 320px;
    width: 230px;
    border: 1px solid #d4c705;

    button{
      font-size: 25px;
      background: transparent;
      border: none;
      color: #1f2ce2;
    }
  }
`

export const Cart = () => {
  const [data, setData] = useState(getItem('cartMl') || [])

  const removeItem = (obj) =>{
    const arrFilter = data.filter((e) => e.id !== obj.id)
    setData(arrFilter)
    setItem('cartMl', arrFilter)
  }


  return (
    <div>
      <h1>Cart</h1>
      <ProductsArea>
        {
          data.map((e) => (
            <div className='cart-content' key={e.id}>
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

