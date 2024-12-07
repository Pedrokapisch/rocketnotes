import { Container } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container 
      type="button"
      $isactive={String(isActive)}
      {...rest}
    >
      {title}
    </Container>
  );
}