export const campos = [
  { name: "nombre", required: true, minLength: 6, maxLength: 40 },
  { name: "descripcion", required: true, minLength: 6, maxLength: 100 },
  //{ name: "precio", required: true, minLength: 6, maxLength: 100 },
  { name: "precio", required: true, type: "number" },
  { name: "categoria_id", required: true, type: "number", minLength: 1, maxLength: 11 },
];
