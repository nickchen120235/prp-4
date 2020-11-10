import React from 'react'
import { Dialog, DialogTitle, Container, Button, Typography } from '@material-ui/core'

import countryCode from '../utils/countryCode'
import styleClasses from '../utils/styles'

interface CountryDialogProps {
  open: boolean
  selected: string
  onClose: (value: string) => void
}

export const CountryDialog = (props: CountryDialogProps) => {
  const description = Object.values(countryCode).sort()
  const { open, selected, onClose } = props
  const classes = styleClasses()

  const handleClose = () => onClose(selected)
  const handleClick = (name: string) => {
    let value = Object.keys(countryCode).find(key => countryCode[key] === name)
    if(value === undefined) value = ''
    onClose(value)
  }

  return(
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth={false}>
      <DialogTitle>Select Country/Region</DialogTitle>
      <Container className={classes.countryDialog}>
        {description.map(value => <><Button key={value} onClick={() => handleClick(value)} className={classes.countryButton}><Typography align='left' variant='body2' noWrap>{value}</Typography></Button><br/></>)}
      </Container>
    </Dialog>
  )
}