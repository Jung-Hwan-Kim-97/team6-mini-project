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
        <div className="item"><p>저축한도 (월)</p></div>
        <div className="savingsLimit item">
          <p className='moneyUnit'>₩</p>
          {props.savingsLimit}
        </div>
        <div className='btn-wrap'>
          <BookmarkButton />
          <ApplyButton />
          <CloseButton onDeleteClick={props.onDeleteClick} />
        </div>
      </div>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  .card-container {
    display: grid;
    min-width: 300px;
    max-width: 600px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "bankName bankName btnSet"
      "productName productName productName"
      "productDescription productDescription savingsLimit"
      "productDescription productDescription savingsLimit";
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
    font-size: 1em;
  }
  .bankName {
    grid-area: bankName;
  }
  .btn-wrap {
    grid-area: btnSet;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: end;
    align-items: center;
    justify-items: center;
  }
  .productName {
    grid-area: productName;
    color: ${({ theme }) => theme.palette.cobaltBlue}};
  }
  .productDescription {
    grid-area: productDescription;
    white-space: normal;
  }
`