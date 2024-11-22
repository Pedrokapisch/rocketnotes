import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  
return(
  <Container>
    <Profile to="/profile">
       <img 
       src="https://github.com/pedrokapisch.png" 
       alt="user image"
       />

       <div>
          <span>Bem-vindo,</span>
          <strong>Pedro Kapisch</strong>
       </div>
    </Profile>

    <Logout>
      <RiShutDownLine />
    </Logout>
  </Container>
  );
}