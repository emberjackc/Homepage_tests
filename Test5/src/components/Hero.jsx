import React, { useState } from 'react'
import styled from 'styled-components'
import {
  InputField,
  Button,
  Card,
  Stack,
  Text,
  Heading,
  Select,
  Badge,
} from '@kiwicom/orbit-components'

const HeroContainer = styled.div`
  background: linear-gradient(135deg, #00a991 0%, #005448 100%);
  padding: 80px 24px;
  color: white;
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const HeroTitle = styled(Heading)`
  color: white !important;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
`

const SearchCard = styled(Card)`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`

const SearchForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto auto;
  gap: 16px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TripTypeSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`

const TripTypeButton = styled.button`
  background: ${(props) => (props.active ? 'white' : 'transparent')};
  color: ${(props) => (props.active ? '#00a991' : 'white')};
  border: 1px solid white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? 'white' : 'rgba(255, 255, 255, 0.1)')};
  }
`

const ClassSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`

const PassengerSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`

function Hero() {
  const [tripType, setTripType] = useState('return')
  const [from, setFrom] = useState('Washington, D.C.')
  const [to, setTo] = useState('')
  const [departure, setDeparture] = useState('')
  const [returnDate, setReturnDate] = useState('')

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Fly for less, Guaranteed!</HeroTitle>
        <SearchCard>
          <TripTypeSelector>
            <TripTypeButton
              active={tripType === 'return'}
              onClick={() => setTripType('return')}
            >
              Return
            </TripTypeButton>
            <TripTypeButton
              active={tripType === 'one-way'}
              onClick={() => setTripType('one-way')}
            >
              One-way
            </TripTypeButton>
          </TripTypeSelector>
          <ClassSelector>
            <Badge type="info">Economy</Badge>
          </ClassSelector>
          <PassengerSelector>
            <Badge type="info">1 Passenger</Badge>
          </PassengerSelector>
          <SearchForm>
            <InputField
              label="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="City, airport or place"
            />
            <InputField
              label="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="City, airport or place"
            />
            <InputField
              label="Departure"
              type="date"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
            {tripType === 'return' && (
              <InputField
                label="Return"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            )}
            {tripType === 'one-way' && <div />}
          </SearchForm>
          <Stack direction="row" justify="end" spacing="tight">
            <Button size="large" type="primary">
              Explore
            </Button>
          </Stack>
        </SearchCard>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
