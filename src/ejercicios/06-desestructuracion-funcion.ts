/**
 * ===Codigo TypeScript===
 */
export interface Producto {
    desc: string,
    precio:number
}


const telefono: Producto = {
    desc: "Nokia",
    precio: 170
}

const tablet: Producto = {
    desc: "iPad Air",
    precio: 370
}
//Calcula Impuesto sobre las ventas
export function calculaISV(productos: Producto[]): [number,number]{
    let total = 0;
    productos.forEach( ({ precio }) =>{
        total += precio;
    })
    return [total,total * 0.15];
}

// const articulos = [ telefono, tablet ];
// const [total, isv] = calculaISV(articulos);

// console.log("ISV:",isv);
// console.log("Total :",total);