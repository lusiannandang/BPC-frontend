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
        if (token != null && id != null) {
          const response = await axios.get(`http://localhost:3000/api/users/${id}/pembayaran`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data === null) {
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

  const getKelas = async () => {
    try {
      if (kelas === null) { 
        const response = await axios.get(`http://localhost:3000/api/users/${id}/kelas`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setKelas(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  const logout = () => {
    setAuthenticated(false);
    setToken(null);
    setRole(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
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
    <AuthContext.Provider value={{ authenticated, setAuthenticated, id, setId, token, setToken, role, setRole, user, setUser, pembayaran, setPembayaran, kelas, setKelas, jumlah, setJumlah, logout, getKelas }}>
      {children}
    </AuthContext.Provider>
  );
};
