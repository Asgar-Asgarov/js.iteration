const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
function names (){
    const names = characters.map(character=>character.name)
    // document.getElementById("apple").innerText=names;
    }
names();
//2. Get array of all heights
function heights () {
    const heights = characters.map(character=>character.height)
    // document.getElementById("apple").innerText="Heights of characters :"+heights;
}
heights();
//3. Get array of objects with just name and height properties
function newArr()
{
 const newArrs = characters.map(character=>({name:character.name,height:character.height}))
 }

console.log(newArr());
const newArrs = characters.map(character=>({name:character.name,height:character.height}))
// console.log(newArrs);

//4. Get array of all first names
function firstname()
{
   const firstnames = characters.map(character=>character.name)
    document.getElementById("apple").innerText="Firstname of characters :"+firstnames;
}

function sorting ()
{
    const sortedArr = characters.sort((a,b)=>{if(a.name>b.name) return 1;
    return -1;})
    const sort = sortedArr.map(character=>character.name)
    document.getElementById("apple").innerText="Sorted form of names :"+ sort;
}

// function clear() {
//     document.getElementById("apple").innerText="Choose the proccess"
// }

// document.getElementById("write").addEventListener("click",firstname);
// document.getElementById("sorting").addEventListener("click",sorting);
// document.getElementById("clear").addEventListener("click",clear);
//  const firstname = characters.map(character=>character.name.split(' ')[0])
//  console.log(firstname);

//***REDUCE***
//1. Get total mass of all characters
const totalMass= characters.reduce((acc,cur)=>
{ return acc+cur.mass  },0);
console.log(totalMass);
//2. Get total height of all characters
 const totalHeight = characters.reduce((start,character)=>{
    return start + character.height
 },0);
 console.log(totalHeight);
//3. Get total number of characters by eye color
const numberEye = characters.reduce((num,cur)=>{
    const color = cur.eye_color;    
    if (num[color]) {
        num[color]++;
    }
    else{
        num[color]=1;
    }
  return num;
},{});
console.log(numberEye);
//4. Get total number of characters in all the character names
  const numberOfCharacters = characters.reduce(
    (acc,cur)=>acc+cur.name.length
  ,0);
  console.log(numberOfCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
 const bigMass = characters.filter(character=>(character.mass>100))

//2. Get characters with height less than 200
const littleCharacters = characters.filter(character=>character.height<200)

//3. Get all male characters
const males = characters.filter(character=>character.gender==='male')
// console.log(males);

//4. Get all female characters
const females = characters.filter(character=>character.gender==='female')
// console.log(females);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a,b)=>b.mass-a.mass)
// console.log(byMass);

//2. Sort by height
 const byHeight = characters.sort((a,b)=>b.height-a.height)

 //3. Sort by name
const byName = characters.sort((a,b)=>{if(a.name>b.name) return 1;
return -1; })
// console.log(byName);

//4. Sort by gender
const byGender = characters.sort((character)=>{if(character.gender==='female') return 1;
return -1; })


//***EVERY***
//1. Does every character have blue eyes?
const hasBlue = characters.every(character=>character.eye_color==='blue')
// console.log(hasBlue);

//2. Does every character have mass more than 40?
const isBig = characters.every(character=>character.mass>40)
// console.log(isBig);

//3. Is every character shorter than 200?
const  isShort = characters.every(character=>character.height<200)
// console.log(isShort);

//4. Is every character male?
const isMale = characters.every(character=>character.gender==='male')
// console.log(isMale);

//***SOME***
//1. Is there at least one male character?
const isMales = characters.some(character=>character.gender==='male')
// console.log(isMales);

//2. Is there at least one character with blue eyes?
const isBlueEye = characters.some(character=>character.eye_color==='blue')
// console.log(isBlueEye);

//3. Is there at least one character taller than 210?
const isTall = characters.some(character=>character.height>210)
// console.log(isTall);

//4. Is there at least one character that has mass less than 50?
const hasLight = characters.some(character=>character.mass<50)
// console.log(hasLight);
