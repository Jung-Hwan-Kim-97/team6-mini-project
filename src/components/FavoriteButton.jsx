import React, { useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { addFavorite, deleteFavorite, favoriteHandler, useFavorite } from '../stores/favoriteSlice';
import styled from 'styled-components';

function FavoriteButton({isFavorite, toggleFavorite, item}) {
  const { dispatch, favorite } = useFavorite();

  useEffect(() => {
    console.log(isFavorite)
    
  },[])

  return (
    <FavoriteBtn className="btn btn_favorite">
      { isFavorite 
        ? <AiFillHeart onClick={() => {
            dispatch(deleteFavorite(item));
            toggleFavorite();
          }} /> 
        : <AiOutlineHeart onClick={() => {
            dispatch(addFavorite(item));
            toggleFavorite();
          }} />
      }
    </FavoriteBtn>
  )
}

const FavoriteBtn = styled.button`
  .btn {
    margin: 0 5px;
    outline: none;
    border: none;
    padding: 5px 20px;
    background-color: ${({ theme }) => theme.palette.cobaltBlue};
    color: #fff;
  }
  .btn_favorite {
    background-color: transparent;
    padding: 0;
  }
`

export default FavoriteButton