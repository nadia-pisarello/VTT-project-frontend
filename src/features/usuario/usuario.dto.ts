export interface CreateUsuarioDTO {
    nombre: string;
    email: string;
    password: string;
}

export interface UpdateUsuarioDTO {
    nombre?: string;
    email?: string;
    password?: string;
}

export interface UsuarioResponseDTO {
    id: number;
    nombre: string;
    email: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface LoginResponseDTO {
    access_token: string;
}