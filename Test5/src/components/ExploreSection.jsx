import React from 'react'
import styled from 'styled-components'
import { Stack, Text, Heading, Grid, Card } from '@kiwicom/orbit-components'

const SectionContainer = styled.div`
  padding: 80px 24px;
  background: white;
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

const ExploreCard = styled(Card)`
  padding: 24px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`

const ExploreTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: #181b1f;
  margin-bottom: 16px;
`

const ExploreLink = styled(Text)`
  font-size: 14px;
  color: #00a991;
  cursor: pointer;
  display: block;
  padding: 8px 0;
  transition: color 0.2s;

  &:hover {
    color: #005448;
    text-decoration: underline;
  }
`

const cities = [
  'New York',
  'Los Angeles',
  'Bangkok',
  'London',
  'Istanbul',
  'Barcelona',
  'Paris',
  'Madrid',
  'Tel Aviv',
  'Cairo',
]

const countries = [
  'United States',
  'Mexico',
  'Canada',
  'Spain',
  'India',
  'Colombia',
  'Thailand',
  'Japan',
  'Italy',
  'United Kingdom',
]

function ExploreSection() {
  return (
    <SectionContainer>
      <SectionContent>
        <SectionTitle>Explore Kiwi.com flight offers</SectionTitle>
        <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="32px">
          <ExploreCard>
            <ExploreTitle>Flights to cities</ExploreTitle>
            <Stack spacing="none">
              {cities.map((city) => (
                <ExploreLink key={city}>Flights to {city}</ExploreLink>
              ))}
            </Stack>
          </ExploreCard>
          <ExploreCard>
            <ExploreTitle>Flights to countries</ExploreTitle>
            <Stack spacing="none">
              {countries.map((country) => (
                <ExploreLink key={country}>Flights to {country}</ExploreLink>
              ))}
            </Stack>
          </ExploreCard>
          <ExploreCard>
            <ExploreTitle>Flights to regions</ExploreTitle>
            <Stack spacing="none">
              <ExploreLink>Flights to Southern Asia</ExploreLink>
              <ExploreLink>Flights to Central Asia</ExploreLink>
              <ExploreLink>Flights to Eastern Asia</ExploreLink>
              <ExploreLink>Flights to Caribbean</ExploreLink>
              <ExploreLink>Flights to Southern Europe</ExploreLink>
              <ExploreLink>Flights to Central Africa</ExploreLink>
              <ExploreLink>Flights to Australasia</ExploreLink>
              <ExploreLink>Flights to Central America</ExploreLink>
              <ExploreLink>Flights to Northern Europe</ExploreLink>
              <ExploreLink>Flights to Western Europe</ExploreLink>
            </Stack>
          </ExploreCard>
        </Grid>
      </SectionContent>
    </SectionContainer>
  )
}

export default ExploreSection
