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
          <div>
          Home (CC)
          </div>
          {/* </StyledNavLink> */}
          {/* <StyledNavLink to={}> */}
          <div>
          Home (FC)
          </div>
          {/* </StyledNavLink> */}
          {/* <StyledNavLink to={}> */}
          <div>
          Settings
          </div>
          {/* </StyledNavLink> */}
      </HeaderRightNav>
      </HeaderContent>
    </HeaderBox>
  )
}