import { useState } from 'react'
import { CAR_VECTOR } from './assets'
import * as S from './App.styled'

import './style.css'

function App() {
  const [carIdToEdit, setCarIdToEdit] = useState()

  return (
    <>
      <img src={CAR_VECTOR} alt='logo' />
      <h1 className='title'>Storage</h1>
      <main>
        <S.Title>Registrar um novo carro</S.Title>
        <div className='registration'>
          <form className='form'>
            <input placeholder='Nome' />
            <input placeholder='Modelo' />
            <input
              placeholder='Placa'
              pattern='[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}'
            />
            <input type='year' placeholder='Ano' />
            <input
              type='url'
              placeholder='Url da imagem'
              className='input-url'
            />
            <button className='button-clear'>Limpar</button>
            <button className='button-register'>
              {carIdToEdit ? 'Atualizar' : 'Cadastrar'}
            </button>
          </form>
        </div>
        <div className='list'>
          <h2>Lista de carros</h2>
          <ul>
            <li>
              <img src='' alt='carro' />
              <div>
                <div>
                  <strong>Nome</strong>
                  <p>Placa</p>
                </div>
                <p>Modelo, Ano</p>
              </div>
              <button
                className='button-edit'
                onClick={() => setCarIdToEdit('dasdsa')}
              ></button>
              <button className='button-delete'></button>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
