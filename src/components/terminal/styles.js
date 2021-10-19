import styled from 'styled-components';

export const ContainerTerminal = styled.div`
    border: 1px solid black;
    height:500px;
    width:890px;
    background-color: #1E2127;
    margin-left: 58rem;
    box-shadow: 2px 1px 10px black;

    .backgroundHeader{
        width: 890px;
        height:30px;
        background-color:white;
        opacity: 0.6;
    }

    .header{
        width: 180px;
        height:30px;
        border-radius: 15px 15px 0px 0px;
        background-color: #CCCCCC;
        box-shadow: 2px 2px 20px black;
    }

    .terminalHeader{
        color: black;
        position: relative;
        left: 15px;
        top: 3px;
    }
    span{
        color: white;
    }
    .azul, .ls{
        color: #35B7C5;
    }
    .master{
        color: #8A21A8;
    }
    .version{
        color:#5F944F;
    }

    p{
        color: #505556;
        margin-left: 5px;
    }
    .textLs{
        gap: 36px;
    }
`;
