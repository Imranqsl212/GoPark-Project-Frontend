import useAuthService from "../../services/authService.js";

const Home = () => {
  const { logout } = useAuthService();

  const onLogout = () => {
    logout();
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
