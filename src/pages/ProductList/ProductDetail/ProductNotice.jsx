import React from 'react'
import styled from 'styled-components'
import { AiFillCheckCircle } from 'react-icons/ai'
import noticeData from '~/data/notice'
const ProductNotice = () => {
  return (
    <StyledProductNotice>
      <section className="notice-header">
        <h1 className="notice-header_title">
          <span>
            <AiFillCheckCircle color="#2D71C4" size="32" />
          </span>
          NOTICE
        </h1>
      </section>

      <section className="notice-body">
        {noticeData.map(i => {
          return (
            <ol className="test1" key={i.id}>
              <li className="test_3">
                {i.title}
                <ul className="test2">
                  {Object.keys(i.contents).length < 2 ? (
                    <li>
                      <p>{i.contents.content1}</p>
                    </li>
                  ) : (
                    <li>
                      <p>{i.contents.content1}</p>
                      <p>{i.contents.content2}</p>
                      <p>{i.contents.content3}</p>
                      <p>{i.contents.content4}</p>
                      <p>{i.contents.content5}</p>
                      <p>{i.contents.content6}</p>
                      <p>{i.contents.content7}</p>
                      <p>{i.contents.content8}</p>
                    </li>
                  )}
                </ul>
              </li>
            </ol>
          )
        })}
      </section>
    </StyledProductNotice>
  )
}

const StyledProductNotice = styled.div`
  width: 100%;
  margin: 30px 0;
  .notice-header {
    border-bottom: 2px solid #808080;
    padding: 15px;
    box-sizing: border-box;
    .notice-header_title {
      font-size: 35px;
      font-weight: 700;
      color: #808080;
    }
  }
  .notice-body {
    .test1 {
      .test_3 {
        margin: 12px 0;
        .test2 {
          li {
            margin-left: 30px;
            p {
              margin: 10px 0;
              color: #808080;
            }
          }
        }
      }
    }
  }
`

export default ProductNotice
