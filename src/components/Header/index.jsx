import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return(
    <Container>
      <Profile to="/profile">
        <img 
        src={avatarUrl} 
        alt={user.name}
        />

        <div>
            <span>Bem-vindo,</span>
            <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}