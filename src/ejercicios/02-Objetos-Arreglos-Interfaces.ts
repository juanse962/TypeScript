let hola=4;
function mostrar(): string{
    hola = 4;
    return "hola";
}
console.log(mostrar());
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string,
}

const personaje1  :Personaje = {
    nombre: 'Strider',
    hp:100,
    habilidades: ["bash","Counter","Healling"]
}

personaje1.puebloNatal = "Pueblo Paleta"

console.table(personaje1);
