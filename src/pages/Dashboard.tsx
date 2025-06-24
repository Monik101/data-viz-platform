import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <p>Welcome to the Data Visualization Platform!</p>
      <button
        onClick={handleSignOut}
        className="mt-4 text-black py-2 px-4 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
