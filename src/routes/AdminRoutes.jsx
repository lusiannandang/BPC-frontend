import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard-admin/index";
import Pembayaran from "../pages/Dashboard-admin/Pembayaran";
import Pendaftaran from "../pages/Dashboard-admin/Pendaftaran";
import Pengumuman from "../pages/Dashboard-admin/Pengumuman";
import TambahPengumuman from "../pages/Dashboard-admin/TambahPengumuman";
import TambahUser from "../pages/Dashboard-admin/Tambah";
import EditPengumuman from "../pages/Dashboard-admin/EditPengumuman";
import EditUser from "../pages/Dashboard-admin/EditUser";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:id" element={<EditUser />} />
      <Route path="/pengumuman" element={<Pengumuman />} />
      <Route path="/pengumuman/:id" element={<EditPengumuman />} />
      <Route path="/pengumuman/tambah" element={<TambahPengumuman />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/pendaftaran" element={<Pendaftaran />} />
      <Route path="/tambah" element={<TambahUser />} />
    </Routes>
  );
};

export default AdminRoutes;
