import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #333333;
  color: #ffffff;
  @media (max-width: 850px) {
    padding: 10px 20px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  @media (max-width: 600px) {
    gap: 20px;
  }
  @media (max-width: 400px) {
    gap: 15px;
  }
`

export const HeaderRightNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 30%;
  @media (max-width: 1170px) {
    gap: 15px;
    width: 50%;
  }
  @media (max-width: 600px) {
    gap: 10px;
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`

export const HeaderLogo = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  @media (max-width: 1170px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: white;
    text-decoration: underline;
  }
  @media (max-width: 1170px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 5px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    padding: 0;
  }
`