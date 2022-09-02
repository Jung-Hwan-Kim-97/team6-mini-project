import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FormInput from '~/components/user/FormInput'
import {
  FORM_REGEX,
  PLACEHOLDER,
  FORM_ERR_MSG,
  JOB_ARR,
} from '~/utils/constants'
import Button from '~/components/user/Button'
import Avatar from '~/components/user/Avatar'
import { useState, useEffect, useMemo } from 'react'
import { signUp } from '~/stores/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const ImageContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`
const Form = styled.form`
  margin: 0 auto;
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
  color: #80bfde;
`
const FileLabel = styled.label`
  position: relative;
  .file--btn {
    border-radius: 20px;
    padding: 10px;
    outline: none;
    border: none;
  }

  input[type='file'] {
    display: none;
  }
  .svg-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    cursor: pointer;
  }
`
const Cta = styled.a`
  width: 100%;
  display: block;
  text-align: right;
  text-decoration: none;
  color: #80bfde;
`
const SelectBox = styled.div`
  cursor: pointer;
  width: 100%;
  border-bottom: 2px solid #77aef1;
  label {
    font-size: 16px;
    font-weight: bold;
    color: #455261;
    display: block;
  }
  select {
    margin-top: 20px;
    appearance: none;
    text-align: center;
    background-color: #8fbed0;
    color: #fff;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    border: none;
    outline: none;
    &:focus {
      box-shadow: 0 0 0 0.25rem rgba(77, 132, 227, 0.816);
    }
  }
  .error-msg {
    font-size: 12px;
    color: red;
  }
`
function SignUp() {
  const dispatch = useDispatch()
  const userState = useSelector(state => state.user)
  const { register, handleSubmit, formState, watch, getValues } = useForm({
    mode: 'onChange',
  })
  const [previewImage, setPreviewImage] = useState('')
  const files = watch('files')
  let blobUrl = ''
  useEffect(() => {
    if (files?.length) {
      const file = files[0]
      blobUrl = URL.createObjectURL(file)
      setPreviewImage(blobUrl)
    }
    return () => {
      URL.revokeObjectURL(blobUrl)
    }
  }, [files])
  const onValid = form => {
    //let newAvatar = ''
    dispatch(
      signUp({
        //...(files && { avatar: newAvatar }),
        email: form?.email,
        age: form?.age,
        confirmPassword: form?.password,
        password: form?.password,
        phoneNumber: form?.phone.replaceAll('-', ''),
        username: form?.name,
      }),
    )
  }
  const handleJobChange = () => {}
  return (
    <>
      <ImageContainer>
        <FileLabel>
          <Avatar url={previewImage} />
          <input
            {...register('files')}
            type="file"
            accept="image/jpg, image/png, image/jpeg"
          />
          {!previewImage && (
            <svg
              className="svg-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          )}
        </FileLabel>
      </ImageContainer>
      <Form onSubmit={handleSubmit(onValid)}>
        <FormLabel>회원가입</FormLabel>
        <FormInput
          id={'name'}
          register={register('name', {
            required: FORM_ERR_MSG.required,
            pattern: {
              value: FORM_REGEX.name,
              message: FORM_ERR_MSG.invalidName,
            },
          })}
          errorMsg={formState.errors['name']?.message}
          placeholder={PLACEHOLDER.name}
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
        <FormInput
          id={'confirm_password'}
          register={register('confirm_password', {
            required: FORM_ERR_MSG.required,
            pattern: {
              value: FORM_REGEX.password,
              message: FORM_ERR_MSG.invalidPw,
            },
            validate: {
              samePw: val =>
                val === getValues('password') || FORM_ERR_MSG.invalidConfirmPw,
            },
          })}
          errorMsg={formState.errors['confirm_password']?.message}
          placeholder={PLACEHOLDER.password}
          type="password"
        />
        <FormInput
          id={'phone'}
          register={register('phone', {
            required: FORM_ERR_MSG.required,
            pattern: {
              value: FORM_REGEX.phone,
              message: FORM_ERR_MSG.invalidPhone,
            },
          })}
          errorMsg={formState.errors['phone']?.message}
          placeholder={PLACEHOLDER.phone}
        />
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
          id={'age'}
          register={register('age', {
            required: FORM_ERR_MSG.required,
            min: 20,
            max: 100,
          })}
          errorMsg={
            (formState.errors['age']?.type === 'max' &&
              FORM_ERR_MSG.invalidAgeMax) ||
            (formState.errors['age']?.type === 'min' &&
              FORM_ERR_MSG.invalidAgeMin)
          }
          placeholder={'20'}
          type="number"
        />
        <SelectBox>
          <label htmlFor="job">직업</label>
          <select
            {...register('job', {
              required: FORM_ERR_MSG.required,
            })}
            onChange={handleJobChange}
            id="job"
          >
            {JOB_ARR.map((job, idx) => (
              <option key={idx}>{job}</option>
            ))}
          </select>
        </SelectBox>
        <Button disabled={!formState.isValid}>회원가입</Button>
        <Cta href="/logIn">로그인 하기</Cta>
      </Form>
    </>
  )
}

export default SignUp
