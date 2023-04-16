import React from 'react'
import{Link} from 'react-router-dom'
import { HeaderStyles } from '../styles/style'

export const Header = () => {
  return (
    <>
      <HeaderStyles>
        <Link to="/">Loja</Link>
        <Link to="/cart">Carrinho</Link>
      </HeaderStyles>
    </>
  )
}
