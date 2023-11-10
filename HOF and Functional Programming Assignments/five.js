const urlValidationEx=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig 

const input="https://pw-skills.com/";
    
if(input.match(urlValidationEx)){
    console.log("Valid Url");
}
else{
    console.log("Invalid Url");
}