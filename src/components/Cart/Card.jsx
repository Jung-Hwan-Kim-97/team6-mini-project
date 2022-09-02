import React from 'react'
import styled from 'styled-components'
import ApplyButton from '../Buttons/applyButton'
import BookmarkButton from '../Buttons/BookmarkButton'
import CloseButton from '../Buttons/CloseButton'

const Card = (props) => {
    console.log(CloseButton)
  return (
    <StyledCard>
      <div className='card-container'>
        <div className="bankName item">{props.bankName}</div>
        <div className="productName item">{props.productName}</div>
        <div className="productDescription item">{props.productDescription}</div>
        <p>저축한도 (월)</p>
        <p className='moneyUnit'>₩</p>
        <div className="savingsLimit item">{props.savingsLimit}</div>
        <BookmarkButton />
        <ApplyButton />
        <CloseButton onDeleteClick={props.onDeleteClick} />
      </div>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  .card-container {
    // display: grid;
    min-width: 300px;
    max-width: 600px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    background-color: ${({ theme }) => theme.palette.lightBlue};
    box-sizing: border-box;
    margin: 10px auto;
    padding: 20px;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.palette.cobaltBlue};
    color: ${({ theme }) => theme.palette.fontColor};
  }
  .moneyUnit {
    font-size: 1.5em;
  }
  .item{
    display: flex;
    position: relative;
    align-items: center;
    padding: 10px;
    flex-shrink: 0;
    white-space:nowrap;
  }
  .bankName {
    grid-column: span 3;
    font-size: 1.3em;
  }
  .productName {
    grid-column: span 2;
    grid-row: 2;
    font-size: 1.1em;
  }
  .myAccount {
    grid-column: 3 / 5 ;
    grid-row: 2;
    font-size: 1em;
    justify-content: end;
  }
  .balance{
    grid-row: 3;
    grid-column: span 4;
    font-size: 1em;
  }
`