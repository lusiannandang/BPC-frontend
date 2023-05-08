import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil token dan role dari local storage atau context
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // Jika token atau role tidak ada, arahkan pengguna ke halaman login
    if (!token || !role) {
      navigate("/login");
    }

    // Cek role pengguna dan arahkan ke halaman sesuai dengan rolenya
    if (role === "ADMIN") {
      navigate("/admin");
    } else if (role === "USER") {
      navigate("/user");
    }
  }, [navigate]);

  return (
    <div>
      {/* Tampilkan halaman dashboard */}
    </div>
  );
};

export default Dashboard;