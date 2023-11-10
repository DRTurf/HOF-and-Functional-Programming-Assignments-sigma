let dela=3000;
let dela2=3000;
function randonNumberGenerator(){
    const ranDom=Math.floor(Math.random()*100);
    console.log(ranDom);
}
function delay(){
    setInterval(function(){
        if(dela2!=0){
            console.log(`Program starting in ${dela2/1000} sec... `)
            dela2=dela2-1000;
    }
    },1000)
    setTimeout(function(){
        setInterval(randonNumberGenerator,1000)
    },dela);
}
delay();
