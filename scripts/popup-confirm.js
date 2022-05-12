const login = confirm("Do you really wanna login?");
        
        if(login){
            const name = prompt("What is your name?");
            alert(`Welcome ${name}`);
        }
        else{
            alert("Bye bye");
        }