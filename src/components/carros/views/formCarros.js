import React from 'react';

// components
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

// message response snackbar
import Snackbar from "@material-ui/core/Snackbar";

// mock
import { years, typeCar } from '../../../mocks/listData';

//Links de Route
import { Link } from "react-router-dom";

const FormCarros = ({ fields, handle, classes, snack, error }) => {

  // posicionamento do snackbar
  const [state, setState] = React.useState({
    vertical: "bottom",
    horizontal: "center"
  });

  const { vertical, horizontal } = state;

  // funcao que fecha o snackbar
  const closeSnackBar = () => {
    setState({ ...state });
    handle.handleClose();
  }

  return (

    //  background da pagina
    <div className={classes.body}>

      {/* titulo do formulario */}

      <Grid container className={classes.root} style={{ marginTop: '2px', background: '#b4bbba', color: 'black' }}>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ textAlign: "center" }} >
            Cadastro de Carros
           </Typography>
        </Grid>
      </Grid>


      {/* campos a serem inseridos no formulario parte de cima */}

      <Grid container={true}
        className={classes.root}
        spacing={8}
        style={{ marginTop: '5px', marginBottom: '2%' }}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <Paper className={classes.heightPaper}>
            <Grid container={true}>
              <TextField
                id="standard-full-width"
                label="Descrição do Carro"
                value={fields.modeloCarro}
                name='modeloCarro'
                onChange={handle.change}
                className={classes.inpuText}
                placeholder="Digite nome do carro"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          {/* Seção Requisitos */}
          <Paper className={classes.heightPaperC}>
            <Typography variant="h5" component="h6" className={classes.requisito}>
              Requisitos
          </Typography>
          </Paper>

          <Paper className={classes.heightPaperB}>
            <Grid container={true}>
              <Grid item xs={12}>
                <TextField
                  id="standard-full-width"
                  label="Placa do Carro"
                  value={fields.placa}
                  name='placa'
                  onChange={handle.change}
                  className={classes.inpuText}
                  placeholder="Digite a placa"
                  fullWidth
                  margin="none"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item xs={2} style={{ marginLeft: '10px' }}>
                <Paper>
                  {/* ano do carro */}
                  <InputLabel htmlFor="ano-carro"
                    className={classes.selects}
                  >Ano do Carro</InputLabel>

                  <Select
                    value={fields.anoCarro}
                    style={{ padding: '4px' }}
                    onChange={handle.change}
                    displayEmpty
                    inputProps={{
                      name: 'anoCarro',
                      id: 'ano-carro',
                    }}
                  >
                    <MenuItem value={''} selected > Selecione </MenuItem>
                    {
                      years.map((item) => {
                        return <MenuItem value={item} key={item}>{item}</MenuItem>
                      })
                    }
                  </Select>
                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper>
                  <InputLabel htmlFor='marca-carro' className={classes.selects}
                  >Marca do Carro</InputLabel>
                  <Select
                    value={fields.marcaCarro}
                    style={{ padding: '4px' }}
                    onChange={handle.change}
                    displayEmpty
                    inputProps={{
                      name: 'marcaCarro',
                      id: 'marca-carro',
                    }}
                    required
                  >
                    <MenuItem value={''} selected > Selecione </MenuItem>
                    {
                      typeCar.map((item) => {
                        return <MenuItem value={item.typeId} key={item.typeId}>{item.typeName}</MenuItem>
                      })
                    }
                  </Select>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>


      {/* Botoes de Adicionar e limpar campos  */}

      <Paper className={classes.btnFooter}>
        <Grid container={true}
          direction="row"
          justify="space-between"
          alignItems="center"
        >

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ cursor: 'pointer' }}
              className={classes.button}
              onClick={() => handle.submitSave()}
            >Adicionar</Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            ><Link to='/carros'
              className={classes.links}
            >Voltar</Link></Button>
          </Grid>
        </Grid>

        {/* Mensagem do cadastro snackbar */}
        {
          error === false && snack === true ?
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              key={`${vertical},${horizontal}`}
              open={snack}
              autoHideDuration={3000}
              onClose={closeSnackBar}
              ContentProps={{
                "aria-describe": "message-id",
              }}
              message={<span id="message-id">Cadastrado com Sucesso !!!</span>}
            />
            :
            error === false ? ''
              : <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={snack}
                autoHideDuration={3000}
                onClose={closeSnackBar}
                ContentProps={{
                  "aria-describedby": "message-id",
                }}
                message={<span id="message-id">Falha ao cadastrar os campos</span>}
              />
        }

      </Paper>

    </div>

  )
};


export default FormCarros;