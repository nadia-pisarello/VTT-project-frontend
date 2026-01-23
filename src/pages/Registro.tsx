export function Registro() {
  return (
    <>
      <h1>Registro</h1>
      <form action="">
        <label>
          Nombre de usuario:
          <input type="text" name="nombre" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}
