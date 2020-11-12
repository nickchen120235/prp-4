import React from 'react'
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from 'recharts'

import data from '../utils/data'
import seriesCode from '../utils/seriesCode'

interface AxisLineGraphProps {
  country: string
  axis: string
}

const AxisLineGraph = (props: AxisLineGraphProps) => {
  const { country, axis } = props
  const renderData = data[country][axis].map((value, index) => ({
    x: 2010+index,
    y: value
  }))

  return(
    <ResponsiveContainer height={300} width='80%'>
      <ScatterChart>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='x' name='Year' />
        <YAxis dataKey='y' name={seriesCode[axis]} domain={['auto', 'auto']} />
        <Tooltip />
        <Scatter data={renderData} fill='#8884d8' animationDuration={250} line />
      </ScatterChart>
    </ResponsiveContainer>
  )
}

export default AxisLineGraph