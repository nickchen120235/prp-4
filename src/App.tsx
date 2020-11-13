import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Paper, Button, Container } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

import { CountryDialog } from './components/CountryDialog'
import { AxisDialog } from './components/AxisDialog'

import { CorrelationGraph } from './components/CorrelationGraph'
import AxisLinegraph from './components/AxisLineGraph'
import Top10Graph from './components/Top10Graph'
import Least10Graph from './components/Least10Graph'

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

  const cor = Math.abs(correlation(data[country][x], data[country][y])).toPrecision(4)

  return(
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography className={classes.appbar} variant='h4'>PRP Assignment 4</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Paper className={classes.viewContainer}>
        <Container maxWidth={false} className={classes.subviewContainer} >
          <Button onClick={() => setCountryOpen(true)}>Select Country/Region: {countryCode[country]}</Button><br/>
          {correlationHasNaN? <Alert className={classes.alert} severity='info'><AlertTitle>Data Missing</AlertTitle>Some values doesn&#39;t exist in the dataset. Those dots won&#39;t be shown.</Alert>: null}
          <Typography className={classes.cor} display='inline' variant='body1' noWrap>Absolute Correlation: {correlationHasNaN? null: cor}</Typography>
          <CorrelationGraph country={country} x={x} y={y} hasNaN={hasNaN_C} /><br/>
        </Container>
        <Container maxWidth={false} className={classes.subviewContainer}>
          <Button onClick={() => setXOpen(true)}>Select X Axis: {seriesCode[x]}</Button><br/>
          <AxisLinegraph country={country} axis={x} />
          <Button onClick={() => setYOpen(true)}>Select Y Axis: {seriesCode[y]}</Button><br/>
          <AxisLinegraph country={country} axis={y} />
        </Container>
      </Paper>
      <Top10Graph category={x} year={2010} />
      <Least10Graph category={x} year={2010} />
      <CountryDialog open={countryOpen} selected={country} onClose={handleCountryClose} />
      <AxisDialog open={xOpen} selected={x} onClose={handleXClose} axis='x' />
      <AxisDialog open={yOpen} selected={y} onClose={handleYClose} axis='y' />
    </>
  )
}

export default App