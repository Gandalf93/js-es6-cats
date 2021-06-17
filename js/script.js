// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

const gatti = [
    {
        nome: 'Shiro',
        eta: 9,
        colore: ' #774127',
        sesso: 'female'
    },
    {
        nome: 'Porthos',
        eta: 8,
        colore: '#000000',
        sesso: 'male'
    },
    {
        nome: 'Clementina',
        eta: 7,
        colore: '#77787A',
        sesso: 'female'
    },
    {
        nome: 'Gigio',
        eta: 2,
        colore: '#EBCCB6',
        sesso: 'male'
    },
    {
        nome: 'Penny',
        eta: 8,
        colore: '#E87801' ,
        sesso: 'female'
    },
];
   
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
gatti.forEach((element) => {
    document.getElementById("container").innerHTML += `
    ${element.nome} <i class="fas fa-cat" style="color:${element.colore}"></i>
    `;
    //  console.log(`
    //  ${element.nome}'s color is ${element.colore}
    //  `);
});
        
 