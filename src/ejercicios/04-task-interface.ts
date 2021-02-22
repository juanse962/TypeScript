/**
 * ===Codigo TypeScript===
 */
interface SuperHeroe {
    name: string;
    edad: number;
    direccion:Direccion
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string
}

const superHeroe: SuperHeroe = {
    name: "Spiderman",
    edad: 30,
    direccion:{
        calle: "Main SL",
        pais: "Main SL",
        ciudad: "NY"
    },
    mostrarDireccion(){
        return this.name + ", " + this.edad + ",  " + this.direccion.pais +", "+ this.direccion.ciudad +", "+ this.direccion.calle;
    }
}
console.log(superHeroe.mostrarDireccion());