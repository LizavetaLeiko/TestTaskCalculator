import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #333333;
  color: #ffffff;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
`

export const HeaderRightNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 30%;
`

export const HeaderLogo = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 28px;
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
`