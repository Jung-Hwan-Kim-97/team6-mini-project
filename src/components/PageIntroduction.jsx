import React, {useState} from 'react'
import styled from 'styled-components'

const PageIntroduction = (props) => {
  return (
    // 페이지 공통 컴포넌트
    <StyledPageName>
      <div className='pageName'>{props.pagename}</div>
      <hr />
    </StyledPageName>
  )
}

export default PageIntroduction

const StyledPageName = styled.div`
  width: calc(100%/2 - 100px);
  min-width: 600px;
  margin: 20px auto;
  .pageName {
    font-size: 1.4em;
    padding: 10px;  
  }
`