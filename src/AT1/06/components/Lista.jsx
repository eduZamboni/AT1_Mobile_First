import styles from './Lista.module.css';

export default function ShoppingList({ items }) {
  const totalPurchaseValue = items.reduce(
    (total, item) => total + item.precoUnit * item.quant,
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Compras</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Preço Unitário</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const itemTotal = item.precoUnit * item.quant;
            return (
              <tr key={index} className={styles.tableRow}>
                <td>{item.name}</td>
                <td>R$ {item.precoUnit.toFixed(2)}</td>
                <td>{item.quant}</td>
                <td>R$ {itemTotal.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.total}>
        <strong>Valor Total da Compra: R$ {totalPurchaseValue.toFixed(2)}</strong>
      </div>
    </div>
  );
}