import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/*function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];*/

  const useStyles = makeStyles({
    table: {
      width: '90%',
    },
  });

  function TesteComponentes(){
      var array=[
            {
              NomeComponente:"Lapiseira P207",
              TamanhoLoteMinimo:700,
              LeadTime:1,
              EstoqueSegurança:0,
              Quantidade:0,
              UnidadeQuantidade:"un",
              EstoqueInicial:550,
              NumeroPeriodos:8,
              NecessidadesBrutas:[200,200,800,1200,400,1200,1200,200],
              RecebimentosProgramados:[],
              RecebimentosOrdensPlanejadas:[],
              LiberacaoOrdensPlanejadas:[]
            }
        ]

        return array;
  }

  function ConstruirTabela(){
    var componentes = TesteComponentes();
    var periodos = 0;
    var result = [];
    const classes = useStyles();
    componentes.map((componente) => (
        result.push(<div key={componente.NomeComponente}>
            <h3>{componente.NomeComponente} - Lote = {componente.TamanhoLoteMinimo} - LT = {componente.LeadTime} - ES = {componente.EstoqueSegurança}</h3>
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
                        {componente.NecessidadesBrutas.map((_necessidade,index) => (
                            <TableCell key={index} align="right">{componente.EstoqueInicial}</TableCell>
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
        </div>)
      ));

      return result;
  }

function MRP(){
    return(
        <Fragment>
            <h1>Página MRP</h1>
            {ConstruirTabela()}
    </Fragment>
    );
};

export default MRP;