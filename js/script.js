//Using Maps
let names = ["Hubert","Kamrul","Jahirul","Amin","Rakib","Sohel"]

names.map(items=>{
    console.log(`Welcome ${items}`);    
})

//Anoter use of Loops
let animals = ["Dog","Cat","Cow","Horse","Monkey","Elephant"]
for(let i=1 ; i<animals.length ; i++){
    console.log(`I love ${animals[1]}`);
    
}

//Using Function
function total(x,y){
    console.log(x+y);
}
total(6,7) // The answer will be 13

//Another way to call the function
function total2(){
    let a = 8
    let b = 9
    console.log(a+b);
}
total2() // The answer will be 17


//Using another loop with functions
let lang = ["JavaScript", "C/C++", "Java", "Python", "Ruby", "Dart"]
function langName(programm){
    console.log(`I love ${programm}`);
}
for(let i=0 ; i<lang.length ; i++){
    langName(lang[i]) 
}