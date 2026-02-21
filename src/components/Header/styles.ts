import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 348px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: repeat;
  background-size: contain;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 90px;
  justify-self: center;
`

export const Title = styled.h1`
  max-width: 540px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: #e66767;
`

export const HeaderBar = styled.header`
  width: 100%;
  background: #fff5f5;
`;

export const HeaderInner = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;