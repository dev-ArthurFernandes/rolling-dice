function girarDado1_1(){
    min = Math.ceil(1);
    max = Math.floor(7);
    let valor = Math.floor(Math.random() * (max - min) + min)
    document.querySelector(".img1_1").src = `Dado/Dado${valor}.png`
    return valor;
}

function girarDado2_1(){
    min = Math.ceil(1);
    max = Math.floor(7);
    let valor = Math.floor(Math.random() * (max - min) + min)
    document.querySelector(".img2_1").src = `Dado/Dado${valor}.png`
    return valor;
}

let contador = 0

let Numeros1 = {'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0}

function girandoUmaVez(){
    let jogada = girarDado1_1() + girarDado2_1()
    if(jogada == 2){
        Numeros1['2'] += 1
    }else if(jogada == 3){
        Numeros1['3'] += 1
    }else if(jogada == 4){
        Numeros1['4'] += 1
    }else if(jogada == 5){
        Numeros1['5'] += 1
    }else if(jogada == 6){
        Numeros1['6'] += 1
    }else if(jogada == 7){
        Numeros1['7'] += 1
    }else if(jogada == 8){
        Numeros1['8'] += 1
    }else if(jogada == 9){
        Numeros1['9'] += 1
    }else if(jogada == 10){
        Numeros1['10'] += 1
    }else if(jogada == 11){
        Numeros1['11'] += 1
    }else if(jogada == 12){
        Numeros1['12'] += 1
    }
}


function makeInfo1(dic){
    let jogada1                 = document.querySelector('.jogada1')

    let info1                   = document.createElement('div')

    info1.className             = "info1"
    
    for(keys in dic){
    
        let barra                   = document.createElement('div')

        barra.className             = `info1 bar_${keys}`
        barra.style.width           = `${dic[keys] * 10}px`
        barra.style.height          = "20px"
        barra.style.backgroundColor = "green"
        barra.innerHTML             = `${dic[keys]}`
    
        let tagDiv                  = document.createElement("div")
        let tagP                    = document.createElement("p")
        
        tagDiv.className            = `info1_num ${keys}`
        tagP.innerHTML              = `${keys}: `

        tagDiv.append(tagP, barra)
        info1.appendChild(tagDiv)
    }

    jogada1.appendChild(info1)
}

let validador1 = false

function refreshInfo1(){
    if(validador1){
        document.querySelector('.info1').remove()
        validador = false
    }else{
        return false
    }
}

let button1 = document.getElementById('jogarDadoUmaVez')

function jogarDado1(){
    refreshInfo1()
    girandoUmaVez()
    makeInfo1(Numeros1)
    validador1 = true
    contador += 1
    document.getElementById("jogadas1").innerHTML = contador
}

button1.addEventListener('click', jogarDado1)
