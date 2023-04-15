import React, { useEffect } from "react"
import { useState } from "react"
import{BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {getItem, setItem} from '../services/LocalStorageFunctions'



export const Store = () =>{

  const [data, setData] = useState([])
  const [cart, setCart] = useState(getItem('cartMl') ||[])

  useEffect(()=>{
    const fetchApi = async () =>{
      const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
      const response = await fetch(url)
      const objJson = await response.json()
      setData(objJson.results)
    }
    fetchApi()
  },[])

  const handleClick = (obj)=> {
    const element = cart.find((e) => e.id === obj.id)
    if(element){
      const arrFilter = cart.filter((e) => e.id !== obj.id )
      setCart(arrFilter)
      setItem('cartMl', arrFilter)
    }else{
      setCart([...cart,obj])
      setItem('cartMl',[...cart,obj])
    }
  }
  return(
    <>
    <h1>Store</h1>
    <div>
      {
        data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="Cellphone" />
            <h4>{e.price}</h4>
            <button onClick={() => handleClick(e)}>
              {
                cart.some((itemCart) => itemCart.id === e.id) ? (<BsFillCartCheckFill/>) : (<BsFillCartPlusFill/>)
              }
            </button>
          </div>
        ))
      }
    </div>
    </>
  )

}