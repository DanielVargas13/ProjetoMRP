import React, {Fragment} from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import {
    Add,
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
    ViewColumn
} from '@material-ui/icons';

function ItensLapiseira(){

    const tableIcons = {
        Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
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

    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ],
        data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ],
      });

    return(
        <Fragment>
            <h1>Página Inicial</h1>
            <MaterialTable
                icons={tableIcons}
                title="Editable Example"
                columns={state.columns}
                data={state.data}
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
                        cancelTooltip: "Cancelar"
                        }  
                    },
                    toolbar:{
                        searchTooltip: 'Pesquisar',
                        searchPlaceholder: 'Pesquisar'
                    },
                    header:{
                        actions: "Editar"
                    },
                }}
                editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.push(newData);
                        setState({ ...state, data });
                    }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data[data.indexOf(oldData)] = newData;
                        setState({ ...state, data });
                    }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.splice(data.indexOf(oldData), 1);
                        setState({ ...state, data });
                    }, 600);
                    }),
                }}
            />
        </Fragment>
    );
};

export default ItensLapiseira;