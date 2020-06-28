/**
* Created by franck.lynn on 2019-06-12.
* franck_lynn@live.cn
*/
var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

// var dogs = []
// for(var i = 0; i < animals.length; i++){
//     if(animals[i].species === 'dog'){
//         dogs.push(animals[i])
//     }
// }
// console.log(dogs)

var dogs = animals.filter(animal => {
    return animal.species === 'dog'
})
console.log(dogs)