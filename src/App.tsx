import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Paper, Button } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

import { CountryDialog } from './components/CountryDialog'
import { AxisDialog } from './components/AxisDialog'

import { CorrelationGraph } from './components/CorrelationGraph'

import data from './utils/data'
import styleClass from './utils/styles'
import countryCode from './utils/countryCode'
import seriesCode from './utils/seriesCode'
import { correlation } from './utils/math'

import './App.css' // center align the charts

const App = () => {
  const classes = styleClass()

  const [country, setCountry] = useState('CHN')
  const [countryOpen, setCountryOpen] = useState(false)
  const [x, setX] = useState('NY_GDP_MKTP_KD_ZG')
  const [xOpen, setXOpen] = useState(false)
  const [y, setY] = useState('NY_GDP_MKTP_KD_ZG')
  const [yOpen, setYOpen] = useState(false)
  const [correlationHasNaN, setCorrelationHasNaN] = useState(false)

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
  const hasNaN_C = (value: boolean) => {
    setCorrelationHasNaN(value)
  }

  const cor = correlation(data[country][x], data[country][y])?.toPrecision(4)

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
        <Button onClick={() => setXOpen(true)}>Select X Axis: {seriesCode[x]}</Button><br/>
        <Button onClick={() => setYOpen(true)}>Select Y Axis: {seriesCode[y]}</Button><br/>
        <Typography className={classes.cor} display='inline' variant='body1' noWrap>Correlation: {cor? cor: null}</Typography>
        {correlationHasNaN? <Alert className={classes.alert} severity='info'><AlertTitle>Data Missing</AlertTitle>Some values doesn&#39;t exist in the dataset. Those dots won&#39;t be shown.</Alert>: null}
        <CorrelationGraph country={country} x={x} y={y} hasNaN={hasNaN_C} />
      </Paper>
      <CountryDialog open={countryOpen} selected={country} onClose={handleCountryClose} />
      <AxisDialog open={xOpen} selected={x} onClose={handleXClose} axis='x' />
      <AxisDialog open={yOpen} selected={y} onClose={handleYClose} axis='y' />
    </>
  )
}

export default App