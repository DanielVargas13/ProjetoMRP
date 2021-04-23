import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    Grid,
    Typography 
} from '@material-ui/core';
import {
    Add,
    ArrowDownward,
    ArrowForward,
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
    ViewColumn
} from '@material-ui/icons';

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

export default function Periodos({history}) {
    //STYLE
    const classes = useStyles();
    const [form, setForm] = React.useState(history.location.state || [])
  
    const tableIcons = {
        Add: forwardRef((props, ref) => 
            <Button variant="outlined" color="primary" className={classes.addButton}>
                <Add {...props} ref={ref} className={classes.iconAdd}/>
                Incluir Período
            </Button>
        ),
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

    const [periodos, setPeriodos] = React.useState({
      columns: [
        { title: 'Número Periodo', field: 'NumeroPeriodo', type: 'numeric', editable: 'never' ,   
            cellStyle: {
                textAlign: 'center',
            },
            headerStyle: {
                textAlign: 'center',
            } 
        },
        { title: 'Demanda', field: 'Demanda', type: 'numeric',
            cellStyle: {
                textAlign: 'center',
            },
            headerStyle: {
                textAlign: 'center',
                paddingRight: '3%'
            }  
        }
      ],
      data: [],
    });

    const sendRoute = formEditado => {
        console.log(formEditado)
        history.push({
            pathname: `/mrp`,
            state: formEditado ,
        });
    }

    const handleClickMRP = () => {
        let listaDemanda = [];
        let listArrayVazio = []

        periodos.data.map(item => {
            listaDemanda.push(item.Demanda)
            listArrayVazio.push(0)
        }) 

       let formEditado = Array.from(form)

       formEditado.splice(0,1, {...formEditado[0],
                NumeroPeriodos: periodos.data.length, 
                NecessidadesBrutas: listaDemanda, 
                RecebimentosProgramados:JSON.parse(JSON.stringify(listArrayVazio)),
                EstoqueProjetado:JSON.parse(JSON.stringify(listArrayVazio)),
                RecebimentosOrdensPlanejadas:JSON.parse(JSON.stringify(listArrayVazio)),
                LiberacaoOrdensPlanejadas:JSON.parse(JSON.stringify(listArrayVazio)) })
    
       formEditado.map((item, index) => {
           if(index !== 0){
            formEditado.splice(index,1, {...formEditado[index],NumeroPeriodos: 0, NecessidadesBrutas: JSON.parse(JSON.stringify(listArrayVazio)),  
                RecebimentosProgramados:JSON.parse(JSON.stringify(listArrayVazio)),
                EstoqueProjetado:JSON.parse(JSON.stringify(listArrayVazio)),
                RecebimentosOrdensPlanejadas:JSON.parse(JSON.stringify(listArrayVazio)),
                LiberacaoOrdensPlanejadas:JSON.parse(JSON.stringify(listArrayVazio))})
            }
           
       })
        setForm(form => ({
            ...form,
            [0]:{
                ...form[0],
                NumeroPeriodos:  periodos.data.length,
                NecessidadesBrutas: listaDemanda,
                RecebimentosProgramados:JSON.parse(JSON.stringify(listArrayVazio)),
                EstoqueProjetado:JSON.parse(JSON.stringify(listArrayVazio)),
                RecebimentosOrdensPlanejadas:JSON.parse(JSON.stringify(listArrayVazio)),
                LiberacaoOrdensPlanejadas:JSON.parse(JSON.stringify(listArrayVazio))
            }

        }));

        sendRoute(formEditado);
    }
  
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
                Cadastro de Períodos
            </Typography>
            <Container style={{textAlign: 'center', padding: 0}} maxWidth="xl">
                <Button variant="outlined" color="primary" disabled={periodos.data.length === 0} className={classes.linkButton} 
                    onClick={() => handleClickMRP()}
                >
                    Gerar MRP
                    <ArrowForward className={classes.icons}/>
                </Button>
            </Container>
            <Container style={{textAlign: 'center', padding: 0, margin: 0}}>
                <MaterialTable
                    icons={tableIcons}
                    title=""
                    columns={periodos.columns}
                    data={periodos.data}
                    localization={{
                        body: {
                            emptyDataSourceMessage: 'Sua lista está vazia',
                            filterRow: {
                                filterTooltip: 'Filtrar'
                            },
                            addTooltip: "Adicionar",
                            editTooltip: "Editar",
                            editRow: {
                                saveTooltip: "Salvar",
                                cancelTooltip: "Cancelar",
                                deleteText: "Você tem certeza que deseja excluir este período?"
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
                    onRowAdd: newData =>
                        new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...periodos.data];
                            newData.NumeroPeriodo = data.length !== 0  ? data[data.length - 1].tableData.id + 2 : 1
                            data.push(newData);
                            setPeriodos({ ...periodos, data });
                        }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...periodos.data];
                            data[data.indexOf(oldData)] = newData;
                            setPeriodos({ ...periodos, data });
                        }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...periodos.data];
                            data.splice(data.indexOf(oldData), 1);
                            setPeriodos({ ...periodos, data });
                        }, 600);
                        }),
                    }}
                    options={{
                        actionsColumnIndex: -1,
                        search: false
                    }}
                />
            </Container>
        </Grid>
    );
  }
