//Using Maps
let names = ["Hubert","Kamrul","Jahirul","Amin","Rakib","Sohel"]

names.map(items=>{
    console.log(`Welcome ${items}`);    
})


//Using Function
function total(x,y){
    console.log(x+y);
}
total(6,7) // The answer will be 13


//Using another loop with functions
let lang = ["JavaScript", "C/C++", "Java", "Python", "Ruby", "Dart"]
function langName(programm){
    console.log(`I love ${programm}`);
}
for(let i=0 ; i<lang.length ; i++){
    langName(lang[i]) 
}