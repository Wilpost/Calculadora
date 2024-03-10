import { useState } from 'react'

export function useOperations () {
  const [inputValue, setInputValue] = useState({
    operation: '',
    result: ''
  })

  const handleClick = (value) => {
    if (inputValue.result !== '' && value === '+' | value === '/' | value === '*' | value === '-' | value === '%') {
      setInputValue({ ...inputValue, operation: inputValue.operation + inputValue.result + value })
      return
    }

    if (value === '+/-') {
      if (inputValue.operation === '' | inputValue.operation === '0') return

      if (inputValue.operation.substring(0, 1) === '-') {
        setInputValue({ ...inputValue, operation: inputValue.operation.slice(1, inputValue.operation.length) })
      } else {
        setInputValue({ ...inputValue, operation: `-${inputValue.operation}` })
      }
    } else if (inputValue.operation === '0') {
      setInputValue({
        ...inputValue,
        operation: inputValue.operation = '' + value
      })
    } else {
      setInputValue({
        ...inputValue,
        operation: inputValue.operation + value,
        result: ''
      })
    }
  }

  const clean = () => {
    setInputValue({ operation: '0', result: '' })
  }

  const clear = () => {
    setInputValue({
      ...inputValue,
      operation: inputValue.operation.substring(
        '0',
        inputValue.operation.length - 1
      )
    })
  }

  const result = () => {
    let res
    try {
      if (inputValue.operation.includes('%')) {
        const porcentaje = inputValue.operation.split('%')
        res = eval(`${porcentaje[0]}*${porcentaje[1]}/100`)
      } else {
        res = eval(inputValue.operation)
      }
      setInputValue({ ...inputValue, operation: '', result: res })
    } catch (error) {
      setInputValue({
        ...inputValue,
        operation: 'Error'
      })
    }
  }

  return { inputValue, result, handleClick, clean, clear }
}
