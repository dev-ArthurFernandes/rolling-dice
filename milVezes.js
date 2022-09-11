
function girarDado1_2(){
    min = Math.ceil(1);
    max = Math.floor(7);
    let valor = Math.floor(Math.random() * (max - min) + min)
    document.querySelector(".img1_2").src = `Dado/Dado${valor}.png`
    return valor;
}

function girarDado2_2(){
    min = Math.ceil(1);
    max = Math.floor(7);
    let valor = Math.floor(Math.random() * (max - min) + min)
    document.querySelector(".img2_2").src = `Dado/Dado${valor}.png`
    return valor;
}

let Numeros2 = {'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0}


function girandoMilVezes(){
    let count = 0
    while(count <= 1000){
        let jogada = girarDado1_2() + girarDado2_2()
        document.getElementById("jogadas2").innerHTML = count
        if(jogada == 2){
            Numeros2['2'] += 1
            count += 1
        }else if(jogada == 3){
            Numeros2['3'] += 1
            count += 1
        }else if(jogada == 4){
            Numeros2['4'] += 1
            count += 1
        }else if(jogada == 5){
            Numeros2['5'] += 1
            count += 1
        }else if(jogada == 6){
            Numeros2['6'] += 1
            count += 1
        }else if(jogada == 7){
            Numeros2['7'] += 1
            count += 1
        }else if(jogada == 8){
            Numeros2['8'] += 1
            count += 1
        }else if(jogada == 9){
            Numeros2['9'] += 1
            count += 1
        }else if(jogada == 10){
            Numeros2['10'] += 1
            count += 1
        }else if(jogada == 11){
            Numeros2['11'] += 1
            count += 1
        }else if(jogada == 12){
            Numeros2['12'] += 1
            count += 1
        }
    }
}


function makeInfo2(dic){
    
    let jogada2                 = document.querySelector('.jogada2')

    let info2                   = document.createElement('div')

    info2.className             = "info2"
    
    for(keys in dic){
        

        let barra                   = document.createElement('div')

        barra.className             = `info2 bar_${keys}`
        barra.style.width           = `${dic[keys]}px`
        barra.style.height          = "20px"
        barra.style.backgroundColor = "green"
        barra.innerHTML             = `${dic[keys]}`

        let tagDiv                  = document.createElement("div")
        let tagP                    = document.createElement("p")
        
        tagDiv.className            = `info2_num ${keys}`
        tagP.innerHTML              = `${keys}: `

        tagDiv.append(tagP, barra)
        info2.appendChild(tagDiv)
    }

    jogada2.appendChild(info2)

}

let validador2 = false

function refreshInfo2(){
    if(validador2){
        document.querySelector('.info2').remove()
        Numeros2 = {'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0}
        validador = false
    }else{
        return false
    }
}


let button2 = document.getElementById('jogarDadoMilVezes')

function jogarDado2(){
    refreshInfo2()
    girandoMilVezes()
    makeInfo2(Numeros2)
    validador2 = true
}

button2.addEventListener('click', jogarDado2)