export function menuPageLoad() {
    const head = document.querySelector('head')
    head.innerHTML += `<link rel="stylesheet" href="../style/menu.css">`
    const div = document.createElement('div')
    const elem = document.getElementById('content')
    div.innerHTML = 
    `
    </div>
    <div class='container'>
    <div class='card'> 
        <h2>Margarita</h2>
        <p>Cheese, basil, other pizza stuff</p>
    </div>
    <div class='card'> 
        <h2>Quatro Fomage</h2>
        <p>Artichoke, Mozarella, basil, Tomato sauce</p>
    </div>
    <div class='card'> 
        <h2>Al Fungi</h2>
        <p>All the shrooms, spicy pepperoni, other pizza stuff</p>
    </div>
    </div>`
    elem.innerHTML = ""
    elem.appendChild(div)
}
