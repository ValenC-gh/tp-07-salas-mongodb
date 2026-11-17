const {
  conectarBaseDatos,
  desconectarBaseDatos,
} = require("../src/config/base-datos");

const { Reserva } = require("../src/modelos/reserva");

async function main() {
  try {
    await conectarBaseDatos();

    const nuevaReserva = await Reserva.create({
      estudiante: "Mateo López",
      email: "mateo@ejemplo.com",
      sala: "Sala Norte",
      fecha: "2026-11-20",
      turno: "Tarde",
      personas: 3,
    });

    console.log("Reserva guardada correctamente.");
    console.log("ID:", nuevaReserva._id.toString());
  } finally {
    await desconectarBaseDatos();
  }
}

main().catch((error) => {
  console.error("No se pudo crear la reserva:", error.name);

  if (error.errors) {
    console.error("Campos a revisar:", Object.keys(error.errors).join(", "));
  }

  process.exitCode = 1;
});
