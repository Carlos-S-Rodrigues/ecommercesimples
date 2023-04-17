import React, { useState } from 'react'
import { setItem } from '../services/LocalStorageFunctions'

export const Login = (props) => {

  const [name, setName] = useState('')
  const [password , setPassword] = useState('')

  const condition = (name.length > 3 && password.length > 5)

  const saveUser = (name, password)=>{
    setItem('usuario',{name , password})
    const {history: {push}} = props
    push('/store')
  }

  return (
    <div>
      <label> Nome </label>
      <input type="text" onChange={({target:[value]}) => setName(value)} value={name}/>
      <label> Senha </label>
      <input type="password"  onChange={({target:[value]}) => setPassword(value)} value={password} />

      <button type='button' disabled={!condition} onClick={() => saveUser(name, password)}>Criar Conta</button>
    </div>
  )
}
