import styled from "styled-components";

export const ContainerFilmes = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  img {
    max-width: 300px;
    border-radius: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111038;
    color: white;
    border-radius: 20px;
    padding-bottom: 20px;
  }
`;
