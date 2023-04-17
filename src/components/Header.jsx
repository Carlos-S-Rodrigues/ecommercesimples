import React from 'react'
import{Link} from 'react-router-dom'
import { HeaderStyles } from '../styles/style'
//import { getItem } from '../services/LocalStorageFunctions'


export const Header = () => {

  // const user = getItem('usuario')

  // const userName = user && user.name ? user.name.split(" ") : []



  return (
    <>
      <HeaderStyles>
        <Link to="/">Loja</Link>
        <Link to="/cart">Carrinho</Link>
        {/*<Link to="/profile">{userName[0]}</Link>*/}
      </HeaderStyles>
    </>
  )
}
