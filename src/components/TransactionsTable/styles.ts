import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0rem 0.5rem;

        th {
            color: var(--color-text-secondary);
            font-weight: 400;
            text-align: left;
            padding: 1rem 2rem;
            line-height: 1.5rem;
        }
        
        td {
            color: var(--color-text-secondary);
            padding: 1rem 2rem;
            
            &:first-child{
                color: var(--color-text-primary);
            }
            
            &.deposit {
                color: var(--color-green);
            }

            &.withdraw {
                color: var(--color-red);
            }
        }
        
        tbody tr {
            background-color: #fff;
            border-radius: 5px;
        }
    }
`
