
import useAuthentication from "../../additionals/CheckAuth.js";
const Home = () => {
  const { checkAuthentication } = useAuthentication();
  const logout = () => {
    localStorage.removeItem('tokens');
    localStorage.removeItem('userDetails');
    checkAuthentication()
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;