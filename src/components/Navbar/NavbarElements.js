import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    width: 84.2rem;
    height: 5.938rem;
    margin: 0 0 2.375rem;
    padding: 1.438rem 4.188rem 1.688rem 6.25rem;
    background-color: #fff;
    display: flex;
    border-radius: 4px;
    border: solid 1px #e8e8e8;

`;

export const NavbarLogo = styled.span`
  width: 15rem;
  height: 2.313rem;
  margin: 0.375rem 2.938rem 0.125rem 0;
  font-family: Montserrat-Bold;
  font-size: 1.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0290ff;
`;

export const NavItems = styled.div`
    display: flex;
    
`;

export const MenuLinks = styled(Link)`
    width: 3.688rem;
    height: 1rem;
    margin: 1.125rem 2.563rem 0.688rem 0;
    font-family: Montserrat;
    font-size: 0.81 3rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.9px;
    color: #121212;
    cursor: pointer;
    text-decoration: none;
`;

export const NavbarIcon = styled.span`
    width: 2.813rem;
    height: 2.813rem;
    margin: 0 0 0 41.5rem;
    padding: 0.775rem;
    border: solid 1px #C7BFBF;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
