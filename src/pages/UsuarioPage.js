import { useParams } from "react-router-dom";

const UsuarioPage = () => {
  const params = useParams();
  return <div>Usuario {params.id}</div>;
};

export default UsuarioPage;
