const main = document.querySelector('main')

Places.map( place => {

    card = document.createElement('div')
    card.className = 'placeCard'

    img = document.createElement('img')
    img.src = 'img/' + place.img
    img.style['object-position'] = place.imgPos[0] + '% ' + place.imgPos[1]+'%'

    infodiv = document.createElement('div')
    infodiv.className = 'infoCard'
    
    title = document.createElement('h2')
    title.innerText = place.Nombre

    links = document.createElement('div')
    links.className = 'linksCard'

    mapsSpan = document.createElement('span')

    maps = document.createElement('a')
    maps.innerText = place.Direccion
    maps.href = place.Map_Link

    mapsIcon = document.createElement('i')
    mapsIcon.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>'

    phoneSpan = document.createElement('span')
    phone = document.createElement('a')
    phone.innerText = place.phone
    phone.href = '#'

    phoneIcon = document.createElement('i')
    phoneIcon.innerHTML = '<i class="fa fa-phone" aria-hidden="true"></i>' 
    
    mapsSpan.append(mapsIcon)
    mapsSpan.append(maps)
    phoneSpan.append(phoneIcon)
    phoneSpan.append(phone)

    links.append(mapsSpan, phoneSpan)

    desc = document.createElement('p')
    desc.innerText = place.Descripcion

    infodiv.append(title)
    infodiv.append(links)
    infodiv.append(desc)
    
    card.append(img)
    card.append(infodiv)
    main.append(card)

})

const closeBtn = document.getElementById('modal-btn')
const openLink = document.getElementById('about') 
const modal = document.getElementsByClassName('modal')[0]

openLink.addEventListener('click', () => {
	modal.classList.add('open')
})
closeBtn.addEventListener('click', () => {
	modal.classList.remove('open')
})

