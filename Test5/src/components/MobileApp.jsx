import React from 'react'
import styled from 'styled-components'
import { Stack, Text, Heading, Button, Card, Box } from '@kiwicom/orbit-components'

const SectionContainer = styled.div`
  padding: 80px 24px;
  background: white;
`

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled(Heading)`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #181b1f;
`

const SectionDescription = styled(Text)`
  font-size: 16px;
  color: #6b7785;
  margin-bottom: 24px;
  line-height: 1.6;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0;
`

const FeatureItem = styled.li`
  padding: 12px 0;
  font-size: 16px;
  color: #46515e;
  display: flex;
  align-items: center;
  gap: 12px;

  &:before {
    content: '✓';
    color: #00a991;
    font-weight: 700;
    font-size: 20px;
  }
`

const PhoneMockup = styled.div`
  background: linear-gradient(135deg, #00a991 0%, #005448 100%);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  color: white;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const QRCode = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  color: #181b1f;
  font-size: 14px;
`

function MobileApp() {
  return (
    <SectionContainer>
      <SectionContent>
        <div>
          <SectionTitle>Get more out of Kiwi.com with our mobile app</SectionTitle>
          <SectionDescription>
            Download the Kiwi.com mobile app for one-touch access to your next travel adventure. 
            With the Kiwi.com mobile app you'll get access to hidden features and special offers.
          </SectionDescription>
          <FeatureList>
            <FeatureItem>Download boarding passes</FeatureItem>
            <FeatureItem>Get exclusive offers and prices</FeatureItem>
            <FeatureItem>One click bookings</FeatureItem>
            <FeatureItem>Trip notifications</FeatureItem>
          </FeatureList>
          <Stack direction="row" spacing="tight">
            <Button type="primary" size="large">
              Download App
            </Button>
          </Stack>
        </div>
        <PhoneMockup>
          <Text size="large" weight="bold" spaceAfter="medium">
            Scan to download
          </Text>
          <QRCode>
            <Text align="center">QR Code<br />Placeholder</Text>
          </QRCode>
        </PhoneMockup>
      </SectionContent>
    </SectionContainer>
  )
}

export default MobileApp
