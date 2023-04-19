import styled from 'styled-components';

const Cot2 = styled.div`
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    border-style: solid;
    border-width: 0px;
    border-color: black;
    ${'' /* padding-bottom: 20px; */}
    margin-top: 20px;
`;
export { Cot2 };

const Table = styled.table`
`
export { Table };

const TableHeader = styled.li`
    border-radius: 3px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    ${'' /* margin-left: 5%; */}
`
export { TableHeader };

const TableRow = styled.li`
    ${'' /* justify-content: space-between; */}
    background-color: #ffffff;
    padding: 10px 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    display: flex;
    ${'' /* margin-left: 5%; */}

`
export { TableRow };

const Container = styled.ul`
    ${'' /* max-width: 1000px; */}
    ${'' /* margin-left: auto; */}
    ${'' /* margin-right: auto; */}
    ${'' /* padding-left: 10px; */}
    ${'' /* padding-right: 10px; */}
`
export { Container };

const Button = styled.button`
  background-color: white;
  ${'' /* color: white; */}
  font-size: 15px;
  border-radius: 10px;
  width: 90px;

`;
export { Button };