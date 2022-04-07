import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Itransactions {
    id: number;
    amount: number;
    title: string;
    type: string;
    created_at: Date;
    category: string;
}

export function TransactionsTable() {
    const [Transactions, setTransactions] = useState<Itransactions[]>()

    useEffect(() => {
        api.get('transactions').then(
            response => setTransactions( response.data )
        )

    }, [])


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
                    
                    {
                        Transactions &&
                        Transactions.map((transaction) => (
                            <tr>
                                <td>{transaction.title}</td>
                                {
                                    transaction.type === 'deposit' 
                                        ? <td className="deposit">
                                            R${transaction.amount}
                                        </td>
                                        : <td className="withdraw">
                                            - R${transaction.amount}
                                        </td>
                                }
                                <td>{transaction.category}</td>
                                <td>{transaction.created_at}</td>
                            </tr>
                        ))
                    }
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
                        <td className="withdraw">-R$12.00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/02</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}