var nome = document.getElementById('name');
var idade = document.querySelector('input#idade');
var jogos = document.querySelector('input#jogos');
var gols = document.querySelector('input#gols');
var asts = document.querySelector('input#assist');
var table = document.getElementById('tbody')


function teste() {
    var n = String(nome.value)
    var i = Number(idade.value)
    var j = Number(jogos.value)
    var g = Number(gols.value)
    var a = Number(asts.value)
    var mediaPart = ((g + a) / j).toFixed(2)
    var mediaGols = (g/j).toFixed(2)
    let indice = 0
    // res.innerHTML = (`média em gols:${mediaGols} <br> Participações em gols/por jogo ${mediaPart}`)
    
    const row = document.createElement('tr')
    row.setAttribute("id", "e" + indice)
    row.setAttribute("class", "linha")
    
   

    const jogador = document.createElement("td")
    jogador.setAttribute("id","n" + indice)
    jogador.innerHTML = n

    const idad = document.createElement("td")
    idad.setAttribute("id","i" + indice )
    idad.innerHTML = i

    const jog = document.createElement("td")
    jog.setAttribute("id", "j" + indice)
    jog.innerHTML = j

    const gol = document.createElement("td")
    gol.setAttribute("id","g" + indice)
    gol.innerHTML = g

    const ast = document.createElement("td")
    ast.setAttribute("id","a" + indice)
    ast.innerHTML = a

    const mGol = document.createElement("td")
    mGol.setAttribute("id","mg" + indice)
    mGol.innerHTML = mediaGols

    const mPart = document.createElement("td")
    mPart.setAttribute("id","mp" + indice)
    mPart.innerHTML = mediaPart

    row.appendChild(jogador)
    row.appendChild(idad)
    row.appendChild(jog)
    row.appendChild(gol)
    row.appendChild(ast)
    row.appendChild(mGol)
    row.appendChild(mPart)
    

    table.appendChild(row)
    indice ++

    return row

    
}

