export function firstPageLoad() {
    const head = document.querySelector('head')
    head.innerHTML += `<link rel="stylesheet" href="../style/style.css">` 
    const elem = document.getElementById('content')
    const body = document.querySelector('body')
    body.innerHTML = 
    `<ul>
        <li class='home'>Amoreemb Pizzz</li>
        <li class='menu'>Menu</li>
        <li class='contact'>Contact Us</li>
    </ul>`
    elem.innerHTML = 
    `
    <img src="../images/topoutdoorpizzaovens.png" alt="pizza in oven">
    <div class="text">
        <h2>Amoreemb Pizzzz best pizza in town</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa <br> tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime <br> molestiae ipsum repellendus ullam! Similique, ut quo.</p>
    </div>`
    body.appendChild(elem)
}

export function homePageLoad() {
    const style = document.querySelector('link')
    style.innerHTML = `<link rel="stylesheet" href="../style/style.css">` 
    const elem = document.getElementById('content')
    const body = document.querySelector('body')
    elem.innerHTML = 
    `
    <img src="../images/topoutdoorpizzaovens.png" alt="pizza in oven">
    <div class="text">
        <h2>Amoreemb Pizzzz best pizza in town</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa <br> tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime <br> molestiae ipsum repellendus ullam! Similique, ut quo.</p>
    </div>`
    body.appendChild(elem)
}