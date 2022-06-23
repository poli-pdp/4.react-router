import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <Link to="welcome">Mostrar</Link>
      <br />
      <button onClick={handleClick}>Logout</button>
      <Outlet />
      {/** 
      <Routes>
        <Route path="welcome" element={<p>welcome</p>} />
      </Routes>
      */}
    </div>
  );
};

export default DashboardPage;
