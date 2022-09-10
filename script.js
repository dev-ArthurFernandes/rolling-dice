
function girarDado(){
    min = 1
    max = 7
    return Math.floor(Math.random() * (max - min) + min) 
}

let Numeros = {'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0}

function contadorNumeros(){
    let count = 0

    while(count != 1000){
        let jogada = girarDado() + girarDado()
        if(jogada == 2){
            Numeros['2'] += 1
            count += 1
        }else if(jogada == 3){
            Numeros['3'] += 1
            count += 1
        }else if(jogada == 4){
            Numeros['4'] += 1
            count += 1
        }else if(jogada == 5){
            Numeros['5'] += 1
            count += 1
        }else if(jogada == 6){
            Numeros['6'] += 1
            count += 1
        }else if(jogada == 7){
            Numeros['7'] += 1
            count += 1
        }else if(jogada == 8){
            Numeros['8'] += 1
            count += 1
        }else if(jogada == 9){
            Numeros['9'] += 1
            count += 1
        }else if(jogada == 10){
            Numeros['10'] += 1
            count += 1
        }else if(jogada == 11){
            Numeros['11'] += 1
            count += 1
        }else if(jogada == 12){
            Numeros['12'] += 1
            count += 1
        }
    }
}

// let barra2 = document.getElementById("bar_2")

// barra2.style.width = "100px"
// barra2.style.height = "5px"
// barra2.style.backgroundColor = "green"

// let barra3 = document.getElementById("bar_3")

// barra3.style.width = "100px"
// barra3.style.height = "5px"
// barra3.style.backgroundColor = "green"

// let barra4 = document.getElementById("bar_4")

// barra4.style.width = "100px"
// barra4.style.height = "5px"
// barra4.style.backgroundColor = "green"

// let barra5 = document.getElementById("bar_5")

// barra5.style.width = "100px"
// barra5.style.height = "5px"
// barra5.style.backgroundColor = "green"

// let barra6 = document.getElementById("bar_6")

// barra6.style.width = "100px"
// barra6.style.height = "5px"
// barra6.style.backgroundColor = "green"

// let barra7 = document.getElementById("bar_7")

// barra7.style.width = "100px"
// barra7.style.height = "5px"
// barra7.style.backgroundColor = "green"

// let barra8 = document.getElementById("bar_8")

// barra8.style.width = "100px"
// barra8.style.height = "5px"
// barra8.style.backgroundColor = "green"

// let barra9 = document.getElementById("bar_9")

// barra9.style.width = "100px"
// barra9.style.height = "5px"
// barra9.style.backgroundColor = "green"

// let barra10 = document.getElementById("bar_10")

// barra10.style.width = "100px"
// barra10.style.height = "5px"
// barra10.style.backgroundColor = "green"

// let barra11 = document.getElementById("bar_11")

// barra11.style.width = "100px"
// barra11.style.height = "5px"
// barra11.style.backgroundColor = "green"

// let barra12 = document.getElementById("bar_12")

// barra12.style.width = "100px"
// barra12.style.height = "5px"
// barra12.style.backgroundColor = "green"

