import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -10rem;

    div {
        background-color: var(--white);
        color: var(--color-text-primary);
        border-radius: 5px;
        padding: 1.5rem 2rem;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong {
            display: block;
            font-size: 2rem;
            margin-top: 1rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background-color: var(--color-green);
            color: #fff;
        }
    }
`
