// Garante q a aplicação não exceda o tamanho do browser do usuario

//Para debugar
function cp(one, two, three)
{
    console.log(one + '-' + two + '-' + three)
}

// ------------------------------------------------

// ------------------------------------
var dificult = window.location.search
dificult = dificult.replace('?','')
// alert(dificult)
// ------------------------------------
// ------------------------------------
var height = 0
var widht = 0
var hit = 0
var counter = 0
var time = 0
// ------------------------------------

// De acordo com o nivel de dificuldade as moscas spawnam mais rapido pelo counter
switch(dificult)
{
    case 'normal': 
    time = 20
    counter = 3000
    break

    case 'hard':
    time = 80
    counter = 2000
    break    

    case 'hardcore':
    time = 120
    counter = 1000
    break
}
// ------------------------------------
// Ajeita o tamanho da tela em tempo real
function adjustSize()
{
    height = window.innerHeight
    widht = window.innerWidth
    // console.log(height + '-' + widht)
}

adjustSize()
// ------------------------------------

// A cada 1 segundo decrementa 1 no temporizador
var countTime = setInterval(function()
{   
    time -= 1
    document.getElementById('timer').innerHTML = time

    if(time <= 0)
    {
        window.location.href = "winGame.html"
    }
}, 1000)

// tickTack é um countador em ticks pra atualizar a função do jogo, parecido com a unity as unitys
var tickTack = setInterval(function instantiateGnat()
{
    // verifica se nao existe um mosquito ja pre-existente 
    
    if(document.getElementById('gnat'))
    {
        document.getElementById('gnat').remove()
        hit += 1

        // ativa o sistema de hits
        switch(hit)
        {
            case 1: document.getElementById('v1').src = "images/coracao_vazio.png"
            break
            case 2: document.getElementById('v2').src = "images/coracao_vazio.png"
            break
            case 3: document.getElementById('v3').src = "images/coracao_vazio.png"
            break
        }

        console.log(hit)

        if(hit > 3)
        {
            window.location.href = "endGame.html"
        }
    }
    
    function randomClass()
    {
        var pickOne = Math.floor(Math.random()*3) + 1
        return pickOne
    }
    // Calculo randomizador da posição da mosca
    var posX = Math.floor(Math.random() * height) - 120
    var posY = Math.floor(Math.random() * widht) - 120

    // Evita possiveis bugs de sumir a mosca
    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY
    
    // Criação da instanciação de imagens
    var gnat = document.createElement('img')
    gnat.src = 'images/mosca.png'

    switch(randomClass())
    {
        case 1: gnat.className = 'gnat' 
        break
        case 2: gnat.className = 'gnat2' 
        break
        case 3: gnat.className = 'gnat3' 
        break

        // Controla bugs
        default: gnat.className = 'gnat'
        console.log('default')
    }

    function flipImage()
    {
        // verifica se flipa a imagem
        if(Math.random() >= 0.5)
        {
            gnat.style.transform = 'scaleX(-1)'
        }
    }

    flipImage()

    gnat.style.top = posX + 'px'
    gnat.style.left = posY + 'px'
    gnat.style.position = 'absolute'
    gnat.id = 'gnat'
    gnat.onclick = function()
    {
        this.remove()
    }

    // Debugger
    // console.log(posX)
    // console.log(posY)
    
    document.body.appendChild(gnat)
}, counter)



