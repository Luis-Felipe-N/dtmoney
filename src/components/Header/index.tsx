import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface iHeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header(props: iHeaderProps) {
    


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Dt mmoney" />
                <button className="button" onClick={() => props.onOpenNewTransactionModal()}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}