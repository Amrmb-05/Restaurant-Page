export function loadContactPage() {
    const style = document.querySelector('link')
    style.innerHTML = `<link rel="stylesheet" href="../style/contact.css">` 
    const elem = document.getElementById('content')
    elem.innerHTML = 
    `
    <div class='contact-section'>
    <h1>Our Phone Number</h1>
    <p> +672-76466665
    </div>
    <div class='address-section'>
    <h1>Address</h1>
    <p> Antarctica behind the snow</p>
    </div>
    `
}