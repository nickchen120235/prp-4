import React from 'react'
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, Legend } from 'recharts'

import data from '../utils/data'
import seriesCode from '../utils/seriesCode'

interface CorrelationGraphProps {
  country: string
  x: string
  y: string
  hasNaN: (value: boolean) => void
}

const years = ['2010', '2011', '2012', '2013', '2014']
const colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']

const CorrelationGraph = (props: CorrelationGraphProps) => {
  const { country, x, y, hasNaN } = props
  const renderData = data[country][x].map((value, index) => ([{
    x: value,
    y: data[country][y][index]
  }]))

  hasNaN(false)
  for (const i of renderData) {
    if(isNaN(i[0].x) || isNaN(i[0].y)) hasNaN(true)
  }

  return(
    <ResponsiveContainer aspect={1} width={500}>
      <ScatterChart>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='x' name={seriesCode[x]} type='number' domain={['auto', 'auto']} />
        <YAxis dataKey='y' name={seriesCode[y]} type='number' domain={['auto', 'auto']} width={30} />
        <Tooltip />
        <Legend />
        {renderData.map((value, index) => <Scatter name={years[index]} data={value} key={index} fill={colors[index]} animationDuration={250} />)}
      </ScatterChart>
    </ResponsiveContainer>
  )
}

export default CorrelationGraph