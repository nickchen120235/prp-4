import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Paper, Button } from '@material-ui/core'

import { CountryDialog } from './components/CountryDialog'
import { AxisDialog } from './components/AxisDialog'

import data from './utils/data'
import styleClass from './utils/styles'
import countryCode from './utils/countryCode'
import seriesCode from './utils/seriesCode'

const App = () => {
  const classes = styleClass()

  const [country, setCountry] = useState('CHN')
  const [countryOpen, setCountryOpen] = useState(false)
  const [x, setX] = useState('')
  const [xOpen, setXOpen] = useState(false)
  const [y, setY] = useState('')
  const [yOpen, setYOpen] = useState(false)

  const handleCountryClose = (value: string) => {
    setCountryOpen(false)
    setCountry(value)
  }
  const handleXClose = (value: string) => {
    setXOpen(false)
    setX(value)
  }
  const handleYClose = (value: string) => {
    setYOpen(false)
    setY(value)
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
        <Button onClick={() => setCountryOpen(true)}>Select Country/Region: {countryCode[country]}</Button><br/>
        <Button onClick={() => setXOpen(true)}>Select X Axis: {seriesCode[x]}</Button>
        <Button onClick={() => setYOpen(true)}>Select Y Axis: {seriesCode[y]}</Button>
      </Paper>
      <CountryDialog open={countryOpen} selected={country} onClose={handleCountryClose} />
      <AxisDialog open={xOpen} selected={x} onClose={handleXClose} axis='x' />
      <AxisDialog open={yOpen} selected={y} onClose={handleYClose} axis='y' />
    </>
  )
}

export default App