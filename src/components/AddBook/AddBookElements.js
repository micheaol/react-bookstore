import styled from 'styled-components';

export const FormWrapper = styled.div`
    width: 89%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // margin: 2.813rem;
    padding-top: 1.81rem;
    // border-top: solid 1px #e8e8e8;
    margin-left: 7%;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    margin: 0.813rem;
    gap: 2.813rem;
    align-items: center;
    justify-content: center;
`;

export const AddBookInput = styled.input`
     padding: 10px;
     width: 44rem;
     border-radius: 4px
`;

export const CategoryInput = styled.input`
    padding: 10px;
    width: 19.813rem
    border-radius: 4px
`;

export const Headings = styled.span`
width: 10.875rem;
height: 1.5rem;
// margin: 1.813rem 32.75rem 1.188rem 0;
font-family: Montserrat;
font-size: 1.25rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.18px;
color: #888;
align-self: flex-start;
// margin-left: 2%;
`;

export const Button = styled.button`
border-radius: 3px;
outline: none;
border: none;
background-color: #0290ff;
font-family: RobotoSlab-Light;
cursor: pointer;
color: white;
// display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
width: 11.5rem;
width: 11.5rem;
height: 2.063rem;
margin: 0.75rem 1.75rem 0.563rem 3.688rem;
padding: 0.438rem 1.188rem 0.5rem 1.375rem;
font-size: 1.1rem;
font-weight: 300;
text-align: center;
`;
