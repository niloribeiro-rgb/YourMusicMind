
const cardMusic = document.querySelector(`.cardMusic`)
const musicaChoosed = document.querySelector(`.musicaChoosed`)
const musicsUrl = ["audio/musicaBaixo.mp3",
    "audio/deadcellsMusic2.mp3"]

const musicImage = ["https://img.youtube.com/vi/eteFo483GUs/maxresdefault.jpg",
    "https://img.youtube.com/vi/caM1MxmV3Ps/maxresdefault.jpg"]

trocar(0)
function trocar(index) {
    // alert(index)

    musicaChoosed.innerHTML =
        `<div class="containerControl">
        <div class="musicaChoosedImage" style="background-image: url(${musicImage[index]});">
        </div>
        <audio controls>
            <source src="${musicsUrl[index]}" type="audio/mpeg">
            seu navegador nao suporta o audio
        </audio>
        </div>`
}



// cardMusic.addEventListener('click', () => {
//     let status = false
//     if (status == false) {
//         alert("ola")
//         let musica = new Audio(musicsUrl[1])
//         musica.currentTime = 0
//         musica.play()
//         status = true
//     }
//     if (status == false){

//     }
//     // cardMusic.classList.toggle = 'active'
// })
