import React, { useMemo } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { addFavorite, deleteFavorite, useFavorite } from '../stores/favoriteSlice';
import styled from 'styled-components';

function FavoriteButton({ item }) {
  const { dispatch, favorite } = useFavorite();

  const isFavorite = useMemo(() => favorite?.some(element => element.id === item.id))

  return (
    <FavoriteBtn>
      { isFavorite 
        ? <AiFillHeart className='favorite-icon' color='#FF9933' onClick={() => {
            dispatch(deleteFavorite(item));
          }} /> 
        : <AiFillHeart className='favorite-icon' color='#80BFDE' onClick={() => {
            dispatch(addFavorite(item));
          }} />
      }
    </FavoriteBtn>
  )
}

const FavoriteBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
`

export default FavoriteButton