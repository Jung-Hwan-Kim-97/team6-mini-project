import React from 'react'
import styled from 'styled-components'

const ProfileImage = styled.img`
  cursor: pointer;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 50%;
  width: ${props => (props.isSmall ? '40px' : '100px')};
  height: ${props => (props.isSmall ? '40px' : '100px')};
`
const EmptyProfile = styled.div`
  cursor: pointer;
  width: ${props => (props.isSmall ? '40px' : '100px')};
  height: ${props => (props.isSmall ? '40px' : '100px')};
  background-color: gray;
  border-radius: 100%;
`
function Avatar({ url, isSmall = false }) {
  return (
    <>
      {url ? (
        <ProfileImage url={url} isSmall={isSmall} />
      ) : (
        <EmptyProfile isSmall={isSmall} />
      )}
    </>
  )
}

export default Avatar
