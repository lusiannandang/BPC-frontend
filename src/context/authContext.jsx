import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [kelas, setKelas] = useState(null);
  const [id, setId] = useState(null);
  const [pembayaran, setPembayaran] = useState(null);
  const [jumlah, setJumlah] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    if (storedToken != null && storedRole != null) {
      setAuthenticated(true);
      setToken(storedToken);
      setRole(storedRole);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (id != null && token != null) {
        try {
          const response = await axios.get(`http://localhost:3000/api/user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchUserData();
  }, [id, token]);

  useEffect(() => {
    const fetchPembayaran = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        if (storedToken != null && id != null) {
          const response = await axios.get(`http://localhost:3000/api/users/${id}/pembayaran`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          if (response.data.length === 0) {
            setPembayaran("");
          } else {
            setPembayaran(response.data);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchPembayaran();
  }, [id]);

  useEffect(() => {
    const fetchKelas = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        if (storedToken != null && id != null) {
          const response = await axios.get(`http://localhost:3000/api/users/${id}/kelas`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          setKelas(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchKelas();
  }, [id]);

  useEffect(() => {
    if (kelas && kelas.length > 0) {
      if (kelas[0].nama === 'Pemula') {
        setJumlah(275000);
      } else if (kelas[0].nama === 'Semi Prestasi') {
        setJumlah(300000);
      } else if (kelas[0].nama === 'Prestasi') {
        setJumlah(350000);
      }
    }
  }, [kelas]);

  const logout = () => {
    setAuthenticated(false);
    setToken(null);
    setRole(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  useEffect(() => {
    if (token != null) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  useEffect(() => {
    if (role != null) {
      localStorage.setItem("role", role);
    }
  }, [role]);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, id, setId, token, setToken, role, setRole, user, setUser, pembayaran, setPembayaran, kelas, setKelas, jumlah, setJumlah, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
