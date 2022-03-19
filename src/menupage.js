export function menuPageLoad() {
    const style = document.querySelector('link')
    style.innerHTML = `<link rel="stylesheet" href="../style/menu.css">`
    const elem = document.getElementById('content')
    elem.innerHTML = 
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
  
}
