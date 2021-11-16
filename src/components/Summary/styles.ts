import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -10rem;

    div {
        background-color: var(--background);
        color: var(--color-text-primary);
        border-radius: 5px;
        padding: 1.5rem 2rem;
        box-shadow: 0 0 5px #c4c4c4;

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
