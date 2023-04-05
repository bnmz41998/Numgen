function generate_number(){
    let number1 = document.getElementById("range2").value;
    
    let randomnumber = Math.floor(Math.random() * number1 + 1);
    document.getElementById("result").innerHTML = randomnumber;
    return(randomnumber);
    
    


}

