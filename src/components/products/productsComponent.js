import React from 'react'
import DataGrid from '../datagrid/datagridComponent'

export default class ProductsComponent extends React.Component{
    render(){
        return <DataGrid url="products.php"></DataGrid>
    }
}