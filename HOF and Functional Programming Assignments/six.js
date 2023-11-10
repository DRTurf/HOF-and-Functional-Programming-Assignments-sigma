const linkedInRegEx=/http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/ig

const input="https://www.linkedin.com/in/sagnik-tarafder-699988282/"

if(input.match(linkedInRegEx)){
    console.log("Valid Url");
}
else{
    console.log("Invalid Url");
}