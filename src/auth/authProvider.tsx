import { useState } from "react";
import { AuthService } from "./auth.service";
import type { LoginDTO, UsuarioResponseDTO } from "../usuario/usuario.dto";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<UsuarioResponseDTO | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (data: LoginDTO) => {
    setLoading(true);
    try {
      const { access_token } = await AuthService.login(data);
      localStorage.setItem("token", access_token);
      const perfil = await AuthService.getPerfil();
      setUsuario(perfil);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loading,
        login,
        logout,
        isAuthenticated: !!usuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
