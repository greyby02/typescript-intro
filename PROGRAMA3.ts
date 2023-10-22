export {};

class Tarea {
  constructor(public titulo: string, public completada: boolean) {}
}

const listaTareas: Tarea[] = [
  new Tarea("Hacer la compra", false),
  new Tarea("Estudiar TypeScript", true),
  new Tarea("Hacer ejercicio", false),
];

console.log("Lista de tareas:");
listaTareas.forEach((tarea, indice) => {
  const estado = tarea.completada ? "Completada" : "Pendiente";
  console.log(`${indice + 1}. ${tarea.titulo} - ${estado}`);
});