
const cardMusic = document.querySelector(`.cardMusic`)
const musicaChoosed = document.querySelector(`.musicaChoosed`)
const musicsUrl = ["audio/deadcellsMusic2.mp3", "audio/musicaBaixo.mp3"]

const musicImage = ["https://img.youtube.com/vi/eteFo483GUs/maxresdefault.jpg",
     "https://img.youtube.com/vi/caM1MxmV3Ps/maxresdefault.jpg"]


function trocar(index) {
    alert("ola")
    musicaChoosed.innerHTML = `<div class="musicaChoosedImage" style="background-image: url(${musicImage(index)});">`
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
})

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
