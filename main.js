console.log('Guns Being Replaced')

smallUrl = chrome.extension.getURL('/images/32x32.png')
bigUrl = chrome.extension.getURL('/images/128x128.png')

function getImagesByAlt() {
    var images = document.querySelectorAll("[alt='🔫']")
    return images
}

let getGunDiv = () => {
    var divs = document.querySelectorAll("[aria-label='🔫']")
    return divs
}

let getLikeImg = () => {
    var send = document.querySelectorAll("[aria-label='Send a Like']")
    return send
}

setInterval(() => {


    let imgGun = getImagesByAlt()
    // console.log(imgGun)

    let divGun = getGunDiv()
    // console.log(divGun)

    // let sendALike = getLikeImg()
    // console.log(sendALike)


    let check = ((imgGun.length === 0) && (divGun.length === 0))
    // console.log(`check is ${check}`)

    if (!check) {

        let i
        for (i = 0; i < imgGun.length; i++) {
            imgGun[i].src = smallUrl
            imgGun[i].alt = 'OLDGUN'
            // console.log('changed a small img src')
        }


        for (i = 0; i < divGun.length; i++) {
            divGun[i].children[0].src = bigUrl
            divGun[i].setAttribute('aria-label', 'OLDGUN')
            // console.log('changed a big img src')
        }


        // if (!(sendALike.length === 0)) {
        //     sendALike[0].children[0].src = smallUrl
        //     sendALike[0].setAttribute('aria-label', 'Send a Like!')
        // }

    } else {
        // console.log('no guns to change')
    }

}, 300)