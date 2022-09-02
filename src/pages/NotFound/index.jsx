import React from 'react'
import { useNavigate } from 'react-router-dom'
import notfound from '../../assets/not-found.png'

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <img src={notfound} alt="notfound-image" className='notfound-image' />
      <button className='btn' onClick={() => {navigate("/")}}>메인페이지로 돌아가기</button>
    </div>
  )
}

export default NotFound