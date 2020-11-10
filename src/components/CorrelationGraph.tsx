import React from 'react'
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from 'recharts'

import data from '../utils/data'
import seriesCode from '../utils/seriesCode'

interface CorrelationGraphProps {
  country: string
  x: string
  y: string
  hasNaN: (value: boolean) => void
}

export const CorrelationGraph = (props: CorrelationGraphProps) => {
  const { country, x, y, hasNaN } = props
  const renderData = data[country][x].map((value, index) => ({
    x: value,
    y: data[country][y][index]
  }))

  hasNaN(false)
  for (const i of renderData) {
    if(isNaN(i.x) || isNaN(i.y)) hasNaN(true)
  }

  return(
    <ResponsiveContainer aspect={1} width={500}>
      <ScatterChart data={renderData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='x' name={seriesCode[x]} type='number' domain={['auto', 'auto']} />
        <YAxis dataKey='y' name={seriesCode[y]} type='number' domain={['auto', 'auto']} width={30} />
        <Tooltip />
        <Scatter />
      </ScatterChart>
    </ResponsiveContainer>
  )
}