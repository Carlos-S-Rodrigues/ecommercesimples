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
  @media (max-width: 768px) {
    width: 80%;
    font-size: 24px;
    padding-top: 6px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 20px;
    margin-top: 20px;
  }
`

export const Subtotal = styled.h3`
  text-align: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #1f2ce2;
  border-radius: 6px;
  width: 30%;
  padding: 10px;
  color: #1f2ce2;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 20px;
    margin-top: 20px;
  }
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
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      margin: 0 0 2px;
      color: #c5c5c5;
    }
  }
`
