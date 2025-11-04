import React from 'react'
import styled from 'styled-components'
import { Stack, Text, Button, Badge } from '@kiwicom/orbit-components'

const NavContainer = styled.nav`
  background: #ffffff;
  border-bottom: 1px solid #e8edf1;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`

const Logo = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  color: #00a991;
  cursor: pointer;
`

const NavLink = styled(Text)`
  font-size: 14px;
  color: #46515e;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #00a991;
  }
`

const RightSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

function Navigation() {
  return (
    <NavContainer>
      <NavContent>
        <Logo as="div">Kiwi.com</Logo>
        <NavLinks>
          <NavLink>Flights</NavLink>
          <NavLink>Cars</NavLink>
          <NavLink>Stays</NavLink>
          <NavLink>Magazine</NavLink>
          <NavLink>Marketplace</NavLink>
          <NavLink>Deals</NavLink>
        </NavLinks>
        <RightSection>
          <Text size="small" type="secondary">USD</Text>
          <Button type="secondary" size="small">Help & support</Button>
          <Button size="small">Sign in</Button>
        </RightSection>
      </NavContent>
    </NavContainer>
  )
}

export default Navigation
