// const progress = document.querySelector('.progress-bar')
// const p1 = document.querySelector('.cats')
// const p2 = document.querySelector('.dogs')
// const p3 = document.querySelector('.parrots')
// console.log('%O', progress)
// console.log('%O', progress)

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = message => {
    const p1 = document.querySelector('.cats');
    const p2 = document.querySelector('.dogs');
    const p3 = document.querySelector('.parrots');
    const p4 = document.querySelector('.procCats');
    const p5 = document.querySelector('.procDogs');
    const p6 = document.querySelector('.procParrots');
    const prCats = document.getElementById('cats');
    const prDogs = document.getElementById('dogs');
    const prParrots = document.getElementById('parrots');
    //progress.style.cssText = `width: ${message.data.cats}%;`
    // progress.textContent = `${message.data}%`
    let sum = JSON.parse(message.data).cats + JSON.parse(message.data).dogs + JSON.parse(message.data).parrots
    let procCats = Math.round(JSON.parse(message.data).cats/sum*100);
    let procDogs = Math.round(JSON.parse(message.data).dogs / sum * 100);
    let procParrots = Math.round(JSON.parse(message.data).parrots / sum * 100);
    p1.textContent = `The number of votes for cats - ${JSON.parse(message.data).cats}`
    p2.textContent = `The number of votes for dogs - ${JSON.parse(message.data).dogs}`
    p3.textContent = `The number of votes for parrtos - ${JSON.parse(message.data).parrots}`
    p4.textContent = `The % for cats - ${procCats}%`
    p5.textContent = `The % for dogs - ${procDogs}%`
    p6.textContent = `The % for parrtos - ${procParrots}%`
    prCats.style.cssText = `width: ${procCats}%;`
    // prCats.textContent = `${procCats}%`
    prDogs.style.cssText = `width: ${procDogs}%;`
    // prDogs.textContent = `${procDogs}%`
    prParrots.style.cssText = `width: ${procParrots}%;`
    // prParrots.textContent = `${procParrots}%`
}