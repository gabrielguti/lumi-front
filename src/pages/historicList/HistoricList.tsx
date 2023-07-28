import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"

export const HistoricList = () => {


    const columns = [
        {
            name: "N do Cliente"
        },
        {
            name: "Mês"
        },
        {
            name: "Vencimento"
        },
        {
            name: "Valor total"
        },
    ]

    const createRow = (client: number, month: string, val: string, value: string) => {
        return { client, month, val, value }
    }
    const rows = [
        createRow(1, 'fev', '12/2025', '100'),
        createRow(1, 'fev', '12/2025', '100'),
        createRow(1, 'fev', '12/2025', '100'),
        createRow(1, 'fev', '12/2025', '100'),
        createRow(1, 'fev', '12/2025', '100'),
        createRow(1, 'fev', '12/2025', '100'),
        createRow(1, 'fev', '12/2025', '100'),
        createRow(1, 'fev', '12/2025', '100'),

    ]
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.name}>{column.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {row.client}
                            </TableCell>
                            <TableCell>
                                {row.month}
                            </TableCell>
                            <TableCell>
                                {row.val}
                            </TableCell>
                            <TableCell>
                                {row.value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={15}
                page={1}
                onPageChange={() => { }}
                onRowsPerPageChange={() => { }}
            />
        </TableContainer>
    )
}