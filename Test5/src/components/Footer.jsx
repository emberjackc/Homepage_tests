import React from 'react'
import styled from 'styled-components'
import { Stack, Text, Heading, Grid } from '@kiwicom/orbit-components'

const FooterContainer = styled.footer`
  background: #181b1f;
  color: white;
  padding: 64px 24px 32px;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const FooterSection = styled.div``

const FooterTitle = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`

const FooterLink = styled(Text)`
  font-size: 14px;
  color: #bac7d5;
  cursor: pointer;
  display: block;
  padding: 8px 0;
  transition: color 0.2s;

  &:hover {
    color: #00a991;
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid #2d3741;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`

const Logo = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  color: #00a991;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterTitle>Company</FooterTitle>
            <Stack spacing="none">
              <FooterLink>Terms & Conditions</FooterLink>
              <FooterLink>Terms of Use</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Security</FooterLink>
              <FooterLink>Privacy settings</FooterLink>
            </Stack>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Platform</FooterTitle>
            <Stack spacing="none">
              <FooterLink>About</FooterLink>
              <FooterLink>Product</FooterLink>
              <FooterLink>People</FooterLink>
              <FooterLink>Company info</FooterLink>
              <FooterLink>Jobs</FooterLink>
            </Stack>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Features</FooterTitle>
            <Stack spacing="none">
              <FooterLink>Sign in / Register</FooterLink>
              <FooterLink>Kiwi.com Guarantee</FooterLink>
              <FooterLink>Disruption protection</FooterLink>
              <FooterLink>Mobile app</FooterLink>
              <FooterLink>Site map</FooterLink>
              <FooterLink>Frequently asked questions</FooterLink>
            </Stack>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Discover</FooterTitle>
            <Stack spacing="none">
              <FooterLink>Cheap flights</FooterLink>
              <FooterLink>Countries</FooterLink>
              <FooterLink>Airports</FooterLink>
              <FooterLink>Airlines</FooterLink>
            </Stack>
          </FooterSection>
        </FooterGrid>
        <FooterBottom>
          <Logo>Kiwi.com</Logo>
          <Text size="small" type="secondary" color="white">
            Stand with Ukraine
          </Text>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
