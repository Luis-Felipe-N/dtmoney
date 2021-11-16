import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Dt mmoney" />
                <button className="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}