import React from 'react'
import { ID_LABEL } from '~/utils/constants'
import styled from 'styled-components'

const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .label {
    font-size: 16px;
    font-weight: bold;
    color: #455261;
    display: block;
  }
  .input {
    font-size: 20px;
    ::placeholder {
      color: darkgray;
    }
    font-weight: 400;
    outline: none;
    border: none;
    padding: 10px;
    border-bottom: 2px solid #77aef1;
  }
  .error-msg {
    font-size: 12px;
    color: red;
  }
`
function FormInput({ id, errorMsg, placeholder, register, type = 'text' }) {
  return (
    <FormInputContainer>
      <label className="label" htmlFor={id}>
        {ID_LABEL[id]}
      </label>
      <input
        {...register}
        className="input"
        type={type}
        id={id}
        placeholder={placeholder}
      />
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </FormInputContainer>
  )
}

export default FormInput
