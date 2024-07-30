import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { HomeContainer } from "./DefaultScreen.styles";

export function DefaultScreen() {
  return (
    <HomeContainer>
      <Header />
      <Outlet />
    </HomeContainer>
  );
}
