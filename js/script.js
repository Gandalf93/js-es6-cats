// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

const cats = [
    {
        name: 'Shiro',
        age: 9,
        color: ' #774127',
        gender: 'female'
    },
    {
        name: 'Porthos',
        age: 8,
        color: '#000000',
        gender: 'male'
    },
    {
        name: 'Clementina',
        age: 7,
        color: '#77787A',
        gender: 'female'
    },
    {
        name: 'Gigio',
        age: 2,
        color: '#EBCCB6',
        gender: 'male'
    },
    {
        name: 'Penny',
        age: 8,
        color: '#E87801' ,
        gender: 'female'
    },
];
   

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
cats.forEach((element) => {
    document.getElementById("container").innerHTML += `
    ${element.name} <i class="fas fa-cat" style="color:${element.color}"></i>
    `;
});
    

// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.


const pink = "#E15D8A";
const blue = "#211CBB";

const newCats = cats.map((element) => {
    const{name, age, color, gender} = element;
    
     let ribbonColor = blue;
     if(gender == "female"){
         ribbonColor = pink;
     }

     const opacity = element.age / 9;

     return {
        name,
        age,
        color,
        gender,
        ribbon : {
            color: ribbonColor,
            opacity: opacity
        }
    }

    });


// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
        
   
   
        const maleCats = newCats.filter((element) => {
           return element.gender === "male";
       });
       document.getElementById("container").innerHTML += "<br/><br/>Maschi";
       maleCats.forEach((element) => {
           
           document.getElementById("container").innerHTML += `<br/><br/>
               ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
               <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
           
           `;
    });
       
       
       const femaleCats = newCats.filter((element) => {
           return element.gender === "female";
       });
       document.getElementById("container").innerHTML += "<br/><br/>Femmine";
       femaleCats.forEach((element) => {
           
           document.getElementById("container").innerHTML += `<br/><br/>
               ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
               <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
           
           `;
    });
   
   
    
   // Creare un nuovo array con prima tutti i gattini femmina 
   // e poi tutti i gattini maschio, 
   let catsFemaleMale = [...femaleCats, ...maleCats];
   // inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
   const catsFemaleMaleZip = catsFemaleMale.map((element) => {
      const {name, color, ribbon} = element;
   
      return {
           name,
           color,
           ribbon
      } 
   });
   
   
   console.log(catsFemaleMaleZip);





