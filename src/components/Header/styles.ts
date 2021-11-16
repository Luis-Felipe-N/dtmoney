import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--color-blue);
`

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        padding: 0 2rem;
        height: 3rem;
        border: 0;
        border-radius: 0.25rem;
        color: #fff;
        background-color: var(--color-blue-ligth);
        transition: .2s;

        &:hover {
            filter: brightness(.9);
        }
    }
`