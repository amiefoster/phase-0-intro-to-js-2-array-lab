// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(){
    return [...cats, "Broom"];
}

function prependCat(){
    return ["Arnold", ...cats];
}

function removeLastCat(){
    return cats.slice(0,2) ;
}
function removeFirstCat(){
    return cats.slice(1,3) ;
}