///TODO---------------------------------------------> EJERCICIO---------------------

// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

//! 1) filtra los videojuegos por gender = 'RPG' usando  .filter()

const rpgGames = videogames.filter((game, index) =>
  game.genders.includes("RPG")
);
console.log("🚀 ~ file: app.js:26 ~ rpgGames:", rpgGames);

//! 2) Usa reduce para sacar la media de sus escore
const suma = rpgGames.reduce((acc, game) => acc + game.score, 0);
console.log("🚀 ~ file: app.js:30 ~ suma:", suma);

//! 3) media aritmetica (suma de elementos dividido entre el numero de elementos)
const media = suma / rpgGames.length;
console.log("🚀 ~ file: app.js:34 ~ media:", media);

//! -------------> FORMA MAS HABITUAL Y COMPLEJA

const total = videogames
  .filter((game, item) => game.genders.includes("RPG"))
  .reduce(
    (acc, game) => ({
      ...acc,
      totalScore: game.score + acc.totalScore,
      counter: acc.counter + 1,
    }),

    { totalScore: 0, counter: 0 }
  );

const mediaReduce = total.totalScore / total.counter;
console.log("🚀 ~ file: app.js:50 ~ mediaReduce:", mediaReduce);
