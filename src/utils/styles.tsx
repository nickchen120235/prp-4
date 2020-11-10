import { makeStyles } from '@material-ui/core/styles'

const styleClass = makeStyles(theme => ({
  appbar: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: '5px'
  },
  countryDialog: {
    columns: 5,
    margin: '5px'
  },
  countryButton: {
    minWidth: '20px'
  }
}))

export default styleClass