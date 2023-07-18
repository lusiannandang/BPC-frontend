import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuth = () => {
  const { authenticated, setAuthenticated, id, setId, token, setToken, role, setRole, user,setUser, pembayaran, setPembayaran, userData, kelas, setKelas, jumlah, setJumlah, logout, getKelas } = useContext(AuthContext);

  return { authenticated, setAuthenticated, id, setId, token, setToken, role, setRole, user,setUser, pembayaran, setPembayaran, userData, kelas, setKelas, jumlah, setJumlah, logout,getKelas };
};
