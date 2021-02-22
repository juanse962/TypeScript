/**
    ===Codigo TypeScript===
 */
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: "Juan"
}

const pasajero2: Pasajero = {
    nombre: "Pepe",
    hijos: ["Pedro", "Pablo","Jose"]
}

function imprimeHijos (pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);