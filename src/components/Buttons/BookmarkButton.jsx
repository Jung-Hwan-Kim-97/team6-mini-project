import React from 'react'
import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'

function BookmarkButton() {
  return (
    <StyledBotton>
      <div className='bookmark-button-container'>
        <p>즐겨찾기</p>
        <button className="btn btn_favorite">
            <FaHeart size="28" />
        </button>
      </div>
    </StyledBotton>
  )
}

export default BookmarkButton

const StyledBotton = styled.div`
  p {
    text-indent: -9999px;
  }
  .btn {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    color: ${({ theme }) => theme.palette.orange};
    cursor: pointer;
  }
`