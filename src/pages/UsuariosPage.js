import { Link } from "react-router-dom";

const UsuariosPage = () => {
  const user10 = "10";
  const user20 = "20";
  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <ul>
        <li>
          <Link to={`/usuario/${user10}`}>Usuario {user10}</Link>
        </li>
        <li>
          <Link to={`/usuario/${user20}`}>Usuario {user20}</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsuariosPage;
