import React from 'react'
import styled from 'styled-components'
const SButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 20px 0;
  background-color: #2d71c4;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  width: 100%;
  transition: 0.35s;
  &:hover {
    background-color: #2662ab;
  }
  opacity: ${props => (props.disabled ? '50%' : '100%')};
`

function Button({ children, onClick, disabled }) {
  return (
    <SButton onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  )
}

export default Button
