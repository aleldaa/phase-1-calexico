// Write your code here...
fetch('http://localhost:3000/menu')
.then(res => res.json())
.then(menuItem => {
    menuItem.forEach((menu)=>{
        getMenu(menu)
        addToCart()
    })
    menuBody(menuItem[0])
    
})

const getMenu = (menu) => {
    const items = document.querySelector('#menu-items')
    const itemNames = document.createElement('span')
    itemNames.addEventListener('click', (e) => {
        e.preventDefault();
        menuBody(menu);
    } )
    itemNames.textContent = menu.name
    items.append(itemNames)
}

const menuBody = (menu) => {
    currentMenu = menu
    const itemImg = document.querySelector('#dish-image')
    const itemName = document.querySelector('#dish-name')
    const itemDes = document.querySelector('#dish-description')
    const itemPrice = document.querySelector('#dish-price')
    itemImg.src = menu.image
    itemName.textContent = menu.name
    itemDes.textContent = menu.description
    itemPrice.textContent = `$ ${menu.price}`  
}

// function addToCart(){
//     const cartButton = document.querySelector('#cart-form')
//     cartButton.addEventListener('submit', (e)=>{
//         e.preventDefault()
//         currentMenu.number_in_bag += parseInt(e.target["cart-amount"].value)
//         menuBody(currentMenu)
//         cartButton.reset()
//     })

// }
