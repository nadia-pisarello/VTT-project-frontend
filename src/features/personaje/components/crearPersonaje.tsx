import { useState } from "react";
import { Alineamiento, type AlineamientoEnum } from "../enums/alineamiento";
import { Clase, type ClaseEnum } from "../enums/clase";
import type { CreatePersonajeDTO } from "../personaje.dto";
import {
  HABILIDADES,
  HABILIDAD_LABEL,
  type HabilidadEnum,
} from "../enums/habilidad";
import { Boton } from "../../../components/boton";

export function CrearPersonaje() {
  const habilidadesIniciales: {
    nombre: HabilidadEnum;
    valor: number;
  }[] = HABILIDADES.map((nombre) => ({
    nombre,
    valor: 0,
  }));
  const agregarEquipo = () => {
    setPersonaje({
      ...personaje,
      equipo: [...personaje.equipo, { nombre: "", cantidad: 1 }],
    });
  };
  const actualizarEquipo = (
    index: number,
    campo: "nombre" | "cantidad",
    valor: string | number,
  ) => {
    const nuevoEquipo = personaje.equipo.map((item, i) =>
      i === index ? { ...item, [campo]: valor } : item,
    );

    setPersonaje({
      ...personaje,
      equipo: nuevoEquipo,
    });
  };

  const eliminarEquipo = (index: number) => {
    const nuevoEquipo = personaje.equipo.filter((_, i) => i !== index);

    setPersonaje({
      ...personaje,
      equipo: nuevoEquipo,
    });
  };

  const [personaje, setPersonaje] = useState<CreatePersonajeDTO>({
    nombre: "",
    alineamiento: Alineamiento.LB as AlineamientoEnum,
    habilidad: habilidadesIniciales,
    clase: Clase.GUERRERO as ClaseEnum,
    raza: "",
    nivel: 1,
    experiencia: 0,
    puntosVida: 0,
    equipo: [],
  });

  const handleCrearPersonaje = () => {
    console.log("Creando personaje:", personaje);

    setPersonaje({
      nombre: "",
      alineamiento: Alineamiento.LB as AlineamientoEnum,
      habilidad: habilidadesIniciales,
      clase: Clase.GUERRERO as ClaseEnum,
      raza: "",
      nivel: 1,
      experiencia: 0,
      puntosVida: 0,
      equipo: [],
    });
  };

  return (
    <div>
      <h2>Creación de Personaje</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCrearPersonaje();
        }}
      >
        {/* Nombre */}
        <input
          value={personaje.nombre}
          onChange={(e) =>
            setPersonaje({ ...personaje, nombre: e.target.value })
          }
          placeholder="Nombre del personaje"
        />
        <br />
        {/* Alineamiento */}
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
            {Object.values(Alineamiento).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <br />
        {/* Habilidades */}
        <label>Habilidades:</label>
        {personaje.habilidad.map((hab) => (
          <div key={hab.nombre}>
            <span>{HABILIDAD_LABEL[hab.nombre]}</span>
            <input
              type="number"
              value={hab.valor}
              onChange={(e) => {
                const nuevas = personaje.habilidad.map((h) =>
                  h.nombre === hab.nombre
                    ? { ...h, valor: Number(e.target.value) }
                    : h,
                );
                setPersonaje({
                  ...personaje,
                  habilidad: nuevas,
                });
              }}
            />
          </div>
        ))}
        <br />
        {/* Clase */}
        <label>
          Clase:
          <select
            value={personaje.clase}
            onChange={(e) =>
              setPersonaje({
                ...personaje,
                clase: e.target.value as ClaseEnum,
              })
            }
          >
            {Object.values(Clase).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <br />
        {/* Raza */}
        <input
          value={personaje.raza}
          onChange={(e) => setPersonaje({ ...personaje, raza: e.target.value })}
          placeholder="Raza del personaje"
        />
        <br />
        {/* Nivel */}
        <label>
          Nivel:
          <input
            type="number"
            value={personaje.nivel}
            onChange={(e) =>
              setPersonaje({
                ...personaje,
                nivel: Number(e.target.value),
              })
            }
          />
        </label>
        <br />
        {/* Experiencia */}
        <label>
          Puntos de experiencia:
          <input
            type="number"
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
        {/* Puntos de Vida */}
        <label>
          Puntos de Vida:
          <input
            type="number"
            value={personaje.puntosVida}
            onChange={(e) =>
              setPersonaje({
                ...personaje,
                puntosVida: Number(e.target.value),
              })
            }
          />
        </label>
        <br />
        {/* Equipo */}
        <label>Equipo:</label>
        {personaje.equipo.map((item, index) => (
          <div key={index}>
            <input
              placeholder="Nombre del objeto"
              value={item.nombre}
              onChange={(e) =>
                actualizarEquipo(index, "nombre", e.target.value)
              }
            />
            <input
              type="number"
              min={1}
              value={item.cantidad}
              onChange={(e) =>
                actualizarEquipo(index, "cantidad", Number(e.target.value))
              }
            />
            <button type="button" onClick={() => eliminarEquipo(index)}>
              Eliminar
            </button>
          </div>
        ))}
        <button type="button" onClick={agregarEquipo}>
          Agregar objeto
        </button>
        <br />
        <Boton type="submit">Crear Personaje</Boton>
      </form>
    </div>
  );
}
