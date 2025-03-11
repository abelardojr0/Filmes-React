import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <img
          src="https://raw.githubusercontent.com/abelardojr0/REC/refs/heads/main/src/Images/logo.png"
          alt="Logo"
        />
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/filmes"}>Filmes</Link>
            </li>
            <li>
              <Link to={"/series"}>Séries</Link>
            </li>
          </ul>
        </nav>
        <input type="text" />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2023 © Bla Bla Bla, Alguns direitos reservados.</footer>
    </>
  );
};
