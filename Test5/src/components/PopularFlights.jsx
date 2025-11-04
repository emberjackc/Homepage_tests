import React from 'react'
import styled from 'styled-components'
import { Card, Stack, Text, Heading, Grid } from '@kiwicom/orbit-components'

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
  margin-bottom: 48px;
  color: #181b1f;
  text-align: center;
`

const FlightCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 24px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`

const FlightRoute = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: #181b1f;
  margin-bottom: 8px;
`

const FlightPrice = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  color: #00a991;
`

const popularFlights = [
  { from: 'London', to: 'Istanbul', price: '$129' },
  { from: 'London', to: 'Tirana', price: '$89' },
  { from: 'London', to: 'Barcelona', price: '$79' },
  { from: 'London', to: 'Jeddah', price: '$299' },
  { from: 'London', to: 'Tel Aviv', price: '$199' },
  { from: 'Istanbul', to: 'London', price: '$129' },
  { from: 'Tel Aviv', to: 'London', price: '$199' },
  { from: 'London', to: 'Prague', price: '$69' },
  { from: 'Tirana', to: 'London', price: '$89' },
  { from: 'London', to: 'Paris', price: '$59' },
  { from: 'London', to: 'Athens', price: '$149' },
  { from: 'London', to: 'Bucharest', price: '$99' },
]

function PopularFlights() {
  return (
    <SectionContainer>
      <SectionContent>
        <SectionTitle>Popular flights</SectionTitle>
        <Text align="center" spaceAfter="large" type="secondary">
          Check these popular routes on Kiwi.com.
        </Text>
        <Grid
          columns="repeat(auto-fill, minmax(280px, 1fr))"
          gap="24px"
        >
          {popularFlights.map((flight, index) => (
            <FlightCard key={index}>
              <FlightRoute>
                {flight.from} → {flight.to}
              </FlightRoute>
              <FlightPrice>{flight.price}</FlightPrice>
            </FlightCard>
          ))}
        </Grid>
      </SectionContent>
    </SectionContainer>
  )
}

export default PopularFlights
