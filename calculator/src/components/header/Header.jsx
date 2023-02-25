import {
  HeaderBox,
  HeaderContent,
  HeaderLogo,
  HeaderRightNav,
  StyledNavLink,
} from './headerStyles'

export const Header = () => {
  return (
    <HeaderBox>
      <HeaderContent>
      <HeaderLogo>Calculator App</HeaderLogo>
      <HeaderRightNav>
          <StyledNavLink to={'/'}>
          Home (CC)
          </StyledNavLink> 
          <StyledNavLink to={'/fc'}>
          Home (FC)
          </StyledNavLink>
          <StyledNavLink to={'/settings'}>
          Settings
          </StyledNavLink>
      </HeaderRightNav>
      </HeaderContent>
    </HeaderBox>
  )
}