function prepararAreaReservas(req, res, next) {
  res.locals.seccion = "Reservas de salas";
  next();
}

const salasPermitidas = ["Sala Azul", "Sala Verde", "Sala Estudio"];
const turnosPermitidos = ["Mañana", "Tarde", "Noche"];

function validarReserva(req, res, next) {
  const datos = req.body ?? {};

  const estudiante = String(datos.estudiante ?? "").trim();
  const email = String(datos.email ?? "").trim();
  const sala = String(datos.sala ?? "").trim();
  const fecha = String(datos.fecha ?? "").trim();
  const turno = String(datos.turno ?? "").trim();
  const personas = Number(datos.personas);

  const hayError =
    !estudiante ||
    !email.includes("@") ||
    !salasPermitidas.includes(sala) ||
    !fecha ||
    !turnosPermitidos.includes(turno) ||
    !Number.isInteger(personas) ||
    personas < 1 ||
    personas > 6;

  if (hayError) {
    return res.status(400).render("reservas/nueva", {
      titulo: "Nueva reserva",
      error:
        "Revisá los datos: todos los campos son obligatorios y deben ser válidos.",
      valores: datos.body,
    });
  }

  req.reservaValidada = { estudiante, email, sala, fecha, turno, personas };
  next();
}

module.exports = { prepararAreaReservas, validarReserva };
