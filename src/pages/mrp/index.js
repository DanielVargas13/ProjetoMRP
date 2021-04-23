import React, { Fragment } from 'react';
import { makeStyles, Typography, Button, Container, Grid }  from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

  const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: '#ffffff', 
        height: '20vh', 
        margin:0, 
        padding: 0, 
        overflow: 'hidden'
    },
    table: {
      width: '90%',
    },
    title:{
        textAlign: 'center',
        margin: theme.spacing(3),
        fontFamily: 'Questrial, sans-serif '
    },
    icons:{
        margin: theme.spacing(1,2)
    },
    linkButton:{
        textAlign: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize',
        marginTop: theme.spacing(-5),
        paddingLeft: theme.spacing(5),
    }
  }));

  function CalculaDemandas(componentes,posicaoItem){
    var valor = 0;
    switch (posicaoItem) {
        case 0:
            componentes[0].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[1].Quantidade;
                    componentes[1].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[2].Quantidade;
                    componentes[2].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[3].Quantidade;
                    componentes[3].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[4].Quantidade;
                    componentes[4].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[5].Quantidade;
                    componentes[5].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[6].Quantidade;
                    componentes[6].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        case 1:
            componentes[1].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[7].Quantidade;
                    componentes[7].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[8].Quantidade;
                    componentes[8].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        case 3:
            componentes[3].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[10].Quantidade;
                    componentes[10].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[11].Quantidade;
                    componentes[11].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[12].Quantidade;
                    componentes[12].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[13].Quantidade;
                    componentes[13].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        case 6:
            componentes[6].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[9].Quantidade;
                    componentes[9].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        case 10:
            componentes[10].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[14].Quantidade;
                    componentes[14].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        case 11:
            componentes[11].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[15].Quantidade;
                    componentes[15].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        case 12:
            componentes[12].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[16].Quantidade;
                    componentes[16].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[17].Quantidade;
                    componentes[17].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[18].Quantidade;
                    componentes[18].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[19].Quantidade;
                    componentes[19].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[20].Quantidade;
                    componentes[20].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        case 17:
            componentes[17].LiberacaoOrdensPlanejadas.map((ordem,index) => {
                if(ordem > 0){
                    valor = ordem * componentes[21].Quantidade;
                    componentes[21].NecessidadesBrutas.splice(index,1,valor);

                    valor = ordem * componentes[22].Quantidade;
                    componentes[22].NecessidadesBrutas.splice(index,1,valor);
                }

                return 0;
              });
            break;
        default:
            break;
      }
  }

  function CalculaMRP(item,numeroPeriodos){
    for (let index = 0; index < numeroPeriodos; index++) {
        var valor = 0;
        var ordemPlanejada = 0;
        if (index === 0) {
            ordemPlanejada = item.RecebimentosOrdensPlanejadas[index];
            valor = ordemPlanejada + item.EstoqueInicial - item.NecessidadesBrutas[index];

            if(valor >= 0){
                item.EstoqueProjetado.splice(index,1,valor);
            }
            else{
                item.EstoqueProjetado.splice(index,1,"Stockout");
            }
        } 
        else {
            ordemPlanejada = item.RecebimentosOrdensPlanejadas[index];

            if(item.EstoqueProjetado[index-1] === "Stockout"){
                item.EstoqueProjetado.splice(index,1,0);
            }
            else{
                do {
                    valor = ordemPlanejada + item.EstoqueProjetado[index-1] - item.NecessidadesBrutas[index];
                    
                    if(valor >= 0){
                        item.EstoqueProjetado.splice(index,1,valor);
                    }
                    else{
                        if(item.TamanhoLoteMinimo > 0){
                            if(item.Quantidade > 0){
                                ordemPlanejada += item.TamanhoLoteMinimo * item.Quantidade;
                            }
                            else{
                                ordemPlanejada += item.TamanhoLoteMinimo;
                            }
                        }
                        else{
                            ordemPlanejada += valor*(-1);
                        }
                    }
                } while (valor < 0);
    
                if(ordemPlanejada > 0 && index-item.LeadTime < 0){
                    item.EstoqueProjetado.splice(index,1,"Stockout");
                }
                else{
                    item.LiberacaoOrdensPlanejadas.splice(index-item.LeadTime,1,ordemPlanejada);
                    item.RecebimentosOrdensPlanejadas.splice(index,1,ordemPlanejada);
                }
            }
        }
    }
  }

  function ConstruirTabela(componentes){
    var periodos = 0;
    var result = [];
    const classes = useStyles();
    componentes.map((componente) => {
        periodos = 0;
        result.push(<div key={componente.NomeComponente}>
            <h3>{componente.NomeComponente} / Lote = {componente.TamanhoLoteMinimo * componente.Quantidade} / LT = {componente.LeadTime} / ES = {componente.EstoqueSegurança} / Unidade = {componente.UnidadeQuantidade}</h3>
            <TableContainer className={classes.table} component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Períodos</TableCell>
                    {componente.NecessidadesBrutas.map((_necessidade,index) => (
                            <TableCell key={index} align="right">{++periodos}</TableCell>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Necessidades Brutas
                        </TableCell>
                        {componente.NecessidadesBrutas.map((necessidade,index) => (
                            <TableCell key={index} align="right">{necessidade}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Recebimentos Programados
                        </TableCell>
                        {componente.RecebimentosProgramados.map((recebimentos,index) => (
                            <TableCell key={index} align="right">{recebimentos}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Estoque Projetado | {componente.EstoqueInicial}
                        </TableCell>
                        {componente.EstoqueProjetado.map((estoque,index) => (
                            <TableCell key={index} align="right">{estoque}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Recebimentos Ordens Planejadas
                        </TableCell>
                        {componente.RecebimentosOrdensPlanejadas.map((recebimentoOrdens,index) => (
                            <TableCell key={index} align="right">{recebimentoOrdens}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Liberação Ordens Planejadas
                        </TableCell>
                        {componente.LiberacaoOrdensPlanejadas.map((liberacaoOrdens,index) => (
                            <TableCell key={index} align="right">{liberacaoOrdens}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </div>);
        
        return 0;
      });

      return result;
  }

function MRP({history}){
    const classes = useStyles();
    var componentes = history.location.state;
    var numeroPeriodos = componentes[0].NumeroPeriodos;
    
    for (let index = 0; index < componentes.length; index++) {
        CalculaMRP(componentes[index],numeroPeriodos);
        CalculaDemandas(componentes,index);
    }

    return(
        <Fragment>
            <Grid 
                container  
                direction="row"
                justify="center"
                alignItems="baseline" 
                spacing={3}
                zeroMinWidth={false}
                className={classes.root}
            >
                <Typography variant="h4" gutterBottom className={classes.title}>
                        MRPs Gerados
                    </Typography>
                    <Container style={{textAlign: 'center', padding: 0}} maxWidth="xl">
                        <Button variant="outlined" color="primary" className={classes.linkButton} 
                            onClick={() => { history.push("/"); }}
                        >
                            Reiniciar
                            <Autorenew className={classes.icons}/>
                        </Button>
                    </Container>
            </Grid>
            {ConstruirTabela(componentes)}
    </Fragment>
    );
};

export default MRP;