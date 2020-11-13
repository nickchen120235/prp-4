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
  viewContainer: {
    margin: '0 auto',
    marginTop: '5px',
    columns: 2,
    width: '98%',
    height: 700
  },
  viewContainer2: {
    margin: '0 auto',
    marginTop: '5px',
    columns: 2,
    width: '98%',
    height: 600
  },
  subviewContainer: {
    width: '100%',
    height: 'inherit'
  }
}))

export default styleClass