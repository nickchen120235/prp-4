import React from 'react'
import { ResponsiveContainer, BerChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

import data from '../utils/data'
import countryCode from '../utils/countryCode'

interface Top10GraphProps {
  category: string
  year: number
}

const Top10Graph = (props: Top10GraphProps) => {
  const { category, year } = props
  const numericData: number[] = []
  for (i in data) {
    numericData.push(data[i][category][year-2010])
  }
  numericData = numericData.sort((a, b) => b-a).slice(0, 10)
  
  const countryData = numericData.map(value => Object.keys(data).find(country => data[country][category][year-2010] === value))
  
  const renderData = countryData.map((value, index) => ({
    country: value,
    value: numericData[index]
  }))
  return(
    <ResponsiveContainer>
      <BarChart data={renderData}>
        <CartesianGrid strokeDashArray='3 3' />
        <XAxis dataKey='country' />
        <YAxis domain={[0, 'dataMax']} />
        <Tooltip />
        <Legend />
        <Bar dataKey='value' fill='#82ca9d' />
      </BarChart>
    </ResponsiveContainer>
  )
}