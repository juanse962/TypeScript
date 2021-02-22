/**
 * ===Codigo TypeScript===
 */

function multiplicar(a: number, b: number,base?: number): number{
    return a + b;
}
interface Personaje2 {
    nombre: string;
    pv: number;
    mostrarHp:() => void;
}


function curar(personaje: Personaje2, curar: number):void {
    personaje.pv += curar
}

const nuevoPersonaje: Personaje2 = {
    nombre:"Pedro",
    pv:100,
    mostrarHp(){
        console.log("Punstos de vida: ",this.pv);
    }
}

nuevoPersonaje.mostrarHp();