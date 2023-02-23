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
          {/* <StyledNavLink to={}> */}
            Home (CC)
          {/* </StyledNavLink> */}
          {/* <StyledNavLink to={}> */}
            Home (FC)
          {/* </StyledNavLink> */}
          {/* <StyledNavLink to={}> */}
            Settings
          {/* </StyledNavLink> */}
      </HeaderRightNav>
      </HeaderContent>
    </HeaderBox>
  )
}