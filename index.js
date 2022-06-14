// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];


function writeCards (names) {
    const msg = [];
    for (let i = 0; i < names.length; i++) {
        msg[i] = (`Thank you, ${names[i]}, for the wonderful surprise gift!`); 
        
    }

    return msg;
}

writeCards(names);



function countDown (param) {
    let i = 0;
    let b = param;

    while (i <= param) {
        console.log(b);
        b--;
        i++; 
      }
    
      return param;
    }
    
    countDown(param);




