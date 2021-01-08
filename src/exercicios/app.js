
/*
  01
  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const getOddNumbers = (number) => {
  if(number % 2 != 0){
    return number
  }
}

const removeUndefinedValues = (item => item !== undefined) 

const oddNumbers = randomNumbers.map(getOddNumbers)
const oddNumberOnly = oddNumbers.filter(removeUndefinedValues)

console.log('Exercise 1\n',oddNumberOnly)

/*
  02
  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const limit = 501
const getNumbersBellowLimit = (number => number < limit)
const getCountNumbersInArray = (accumulator) => {
  return accumulator += 1
}

const NumbersBellowLimit = crazyNumbers.filter(getNumbersBellowLimit)
const countNumbersBellowLimit = NumbersBellowLimit.reduce(getCountNumbersInArray,0)

console.log('\nExercise 2\n',countNumbersBellowLimit)

/*
  03
  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/

const numbers = [5, 7, 3]

const getNumbersSquared = (number) => {
  return number * number
}

const NumbersSquared = numbers.map(getNumbersSquared)

console.log('\nExercise 3\n',NumbersSquared)

/*
  04
  - Utilizando o array abaixo, gere um novo array com apenas os filmes lançados 
    antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const limitRelease = 2000
const getMoviesBellowLimitRelease = (movie => movie.release < limitRelease)

const MoviesBellowLimitRelease = tarantinoMovies.filter(getMoviesBellowLimitRelease)

console.log('\nExercise 4\n',MoviesBellowLimitRelease)


/*
  05
  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const property = 'name'
const getOnlyNameProperty = (show) => {
  return show.name
}

const nameTvShows = tvShows.map(getOnlyNameProperty)

console.log('\nExercise 5\n',nameTvShows)

/*
  06
  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const carts = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const getCartsName = (cart) => {
  return cart.name
}

const getCartsNameFormatted = (accumulator,cartName) => {
  return `${accumulator} - ${cartName}\n`
}

const CartsName = carts.map(getCartsName)
const CartsNameFormatted = CartsName.reduce(getCartsNameFormatted,'\n')

console.log('\nExercise 6\n',CartsNameFormatted)

/*
  - Nome 1
  - Nome 2
  - Nome 3
*/