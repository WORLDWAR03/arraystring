//The at() method returns an indexed character from a string.

let string = "heyschoobidoobidoo";
let newstri =string.at()
console.log(newstri)

//The charAt() method returns the character at a specified index (position) in a string.

let dumb = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
let pos = dumb.charAt(dumb.length-5)
console.log(pos);

//The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.

let charc = "ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit earum minus iusto amet vero quis rerum impedit qui. Porro, ipsum aperiam. Omnis reiciendis, magni nam nulla dolor magnam enim."

let chare = charc.charCodeAt(11)
console.log(chare);

//The codePointAt() method returns the Unicode value at an index (position) in a string.

let marvel = 'g uardiansofcharCodeAt() is UTF-16, codePointAt() is Unicode';


let galaxy =marvel.codePointAt(1)
console.log(galaxy);




// charCodeAt() is UTF-16, codePointAt() is Unicode.

// charCodeAt() returns a number between 0 and 65535.

// Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//The concat() method joins two or more strings.

let ray = 'part of a line having one fixed point';
let continued = 'does not have an end ';
let conclution = ray.concat(' ',continued);
console.log(conclution);

//The endsWith() method returns true if a string ends with a specified string.

let bruh ='holy moly';
let yo =bruh.endsWith('moly');
console.log(yo);

//The String.fromCharCode() method converts Unicode values to characters.

let text = String.fromCharCode(72, 69, 76, 76, 79);
console.log(text);

//The includes() method returns true if a string contains a specified string.

let drop = 'the world is going to end';
let droped = drop.includes('world')
console.log(droped);

//The indexOf() method returns the position of the first occurrence of a value in a string.
//The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.


let into = 'let`s begin the journey'
let the = into.indexOf('begin')
let world = into.lastIndexOf("journey")
console.log(the);
console.log(world);


//The length property returns the length of a string.

let length = 'be the change that you wish to see in the world'
let gandhi = length.length
console.log(gandhi);

//The localeCompare() method compares two strings in the current locale.

//The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

let you = 'A';
let i = 'A';

let youandi = you.localeCompare(i)
console.log(youandi);

//The match() method matches a string against a regular expression **

//The match() method returns an array with the matches.


let tex = "The rain in SPAIN stays mainly in the plain";
let nex =tex.match(/ain/g);
console.log(nex);

let back = 'the black background brown background';
let to =back.match(/und/g);
console.log(to);

//The padEnd() method pads a string at the end.

//The padEnd() method pads a string with another string (multiple times) until it reaches a given length.

let hendry = 'verna';
let peter = hendry.padEnd(7,"x");
console.log(peter);

//The padStart() method pads a string from the start.

//The padStart() method pads a string with another string (multiple times) until it reaches a given length.

let boom = '7';
let noob =boom.padStart(3,0)
console.log(noob);

//The repeat() method returns a string with a number of copies of a string.

//The repeat() method returns a new string.

let need = "juice for you ";
let want = need.repeat(3)
console.log(want);

//The replace() method searches a string for a value or a regular expression.

//The replace() method returns a new string with the value(s) replaced.


let node = "cycle rally poloru lory rally";
let nop = node.replace(/rally/g,'savari');
console.log(nop);

//The search() method matches a string against a regular expression **

//The search() method returns the index (position) of the first match.


let words = 'be the change you wish to see in the world'
let ords = words.search(/be/i)
console.log(ords);

//The slice() method extracts a part of a string.

//The slice() method returns the extracted part in a new string.

let hook = "evil unchecked grows ,evil tolerated poisons te whole system";
let poll = hook.slice(7,18);
console.log(poll);

//The split() method splits a string into an array of substrings.

//The split() method returns the new array.

let splice = 'How are you doing today?';
let array = splice.split(4,);
console.log(array);

//The startsWith() method returns true if a string starts with a specified string.

let real =splice.startsWith("How");
console.log(real);

//The substr() method extracts a part of a string.

//The substr() method begins at a specified position, and returns a specified number of characters.

// let how = 'the world built up';
// let dop = how.substr(7,9);
// console.log(dop);

//The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

let gloomy ='itsa a gloomy sunday'

let sun = gloomy.substring(0,10);
console.log(sun);

//The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.

let hood = 'im damnd'
// hood.toLocaleLowerCase;
let buy =hood.toLocaleUpperCase();
console.log(buy);

let god =buy.toLowerCase();
console.log(god);

//The toString() method can be used to convert a string object into a string.

let zvkDL = {
    'language' : 'cs',
    'currency' : 'czk',
    'event': 'akurva',
    'ecommerce': {
        'purchase': {
            'actionField': {
                'id': 555,
                'revenue': 535535,
                'shipping': 3535,
            }
        }
    }
}

let mnm = zvkDL.toString();
console.log(mnm);

let vm =mnm.toUpperCase();
console.log(vm);

//The trim() method removes whitespace from both sides of a string.

let rem = 'the whole world waiting for you     ';
let urm = rem.trim();
console.log(urm);

//The trimEnd() method removes whitespace from the end of a string.
//The trimStart() method removes whitespace from the beginning of a string.

//The valueOf() method returns the primitive value of a string.

let end = 'this is the final method';
let atlast = end.valueOf();
console.log(atlast);