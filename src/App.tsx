import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Paper, Button } from '@material-ui/core'

import { CountryDialog } from './components/CountryDialog'

import data from './utils/data'
import styleClass from './utils/styles'
import countryCode from './utils/countryCode'

const App = () => {
  const classes = styleClass()

  const [country, setCountry] = useState('CHN')
  const [countryOpen, setCountryOpen] = useState(false)

  const handleCountryClose = (value: string) => {
    setCountryOpen(false)
    setCountry(value)
  }

  return(
    <>
      <AppBar>
        <Toolbar>
          <Typography className={classes.appbar} variant='h4'>PRP Assignment 4</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Paper className={classes.paper}>
        <Button onClick={() => setCountryOpen(true)}>Select Country/Region: {countryCode[country]}</Button>
      </Paper>
      <CountryDialog open={countryOpen} selected={country} onClose={handleCountryClose} />
    </>
  )
}

export default App