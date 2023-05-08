import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard-user/index";
import ProfileUser from "../pages/Dashboard-user/ProfileUser";
import Pengumuman from "../pages/Dashboard-user/Pengumuman";
import Pembayaran from "../pages/Dashboard-user/Pembayaran";
import UploadBayar from "../pages/Dashboard-user/UploadBayar";
import DetailPengumuman from "../pages/Dashboard-user/DetailPengumuman";
import Kuisioner from "../pages/Dashboard-user/Kuisioner"

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/me" element={<ProfileUser />} />
      <Route path="/pengumuman" element={<Pengumuman />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/pembayaran/upload" element={<UploadBayar />} />
      <Route path="/pengumuman/:id" element={<DetailPengumuman />} />
      <Route path="/kuisioner" element={<Kuisioner />} />
    </Routes>
  );
};

export default UserRoutes;
