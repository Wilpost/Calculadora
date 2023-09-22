import { useState } from 'react'
import './App.css'
import {
  ButtonsClear,
  InputCalc,
  ButtonNums
} from './components/ButtonsCalc.jsx'
import { Screen } from './components/Screen'

const App = () => {
  const [inputValue, setInputValue] = useState({
    operation: '25+25',
    result: '50'
  })

  const handleClick = value => {
    setInputValue({
      operation: ''
    })

    setInputValue({
      ...inputValue,
      operation: inputValue.operation.replace(
        inputValue.operation,
        inputValue.operation + value
      )
    })
  }

  const clean = () => {
    setInputValue({ operation: '', result: '' })
  }

  const clear = () => {
    setInputValue({
      ...inputValue,
      operation: inputValue.operation.substring(
        0,
        inputValue.operation.length - 1
      )
    })
  }

  const result = () => {
    const res = eval(inputValue.operation)
    setInputValue({ result: res })
  }

  return (
    <div className='container-calc'>
      <Screen>
        <InputCalc
          result={inputValue.result}
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
    </div>
  )
}

export default App
