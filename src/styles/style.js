import styled from 'styled-components'

export const PageTitle = styled.h1`
  width: 50%;
  height: 38px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: #1f2ce2;
  color: #fff;
  margin-top: 40px;
  border-radius: 4px;
`

export const ProductsArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 70px;
  margin-bottom: 70px;

  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    height: 320px;
    width: 230px;
    border: 2px solid #c5c5c5;
    border-radius: 4px;

    button {
      font-size: 25px;
      background: transparent;
      border: none;
      color: #1f2ce2;
    }
  }
`

export const HeaderStyles = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #1f2ce2;

  a {
    text-decoration: none;
    color: #fff;
    padding-top: 12px;
    font-size: 20px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
      color: #c5c5c5;
    }
  }
`
