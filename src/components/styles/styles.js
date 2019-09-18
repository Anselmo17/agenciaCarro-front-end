import { makeStyles } from '@material-ui/core/styles';


const styles = () => ({

  root: {
    flexGrow: 1,
    marginBottom: '10px'
  },
  body: {
    borderRadius: '10px',
    opacity: '0.9',
    padding: '20px',
    background: '#acb3b2',
    marginBottom: '20px'
  },
  gridControl: {
    maxWidth: '1.333333%',
  },
  MuiButtonContainedPrimaryhover: {
    backgroundColor: '#010414'
  },
  card: {
    borderRadius: 8,
    maxWidth: '90%',
    minHeight: 200,
    position: 'relative',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  title: {
    display: 'block',
    textAlign: 'center',
    marginBottom: 20
  },
  requisito: {
    marginLeft: '10px'
  },
  heightPaper: {
    marginTop: '-25px',
    width: '100%'
  },
  heightPaperB: {
    marginTop: '-1px',
    width: '100%'
  },
  heightPaperC: {
    marginTop: '-45px',
    width: '100%'
  },
  inpuText: {
    fontSize: 75,
    heigth: '70px',
    maxWidth: '600px',
    margin: 28
  },
  iconStyle: {
    fontSize: 35,
    color: 'rgb(111, 86, 184)'
  },
  underline: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  button: {
    margin: makeStyles(theme => ({
      button: {
        margin: theme.spacing(1),
        textDecoration: 'none',
        cursor: 'pointer',
        background: '#100909'
      },

      input: {
        display: 'none',
      },
    }))
  },
  links: {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer',
    verticalAlign: 'middle'
  },
  MuiButtonLabel: {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'red'
  },
  fixBtn: {
    marginTop: '20px'
  },
  btn: {
    textDecoration: 'none',
  },
  paper: {
    padding: makeStyles(theme => ({
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }))
  },
  selects: {
    width: '140px',
    padding: '5px',
    heigth: '20px'
  },
  btnFooter: {
    padding: '20px',
    heigth:'30px'
  }
});

export default styles;