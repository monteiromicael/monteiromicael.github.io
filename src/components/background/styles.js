import styled from 'styled-components';

export const Container = styled.div`
    .ball-01, .ball-02{
    border: 1px solid #CE19D2;
    position: absolute;
    background: linear-gradient(#89468A, #452345);
    box-shadow: 1px 2px 30px #CE19D2;
    }
    .ball-01{
        width: 1000px;
        height: 1000px;
        border-radius: 500px;
        left: -140px;
        top: -350px;
    }
    .ball-02{
        left: -300px;
        top: 250px;
        width: 900px;
        height: 900px;
        border-radius: 450px;
    }
`;
