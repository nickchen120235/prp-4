import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Paper, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

import CountryDialog from './components/CountryDialog'
import AxisDialog from './components/AxisDialog'

import CorrelationGraph from './components/CorrelationGraph'
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

  const [rankingSeries, setRankingSeries] = useState('NY_GDP_MKTP_KD_ZG')
  const [rankingYear, setRankingYear] = useState(2010)

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
          <Typography variant='h6'>Correlation</Typography>
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
      <Paper className={classes.viewContainer2}>
        <Container maxWidth={false} className={classes.subviewContainer}>
          <Typography variant='h6'>Top 10</Typography>
          <FormControl variant='outlined' margin='dense'size='small'>
            <InputLabel>Series</InputLabel>
            <Select value={rankingSeries} onChange={(e) => setRankingSeries(e.target.value as string)} label='Series'>
              {Object.keys(seriesCode).map(value => <MenuItem key={value} value={value}>{seriesCode[value]}</MenuItem>)}
            </Select>
          </FormControl>
          <Top10Graph category={rankingSeries} year={rankingYear} />
        </Container>
        <Container maxWidth={false} className={classes.subviewContainer}>
          <Typography variant='h6'>Least 10</Typography>
          <FormControl variant='outlined' margin='dense'size='small'>
            <InputLabel>Year</InputLabel>
            <Select value={rankingYear} onChange={(e) => setRankingYear(e.target.value as number)} label='Year'>
              <MenuItem value={2010}>2010</MenuItem>
              <MenuItem value={2011}>2011</MenuItem>
              <MenuItem value={2012}>2012</MenuItem>
              <MenuItem value={2013}>2013</MenuItem>
              <MenuItem value={2014}>2014</MenuItem>
            </Select>
          </FormControl>
          <Least10Graph category={rankingSeries} year={rankingYear} />
        </Container>
      </Paper>
      <CountryDialog open={countryOpen} selected={country} onClose={handleCountryClose} />
      <AxisDialog open={xOpen} selected={x} onClose={handleXClose} axis='x' />
      <AxisDialog open={yOpen} selected={y} onClose={handleYClose} axis='y' />
    </>
  )
}

export default App