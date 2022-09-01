import React from 'react'
import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'

function BookmarkButton() {
  return (
    <StyledBotton>
      <div className='bookmark-button-container'>
        <p>즐겨찾기</p>
        <button className="btn btn_favorite">
            <FaHeart size="24" />
        </button>
      </div>
    </StyledBotton>
  )
}

export default BookmarkButton

const StyledBotton = styled.div`
  background-color: turquoise;
  p {
    text-indent: -9999px;
  }
  .btn {
    outline: none;
    border: none;
    color: ${({ theme }) => theme.palette.orange};
    cursor: pointer;
  }
  .btn_favorite {
    background-color: transparent;
    padding: 0;
  }
`