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
    id: string;
    nombre: string;
    email: string;
}
