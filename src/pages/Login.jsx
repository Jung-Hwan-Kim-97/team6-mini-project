import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FormInput from '~/components/user/FormInput'
import { FORM_REGEX, PLACEHOLDER, FORM_ERR_MSG } from '~/utils/constants'
import Button from '~/components/user/Button'

const Form = styled.form`
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 20px;
  align-items: center;
  border: 2px solid gray;
  border-radius: 10px;
`
const FormLabel = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0;
  color: #80bfde;
  text-align: center;
`
const Cta = styled.a`
  width: 100%;
  display: block;
  text-align: right;
  text-decoration: none;
  color: #80bfde;
`
const onValid = form => {
  logIn({ ...form })
}
function Login() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <FormLabel>로그인</FormLabel>
      <FormInput
        id={'email'}
        register={register('email', {
          required: FORM_ERR_MSG.required,
          pattern: {
            value: FORM_REGEX.email,
            message: FORM_ERR_MSG.invalidEmail,
          },
        })}
        errorMsg={formState.errors['email']?.message}
        placeholder={PLACEHOLDER.email}
      />
      <FormInput
        id={'password'}
        register={register('password', {
          required: FORM_ERR_MSG.required,
          pattern: {
            value: FORM_REGEX.password,
            message: FORM_ERR_MSG.invalidPw,
          },
        })}
        errorMsg={formState.errors['password']?.message}
        placeholder={PLACEHOLDER.password}
        type="password"
      />

      <Button disabled={!formState.isValid}>로그인</Button>
      <Cta href="/signUp">회원이 아니신가요?</Cta>
    </Form>
  )
}

export default Login
