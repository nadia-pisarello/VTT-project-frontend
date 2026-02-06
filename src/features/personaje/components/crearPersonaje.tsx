import { useState } from "react";
import { Boton } from "../../../components/boton";
import { Alineamiento, type AlineamientoEnum } from "../enums/alineamiento";
import { Clase, type ClaseEnum } from "../enums/clase";
import type { HabilidadEnum } from "../enums/habilidad";
import type { CreatePersonajeDTO } from "../personaje.dto";

export function CrearPersonaje() {
  const [personaje, setPersonaje] = useState({
    nombre: "",
    alineamiento: "",
    habilidad: [],
    clase: "",
    raza: "",
    nivel: 0,
    experiencia: 0,
    puntosVida: 0,
    equipo: [],
  });
  const handleCrearPersonaje = async () => {
    const nuevoPersonaje: CreatePersonajeDTO = {
      nombre: personaje.nombre,
      alineamiento: personaje.alineamiento as AlineamientoEnum,
      habilidad: personaje.habilidad as {
        nombre: HabilidadEnum;
        valor: number;
      }[],
      clase: personaje.clase as ClaseEnum,
      raza: personaje.raza,
      nivel: personaje.nivel,
      experiencia: personaje.experiencia,
      puntosVida: personaje.puntosVida,
      equipo: personaje.equipo,
    };
    setPersonaje({
      nombre: "",
      alineamiento: "",
      habilidad: [],
      clase: "",
      raza: "",
      nivel: 0,
      experiencia: 0,
      puntosVida: 0,
      equipo: [],
    });
    console.log("Creando personaje:", nuevoPersonaje);
  };
  return (
    <div>
      <h2>Crear Personaje</h2>

      <form>
        <input
          value={personaje.nombre}
          onChange={(e) =>
            setPersonaje({ ...personaje, nombre: e.target.value })
          }
          placeholder="Nombre del personaje"
        />
        <br />
        <label>
          Alineamiento:
          <select
            value={personaje.alineamiento}
            onChange={(e) =>
              setPersonaje({
                ...personaje,
                alineamiento: e.target.value as AlineamientoEnum,
              })
            }
          >
            <option value={Alineamiento.LB}>Legal Bueno</option>
            <option value={Alineamiento.LN}>Legal Neutral</option>
            <option value={Alineamiento.LM}>Legal Malvado</option>
          </select>
        </label>
        <br />
        <label>
          Habilidades:
          <input
            type="text"
            name="habilidades"
            placeholder="Ej: Fuerza 10, Destreza 8"
          />
        </label>
        <br />
        <label>
          Clase:
          <select
            value={personaje.clase}
            onChange={(e) =>
              setPersonaje({ ...personaje, clase: e.target.value as ClaseEnum })
            }
          >
            <option value={Clase.GUERRERO}>Guerrero</option>
            <option value={Clase.MAGO}>Mago</option>
            <option value={Clase.BRIBÓN}>Bribón</option>
          </select>
        </label>
        <br />
        <input
          value={personaje.raza}
          onChange={(e) => setPersonaje({ ...personaje, raza: e.target.value })}
          placeholder="Raza del personaje"
        />
        <br />
        <label>
          Nivel:
          <input
            value={personaje.nivel}
            onChange={(e) =>
              setPersonaje({ ...personaje, nivel: Number(e.target.value) })
            }
          />
        </label>
        <br />
        <label>
          Puntos de experiencia:
          <input
            value={personaje.experiencia}
            onChange={(e) =>
              setPersonaje({
                ...personaje,
                experiencia: Number(e.target.value),
              })
            }
          />
        </label>
        <br />
        <label>
          Puntos de Vida:
          <input
            value={personaje.puntosVida}
            onChange={(e) =>
              setPersonaje({ ...personaje, puntosVida: Number(e.target.value) })
            }
          />
        </label>
        <br />
        <label>
          Equipo:
          <input
            value={personaje.equipo}
            onChange={(e) =>
              setPersonaje({ ...personaje, equipo: e.target.value })
            }
            placeholder="Ej: Espada, Escudo, Poción"
          />
        </label>
        <br />
        <Boton
          onClick={handleCrearPersonaje}
          disabled={!personaje.nombre.trim()}
        >
          Crear Personaje
        </Boton>
      </form>
    </div>
  );
}
