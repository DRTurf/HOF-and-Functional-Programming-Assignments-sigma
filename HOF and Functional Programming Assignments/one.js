const input="Sagnik Tarafder";
let revInput="";
function revString(input) {
    for (let i=input.length-1; i>=0; i--) {
        revInput+=input.charAt(i);        
    }
    return revInput;
}
function delay(input){
    setTimeout(function(){
        console.log(revString(input));
    },2000)
}

delay(input);

