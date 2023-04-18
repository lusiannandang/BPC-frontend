import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardUser from "./pages/Dashboard-user/index";
import DashboardAdmin from "./pages/Dashboard-admin/index";
import DashboardUserPengumuman from "./pages/Dashboard-user/Pengumuman";
import TambahPengumuman from "./pages/Dashboard-admin/TambahPengumuman";
import DashboardUserPembayaran from "./pages/Dashboard-user/Pembayaran";
import ProfileUser from "./pages/Dashboard-user/ProfileUser"
import Navbar from "./components/Navbar";
import DashboardAdminPengumuman from "./pages/Dashboard-admin/Pengumuman";
import DashboardAdminPendaftaran from "./pages/Dashboard-admin/Pendaftaran";
import DashboardAdminPembayaran from "./pages/Dashboard-admin/Pembayaran";
import DetailPengumuman from "./pages/Dashboard-user/DetailPengumuman";
import UploadBayar from "./pages/Dashboard-user/UploadBayar";
import Kuisioner from "./pages/Kuisioner"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<DashboardUser />} />
        <Route path="/user/me" element={<ProfileUser />} />
        <Route path="/user/pengumuman" element={<DashboardUserPengumuman />} />
        <Route path="/user/pembayaran" element={<DashboardUserPembayaran />} />
        <Route path="/user/pembayaran/upload" element={<UploadBayar />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/admin/pendaftaran" element={<DashboardAdminPendaftaran />} />
        <Route path="/admin/pengumuman" element={<DashboardAdminPengumuman />} />
        <Route path="/admin/pengumuman/tambah" element={<TambahPengumuman />} />
        <Route path="/user/pengumuman/:id" element={<DetailPengumuman />} />
        <Route path="/admin/pembayaran" element={<DashboardAdminPembayaran />} />
        <Route path="/kuisioner" element={<Kuisioner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
