import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de web sites</td>
                        <td className="deposit">R$12.00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/02</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de web sites</td>
                        <td className="deposit">R$5000.00</td>
                        <td>Computador</td>
                        <td>30/01/02</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de web sites</td>
                        <td className="withdraw">R$12.00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/02</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}