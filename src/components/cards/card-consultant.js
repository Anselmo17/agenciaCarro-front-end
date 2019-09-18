import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// Direcionar link
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    borderRadius: '20px',
    background: 'black',
    color: '#eee',
    textAlign: 'center',
    marginBottom: '50px'
  },
  media: {
    height: 140,
  },
  content: {
    color: 'white',
    textAlign: 'center'
  },
  btn: {
    color: 'red',
    textAlign: 'center'
  },
  MuiGridSpacingXs2: {
    margin: '10px'
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Consultora
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
            Está página se referencia a ganhadoras que participaram dos prêmios
            que foram sorteados a todas consultoras que atingiram o bonus extra
            e atiginram suas metas mesal.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className={classes.btn}
        >
          <Link
            to='/consultant'
            style={{
              textDecoration: 'none',
              content: 'center',
              color: 'red'
            }}
          >
            Entrar
          </Link>
        </Button>
      </CardActions>
    </Card>
  );

  
}
