
let string = '';
let buttons = document.querySelectorAll('#btn');

Array.from(buttons).forEach((cal)=>{

    cal.addEventListener('click',(e)=>{

        if(e.target.innerText == '='){
            string = eval(string);
            document.getElementById('txt').value = string;
        }
        else if(e.target.innerText == 'C'){
            string = '';
            document.getElementById('txt').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerText;

        document.getElementById('txt').value = string;
        }
    })
})