import React from 'react'
import { Dialog, DialogTitle, Container, Button, Typography } from '@material-ui/core'

import seriesCode from '../utils/seriesCode'

interface AxisDialogProps {
  open: boolean
  selected: string
  onClose: (value: string) => void
  axis: 'x' | 'y'
}

const AxisDialog = (props: AxisDialogProps) => {
  const description = Object.values(seriesCode)
  const { open, selected, onClose, axis } = props

  const handleClose = () => onClose(selected)
  const handleClick = (name: string) => {
    let value = Object.keys(seriesCode).find(key => seriesCode[key] === name)
    if(value === undefined) value = ''
    onClose(value)
  }

  return(
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth={false}>
      <DialogTitle>Select {axis.toUpperCase()} Axis</DialogTitle>
      <Container>
        {description.map(value => <><Button key={value} onClick={() => handleClick(value)}><Typography align='left' variant='body2' noWrap>{value}</Typography></Button><br/></>)}
      </Container>
    </Dialog>
  )
}

export default AxisDialog