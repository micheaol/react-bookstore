import styled from 'styled-components';
// import { Link } from 'react-scroll';

const Button = styled.a`
    border-radius: 3px;
    background: ${({ primary }) => (primary ? '#793801' : '#0290ff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 11.5rem;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#DAD4D0')};
    }
`;

export default Button;
