import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function ShoppingList({ items }) {
  const totalPurchaseValue = items.reduce(
    (total, item) => total + item.precoUnit * item.quant,
    0
  );

  return (
    <TableContainer component={Paper} sx={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Lista de Compras
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Item</strong></TableCell>
            <TableCell align="right"><strong>Preço Unitário</strong></TableCell>
            <TableCell align="right"><strong>Quantidade</strong></TableCell>
            <TableCell align="right"><strong>Total</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => {
            const itemTotal = item.precoUnit * item.quant;
            return (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">R$ {item.precoUnit.toFixed(2)}</TableCell>
                <TableCell align="right">{item.quant}</TableCell>
                <TableCell align="right">R$ {itemTotal.toFixed(2)}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell colSpan={3} align="right">
              <strong>Valor Total da Compra:</strong>
            </TableCell>
            <TableCell align="right">
              <strong>R$ {totalPurchaseValue.toFixed(2)}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}