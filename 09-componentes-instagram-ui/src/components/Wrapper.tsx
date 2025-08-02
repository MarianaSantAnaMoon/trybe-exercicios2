import styled from 'styled-components';

type WrapperProps = React.PropsWithChildren & {
  title: string;
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Button = styled.button<{ $primary?: boolean; }>`
  /*Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

function Wrapper({ children, title }: WrapperProps) {
  console.count('renderizou');
  return (
    <div className="wrapper">
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
      <Title>{title}</Title>
      { children }
    </div>
  );
}

export default Wrapper;