import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts'

import data from '../utils/data'

interface LaborGraphProps {
  country: string
  year: number
  id?: number|string
}

const LaborGraphWithLegend = (props: LaborGraphProps) => {
  const { country, year, id } = props

  const labor = [
    {
      name: 'Labor force, female (% of total labor force)',
      value: data[country]['SL_TLF_TOTL_FE_ZS'][year-2010],
      fill: '#003f5c'
    },
    {
      name: 'Labor force, male (% of total labor force)',
      value: 100-data[country]['SL_TLF_TOTL_FE_ZS'][year-2010],
      fill: '#d45087'
    }
  ]
  const armor = [
    {
      name: 'Armed forces personnel (% of total labor force)',
      value: data[country]['MS_MIL_TOTL_TF_ZS'][year-2010],
      fill: '#2f4b7c'
    },
    {
      name: 'Unarmed (% of total labor force)',
      value: 100-data[country]['MS_MIL_TOTL_TF_ZS'][year-2010],
      fill: '#f95d6a'
    }
  ]
  const unemploy = [
    {
      name: 'Unemployment, total (% of total labor force) (modeled ILO estimate)',
      value: data[country]['SL_UEM_TOTL_ZS'][year-2010],
      fill: '#665191'
    },
    {
      name: 'Employment, total (% of total labor force) (modeled ILO estimate)',
      value: 100-data[country]['SL_UEM_TOTL_ZS'][year-2010],
      fill: '#ff7c43'
    }
  ]
  const unemployfemale = [
    {
      name: 'Unemployment, female (% of female labor force) (modeled ILO estimate)',
      value: data[country]['SL_UEM_TOTL_FE_ZS'][year-2010],
      fill: '#a05195'
    },
    {
      name: 'Employment, female (% of female labor force) (modeled ILO estimate)',
      value: 100-data[country]['SL_UEM_TOTL_FE_ZS'][year-2010],
      fill: '#ffa600'
    }
  ]

  return(
    <ResponsiveContainer height={300} width='100%' id={id}>
      <PieChart>
        <Pie data={labor} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={40} />
        <Pie data={armor} dataKey='value' nameKey='name' cx='50%' cy='50%' innerRadius={45} outerRadius={60} />
        <Pie data={unemploy} dataKey='value' nameKey='name' cx='50%' cy='50%' innerRadius={65} outerRadius={80} />
        <Pie data={unemployfemale} dataKey='value' nameKey='name' cx='50%' cy='50%' innerRadius={85} outerRadius={100} />
        <Legend layout='vertical' verticalAlign='middle' align='right' />
        <Tooltip position={{x: 0, y: -5}} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default LaborGraphWithLegend