import styled from "styled-components";

export const PrimaryContainer = styled.button`
  width: 200px;
  backgound-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
`;