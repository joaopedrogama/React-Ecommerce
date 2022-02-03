import React from 'react';
import Menu from '../../components/Menu';
import { useShop } from '../../context/shop';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Shop() {
    const { productsShop } = useShop();

    var rows = [];

    for (let i = 0; i < productsShop.length; i++) {
        rows[i] = {
            id: productsShop[i].id,
            nomeProduto: productsShop[i].title,
            valor: productsShop[i].value,
            descricao: productsShop[i].description,
        };
    }

    return (
        <>
            <Menu />
            <React.Fragment>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>PRODUTO</TableCell>
                            <TableCell>VALOR</TableCell>
                            <TableCell>DESCRIÇÃO</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((rows) => (
                            <TableRow>
                                <TableCell>{rows.id}</TableCell>
                                <TableCell>{rows.nomeProduto}</TableCell>
                                <TableCell>{rows.valor}</TableCell>
                                <TableCell>{rows.descricao}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        </>
    );
}

export default Shop;
