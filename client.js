//Array
  let gem1 = "Jade";
  let gem2 = "Onyx";
  let gem3 = "Malachite"; 
  let gem4 = "ruby";
  const gems = ["Jade", "Onyx", "Malachite"];

//Add to an array using the .push()
  gems.push("ruby", "Pearl");
  document.querySelector("#push").innerHTML = gems[3];
  console.log(gems[3]);
// Result: [ 'Jade', 'Onyx', 'Malachite', 'ruby', 'Pearl' ] 

//Remove from an array using the .pop()
  gems.pop("Pearl");
  document.querySelector("#pop").innerHTML = gems.pop("Pearl");
// Result: [ 'Jade', 'Onyx', 'Malachite', 'ruby' ] (removed the pearl)

//Verify if elements exist in an array with .includes()
  gems.includes("Malachite");
  document.querySelector("#includes").innerHTML = gems.includes("Malachite");
// Result: true

//Objects
  const dragon = {
    firstName:"Healsy", 
    species:"Dragon", 
    age:100, 
    eyeColor:"sapphire"
  };
// Result: "firstName:'Healsy', species:'Dragon', age:100, eyeColor:'sapphire'

  //Create a nested array from your object by using Object.entries()
  Object.entries(dragon)
  document.querySelector("#nested").innerHTML = dragon.firstName + "," + dragon.species + "," + dragon.age + "," + dragon.eyeColor;;

  //Create a new object with the new Object() syntax
  const bird = new Object({
    firstName:"Chip", 
    species:"Parrot", 
    age:10, 
    eyeColor:"Lime"
  });
  //Output: firstName: 'Chip', species: 'Parrot', age: 10, eyeColor: 'Lime'
  document.querySelector("#new").innerHTML = bird.firstName + "," + bird.species + "," + bird.age + "," + bird.eyeColor;

  //Create and log an array of all the keys of your object with Object.keys()
  document.querySelector("#keys").innerHTML = Object.keys(dragon);
  dragon = {
    firstName:"Healsy", 
    species:"Dragon", 
    age:100, 
    eyeColor:"sapphire"
  };
  Object.keys(dragon)
  // Result: 'firstName', 'species', 'age', 'eyeColor'