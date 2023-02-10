let chave = "1fc5483ec9c8c77c17d31a548f68acc5"

function colocarnatela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade " + Math.floor(dados.main.humidity) + "%"
}


async function buscarcidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarnatela(dados)

}

function cliquei(){
    let cidade = document.querySelector(".cidade-digitada").value

    buscarcidade(cidade)

}












