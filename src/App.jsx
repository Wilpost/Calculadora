import { useState } from 'react'
import './App.css'
import {
  ButtonsClear,
  InputCalc,
  ButtonNums
} from './components/ButtonsCalc.jsx'
import { Screen } from './components/Screen'
import { useOperations } from './hooks/useOperations.js'

const App = () => {
  const { inputValue, result, handleClick, clean, clear } = useOperations()

  return (
    <div className='container-calc'>
      <Screen>
        <InputCalc
          result={inputValue.result}
          checkResult={inputValue.result === '' ? '' : '='}
          operations={inputValue.operation}
        />
        <ButtonsClear
          setValue={handleClick}
          setClear={clear}
          setClean={clean}
        />
        <ButtonNums totalRes={result} setValue={handleClick} />
      </Screen>
      <div className='wave-container' />
      <div className='wave' />
      <div className='blur-ground' />
    </div>
  )
}

export default App
