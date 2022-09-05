import React from 'react'
import styled from 'styled-components'
import ApplyButton from '../Buttons/applyButton'
// import BookmarkButton from '../Buttons/BookmarkButton'
import FavoriteButton from '../FavoriteButton'
import CloseButton from '../Buttons/CloseButton'

const Card = props => {
  console.log(CloseButton)
  return (
    <StyledCard>
      <div className="card-container">
        <div className="bankName item">{props.bankName}</div>
        <div className="productName item">{props.productName}</div>
        <div className="productDescription item">
          {props.productDescription}
        </div>
        <div className="moneyBox">
          <p className="moneyBoxText">저축한도 (월)</p>
          <p className="moneyUnit">₩</p>
          <div className="savingsLimit item">{props.savingsLimit}</div>
        </div>
        <div className="btn-wrap">
          <FavoriteButton item={props.product} />
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
    min-width: 300px;
    max-width: 600px;
    display: grid;
    grid-template-rows: 50px 30px 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'bankName bankName btnSet'
      'productName productName productName'
      'productDescription productDescription savingsLimit'
      'productDescription productDescription .';
    background-color: ${({ theme }) => theme.palette.lightBlue};
    box-sizing: border-box;
    border-radius: 0.8rem;
    margin: 10px auto;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.palette.cobaltBlue};
    color: ${({ theme }) => theme.palette.fontColor};
    line-height: 1;
  }
  .item {
    display: flex;
    position: relative;
    align-items: center;
    padding: 10px;
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 1em;
  }
  .bankName {
    grid-area: bankName;
    font-size: 1.5em;
  }
  .btn-wrap {
    grid-area: btnSet;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0.5em;
    justify-self: end;
    align-items: center;
    justify-items: center;
    margin-bottom: 20px;
  }
  .productName {
    grid-area: productName;
    font-size: 1.8em;
  }
  .moneyBox {
    grid-area: savingsLimit;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    .moneyBoxText {
      grid-column: span 3;
      font-size: 16px;
      justify-self: center;
    }
    .moneyUnit {
      font-size: 24px;
      padding-right: 4px;
      justify-self: end;
    }
    .savingsLimit {
      font-size: 24px;
      grid-column: span 2;
      justify-self: start;
      padding: 0;
      margin: 0;
    }
  }
  .productDescription {
    grid-area: productDescription;
    white-space: normal;
    line-height: 1.3;
  }
`
