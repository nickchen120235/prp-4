import { makeStyles } from '@material-ui/core/styles'

const styleClass = makeStyles(theme => ({
  appbar: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: '5px',
    width: '100%'
  },
  alert: {
    margin: '5px'
  },
  countryDialog: {
    columns: 5,
    margin: '5px'
  },
  countryButton: {
    minWidth: '20px'
  },
  cor: {
    marginLeft: '7px'
  },
  graphs: {
    columns: 2,
    width: '100%'
  },
  axistitle: {
    margin: '0 5px'
  }
}))

export default styleClass