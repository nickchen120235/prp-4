import { makeStyles } from '@material-ui/core/styles'

const styleClass = makeStyles(theme => ({
  appbar: {
    marginLeft: 'auto',
    marginRight: 'auto'
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
  },
  viewContainer: {
    margin: '0 auto',
    columns: 2,
    width: '98%',
    height: 700
  },
  subviewContainer: {
    width: '100%',
    height: 'inherit'
  }
}))

export default styleClass