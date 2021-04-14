import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import {
    ArrowDownward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,
    ArrowForward
} from '@material-ui/icons';
import { Button, makeStyles, Grid, Typography, Container }  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: '#f7f6f6', 
        height: '100vh', 
        margin:0, 
        padding: 0, 
        overflow: 'hidden'
    },
    addButton:{
        textTransform: 'capitalize'
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
    },
    iconAdd:{
        marginRight: theme.spacing(1)
    },
}))


export default function ItensLapiseira({history}){

    const classes = useStyles();

    const tableIcons = {
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
   
const [lapiseira, setLapiseira] = React.useState({
    columns: [
        { title: 'Nome', field: 'NomeComponente' },
        { title: 'Tamanho Lote Minimo', field: 'TamanhoLoteMinimo' },
        { title: 'Lead Time(semana)', field: 'LeadTime'},
        { title: 'Estoque de Segurança', field: 'EstoqueSeguranca'},
        { title: 'Quantidade da "receita"', field: 'Quantidade'},
        { title: 'Estoque Inicial', field: 'EstoqueInicial'},
    ],

    data: [
        {
            NomeComponente:"Lapiseira P207",
            TamanhoLoteMinimo:700,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:0,
            UnidadeQuantidade:"un",
            EstoqueInicial:550,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Corpo externo 207",
            TamanhoLoteMinimo:500,
            LeadTime:2,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Presilha de bolso",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Miolo 207",
            TamanhoLoteMinimo:500,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Corpo da ponteira",
            TamanhoLoteMinimo:100,
            LeadTime:2,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Guia da ponteira",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Tampa",
            TamanhoLoteMinimo:500,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Plástico ABS",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:17,
            UnidadeQuantidade:"g",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Corante azul",
            TamanhoLoteMinimo:100,
            LeadTime:2,
            EstoqueSegurança:0,
            Quantidade:0.1,
            UnidadeQuantidade:"g",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Tira .1 mm",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:4,
            UnidadeQuantidade:"g",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Borracha",
            TamanhoLoteMinimo:0,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Capa da borracha",
            TamanhoLoteMinimo:0,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Miolo interno 207",
            TamanhoLoteMinimo:0,
            LeadTime:3,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Grafite 0.7 mm",
            TamanhoLoteMinimo:100,
            LeadTime:2,
            EstoqueSegurança:0,
            Quantidade:4,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Fio de borracha",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:2,
            UnidadeQuantidade:"cm",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Mola",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Corpo do miolo",
            TamanhoLoteMinimo:0,
            LeadTime:2,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Suporte da garra",
            TamanhoLoteMinimo:100,
            LeadTime:2,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Capa da garra",
            TamanhoLoteMinimo:100,
            LeadTime:3,
            EstoqueSegurança:0,
            Quantidade:1,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Garras",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:3,
            UnidadeQuantidade:"un",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        },
        {
            NomeComponente:"Corante Preto",
            TamanhoLoteMinimo:100,
            LeadTime:1,
            EstoqueSegurança:0,
            Quantidade:0.5,
            UnidadeQuantidade:"g",
            EstoqueInicial:0,
            NumeroPeriodos:0,
            NecessidadesBrutas:[],
            RecebimentosProgramados:[],
            EstoqueProjetado:[],
            RecebimentosOrdensPlanejadas:[],
            LiberacaoOrdensPlanejadas:[]
        }
    ]
    });

    return (
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
            Itens da Lapiseira
        </Typography>
        <Container style={{textAlign: 'center', padding: 0}} maxWidth="xl">
            <Button 
                variant="outlined" 
                color="primary" 
                disabled={lapiseira.data.length === 0} 
                className={classes.linkButton} 
                onClick={() => {
                    history.push({
                    pathname: `/periodos`,
                    state: lapiseira.data ,
                });
                }}
            >
                Cadastrar Periodos
                <ArrowForward className={classes.icons}/>
            </Button>
        </Container>
        <MaterialTable
            icons={tableIcons}
            columns={lapiseira.columns}
            data={lapiseira.data}
            className={classes.root}
            localization={{
                body: {
                    emptyDataSourceMessage: 'Sua lista está vazia',
                    filterRow: {
                        filterTooltip: 'Filtrar'
                    },
                    editTooltip: "Editar",
                    editRow: {
                        saveTooltip: "Salvar",
                        cancelTooltip: "Cancelar",
                    }  
                },
                toolbar:{
                    searchTooltip: 'Pesquisar',
                    searchPlaceholder: 'Pesquisar'
                },
                header:{
                    actions: "Ação"
                },
                pagination:{
                    labelRowsSelect: "Linhas",
                    labelDisplayedRows: "{from} - {to} de {count}"
                }
            }}
            editable={{
            onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                    const data = [...lapiseira.data];
                    data[data.indexOf(oldData)] = newData;
                    setLapiseira({ ...lapiseira, data });
                }, 600);
                }),
            }}
        />
    </Grid>
    );
};