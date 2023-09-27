import PropTypes from 'prop-types'

export const ButtonsClear = ({ setClean, setClear, setValue }) => {
  const handleClick = () => {
    setClean()
  }

  const clearInput = () => {
    setClear()
  }

  const handleDiv = value => {
    setValue(value)
  }

  return (
    <div className='btn-calc'>
      <div className='calc-btn-clear'>
        <div className='btn-clear-container'>
          <button
            onClick={() => handleClick()}
            id='btnClearAll'
            className='btn-clear'
            type='button'
          >
            C
          </button>
        </div>
        <button
          onClick={e => handleDiv(e.target.value)}
          id='btnClearAll'
          className='btn-clear'
          value='%'
          type='button'
        >
          %
        </button>
        <button
          onClick={() => clearInput()}
          id='btnClearOne'
          className='btn-clear_two'
          type='button'
        />
        <button
          id='btnTypeCalc'
          className='calc-btn__clear calc-btn-type'
          type='button'
          value='/'
          onClick={e => handleDiv(e.target.value)}
        >
          ÷
        </button>
      </div>
    </div>
  )
}

export const InputCalc = ({ operations, result, checkResult }) => {
  return (
    <div className='opearations-container'>
      <span className='operation-viewer'>{result}{checkResult}</span>
      <span className='input-calc'>{operations}</span>
    </div>
  )
}

export const ButtonNums = ({ setValue, totalRes }) => {
  const handleClick = value => {
    setValue(value)
  }

  const viewRes = () => {
    totalRes()
  }

  return (
    <div className='calc-center'>
      <div className='calc-nums'>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='9'
        >
          9
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='6'
        >
          6
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='3'
        >
          3
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='8'
        >
          8
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='5'
        >
          5
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='2'
        >
          2
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='7'
        >
          7
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='4'
        >
          4
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='1'
        >
          1
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnDiference'
          className='calc-btn__num'
          type='button'
          value=','
        >
          ,
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnNumAll'
          className='calc-btn__num'
          type='button'
          value='0'
        >
          0
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnDiference'
          className='calc-btn__num'
          type='button'
          value='+/-'
        >
          +/-
        </button>
      </div>

      <div className='calc-btn-calc'>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnTypeCalc'
          className='calc-btn-type'
          type='button'
          value='*'
        >
          ×
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnTypeCalc'
          className='calc-btn-type'
          type='button'
          value='-'
        >
          -
        </button>
        <button
          onClick={e => handleClick(e.target.value)}
          id='btnTypeCalc'
          className='calc-btn-type'
          type='button'
          value='+'
        >
          +
        </button>
        <button
          onClick={() => viewRes()}
          id='btnTypeCalc'
          className='calc-btn-type'
          type='button'
          value='='
        >
          =
        </button>
      </div>
    </div>
  )
}

ButtonNums.propTypes = {
  setValue: PropTypes.func,
  totalRes: PropTypes.func
}

ButtonsClear.propTypes = {
  setClean: PropTypes.func,
  setClear: PropTypes.func.isRequired,
  setValue: PropTypes.func
}

InputCalc.propTypes = {
  operations: PropTypes.string.isRequired,
  checkResult: PropTypes.function,
  result: PropTypes.string.isRequired
}
