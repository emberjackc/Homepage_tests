import React from 'react'
import styled from 'styled-components'
import { Card, Stack, Text, Heading, Grid, Box } from '@kiwicom/orbit-components'

const SectionContainer = styled.div`
  padding: 80px 24px;
  background: #f5f7f9;
`

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(Heading)`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #181b1f;
`

const SectionSubtitle = styled(Text)`
  font-size: 16px;
  color: #6b7785;
  margin-bottom: 48px;
`

const DestinationCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 200px;
  background: linear-gradient(135deg, #00a991 0%, #005448 100%);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 169, 145, 0.3);
  }
`

const DestinationName = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 1;
`

const destinations = [
  'New York',
  'London',
  'Paris',
  'Barcelona',
  'Tokyo',
  'Bangkok',
  'Istanbul',
  'Dubai',
  'Rome',
  'Madrid',
  'Amsterdam',
  'Prague',
]

function PopularDestinations() {
  return (
    <SectionContainer>
      <SectionContent>
        <SectionTitle>
          Popular destinations from Washington, D.C.
        </SectionTitle>
        <SectionSubtitle>
          These alluring destinations from Washington, D.C. are picked just for you.
        </SectionSubtitle>
        <Grid
          columns="repeat(auto-fill, minmax(250px, 1fr))"
          gap="24px"
        >
          {destinations.map((destination) => (
            <DestinationCard key={destination}>
              <DestinationName>{destination}</DestinationName>
            </DestinationCard>
          ))}
        </Grid>
      </SectionContent>
    </SectionContainer>
  )
}

export default PopularDestinations
