
// The at() method returns an indexed element from an array.
let array =[1,2,3,4,5,6,7,];
let index = array.at(3);
console.log(index);

// The concat() method concatenates (joins) two or more arrays.

let names =['nithin','sarath','john','smitha'];
let more =['shiny','biju'];
let onemore =['sree'];
let merged = names.concat(more,onemore);
console.log(merged)

// The copyWithin() method copies array elements to another position in the array.

const fruits = ["Banana", "thenga", "Apple", "Mango"];
let result = fruits.copyWithin(2,0);
console.log(result);

const newarray =['banana','pineapple','dragonfruit','grape','pomegranate','kiwi'];
const another = newarray.copyWithin(2,0,2);
console.log(another);

// The entries() method returns an Array Iterator object with key/value pairs:

// let entries =['dog','cat','elephant','giraf'];
// let value =entries.entries();

// for (let x of value){
//     document.getElementById("mine").innerHTML += x + "<br>"
// };

// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

let ages = [22,44,55,66,16];
let mm= ages.every(checkage);
console.log(mm);
function checkage(age){
    return  age >= 18;
    
};

// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

let filling = ['juice','coffiee','tea','shake'];
let filled = filling.fill('sarbath',3,4);
console.log(filled);


// The filter() method creates a new array filled with elements that pass a test provided by a function.

let cashes = [44,55,66,77,24,21];
let eligible = cashes.filter(checkCash);
console.log(eligible);
function checkCash(cash){
 return cash >= 25 ;
};

// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

let agee = [3,4,3,18,20,23,234];
let find = agee.find(findOne);
console.log(find);
function findOne(age){
    return age > 20;
}

// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found. 


let num =[22,33,4,5,2,5,]
let newnum =num.findIndex(findIndex)
function findIndex(number){
    return number >25;
}
console.log(newnum)

// The flat() method concatenates sub-array elements.

let arrayy = [[1,2],[3,4],['he','she']]
let arraayy = arrayy.flat()
console.log(arraayy)

// The flatMap() method maps all array elements and creates a new flat array.

// flatMap() creates a new array from calling a function for every array element.

let Arr =[1,2,3,4,5,6,7,8,9,10];
let newArr =Arr.flatMap((x)=> x*2);
console.log(newArr)

// The forEach() method calls a function for each element in an array.

let myArr = [33,43,53,6,64];
myArr.forEach((element,index)=>{console.log(element * index)});


// The Array.from() method returns an array from any object with a length property.

// The Array.from() method returns an array from any iterable object.

let string =`nomoreexcuses`
let strArray = Array.from(string)
console.log(strArray)


// The includes() method returns true if an array contains a specified value.

// The includes() method returns false if the value is not found.

let store = ['mano','pinapple','orange','apple']
let include = store.includes('pinapple',1)
console.log(include)

// The indexOf() method returns the first index (position) of a specified value.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method starts at a specified index and searches from left to right.

let fresh =  ['coconut','tendercoconut','watermelon','passionfruit']
let fresher = fresh.indexOf('coconut',)
console.log(fresher);

// The isArray() method returns true if an object is an array, otherwise false.

let nstring = 'ohmygod'
let itsarray =Array.isArray(nstring)
console.log(itsarray)

// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).

let narry = ['let','it','be','so']
let changed = narry.join(' ')
console.log(changed);

//The keys() method returns an Array Iterator object with the keys of an array.

let frayy =['lembo','ferrary','bugatti','pagani']
let text = frayy.keys()
let keys =''
for(let x of text){

keys += x + "<br>"

     
};
console.log(keys)

// The lastIndexOf() method returns the last index (position) of a specified value.

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() starts at a specified index and searches from right to left.

let engine = ['v6','v8','v10','v12'];
let cylinder =engine.lastIndexOf('v12');
console.log(cylinder);

//The length property sets or returns the number of elements in an array.

let mnum =[2,3,4,5,6,7,8,9,0];
let cnum =mnum.length;
console.log(cnum);

//map() creates a new array from calling a function for every array element.
let setofnumber =[22,4,5,67,889,55,254];
let results =setofnumber.map(Math.sqrt);
console.log(results);

//The pop() method removes (pops) the last element of an array.

let countries = ['india','canada','germany','poland','sudan'];
 countries.pop();
 countries.push('norway','italy');
console.log(countries)

//The reduce() method executes a reducer function for array element.

//The reduce() method returns a single value: the function's accumulated result.

let reducer = [66,78,99,367,99];
let reduced = reducer.reduce((total,num)=>total-num);
console.log(reduced);

// The reduceRight() method executes a reducer function for each array element.

// The reduceRight() method works from right to left.

let right =[44,3,563,35,634,352];
let toleft =right.reduceRight((total,index)=>total/index);
console.log(toleft);

// The reverse() method reverses the order of the elements in an array.

// The reverse() method overwrites the original array.
let backward =[9,8,7,6,5,4,3,2,1];
backward.reverse();
console.log(backward);

// The shift() method removes the first item of an array.
let bold =['stregth','power','ability','iQ']
bold.shift()
console.log(bold);

//The slice() method returns selected elements in an array, as a new array.

let sliced =['banana','smallbanana','bigbanana']
let newslice =sliced.slice(1,3);
console.log(newslice);
//The some() method checks if any array elements pass a test (provided as a callback function).

let chekk =[39,4,34,34,12,34,55];
let heck =chekk.some((age)=>age > 18);

console.log(heck);

//The sort() sorts the elements as strings in alphabetical and ascending order.

let hell = ['bilal','anand','chandan','daniel']
hell.sort()
console.log(hell);

//The splice() method adds and/or removes array elements.

 let splices =['people','will','come','and','go']
 splices.splice(0,1,'let','it','be');
 console.log(splices);
 //The toString() method returns a string with array values separated by commas.

let boom =['hey','let`s','go']
let oomb = boom.toString()
console.log(oomb);

//The unshift() method adds new elements to the beginning of an array.

let eat =['sushi','pepperoni','ramen','pierogi'];
eat.unshift('porotta');
console.log(eat);

//The valueOf() method returns the array itself.

let end =['legends','never','die']
let int =end.valueOf();
console.log(int);