import React from 'react'
import './FormNew.css'

export default function FormNew({discard, addItem, addValue}) {


  return (
    <div className='form__container'>
      <form className='form'>
        <input className='form__input' type='text' name='brand' placeholder='brand' onChange={addValue}/>
        <input className='form__input' type='text' name='model' placeholder='model' onChange={addValue}/>
        <input className='form__input' type='text' name='colour' placeholder='colour' onChange={addValue}/>
        <input className='form__input' type='text' name='engineType' placeholder='engine type' onChange={addValue}/>
        <input className='form__input' type='text' name='engineSize' placeholder='engine size' onChange={addValue}/>
        <button type='submit' className='form__button' onClick={addItem}>Add</button>
        <button type='reset' className='form__button' onClick={discard}>Discard</button>
      </form>
    </div>
  )
}
