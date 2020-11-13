import React from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

import data from '../utils/data'
import countryCode from '../utils/countryCode'
import seriesCode from '../utils/seriesCode'

interface Least10GraphProps {
  category: string
  year: number
}

const Least10Graph = (props: Least10GraphProps) => {
  const { category, year } = props
  let numericData: number[] = []
  for (const i in data) {
    numericData.push(data[i][category][year-2010])
  }
  numericData = numericData.filter(value => !isNaN(value)).sort((a, b) => a-b).slice(0, 10).reverse()
  
  const countryData = numericData.map(value => Object.keys(data).find(country => data[country][category][year-2010] === value))
  
  const renderData = countryData.map((value, index) => ({
    country: value,
    value: numericData[index]
  }))
  return(
    <ResponsiveContainer height={500} width='80%'>
      <BarChart data={renderData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='country' orientation={numericData.every(value => value<0)? 'top': 'bottom'} />
        <YAxis domain={[dataMin => dataMin<0? Math.ceil(dataMin)-1: 0, dataMax => dataMax<0? 0: Math.ceil(dataMax)]} />
        <Tooltip labelFormatter={label => countryCode[label]} />
        <Legend />
        <Bar dataKey='value' name={seriesCode[category]} fill='#82ca9d' barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Least10Graph