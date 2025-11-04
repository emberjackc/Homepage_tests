import React, { useState } from 'react'
import styled from 'styled-components'
import {
  InputField,
  Button,
  Card,
  Stack,
  Text,
  Heading,
  Badge,
  Grid,
  Box,
  Separator,
} from '@kiwicom/orbit-components'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PopularDestinations from './components/PopularDestinations'
import MobileApp from './components/MobileApp'
import PopularFlights from './components/PopularFlights'
import ExploreSection from './components/ExploreSection'
import Footer from './components/Footer'

const AppContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`

const MainContent = styled.main`
  width: 100%;
`

function App() {
  return (
    <AppContainer>
      <Navigation />
      <MainContent>
        <Hero />
        <PopularDestinations />
        <MobileApp />
        <PopularFlights />
        <ExploreSection />
      </MainContent>
      <Footer />
    </AppContainer>
  )
}

export default App
