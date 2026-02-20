const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "images/img1.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "images/img2.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "images/img3.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "images/img4.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "images/img5.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "images/img6.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "images/img7.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "images/img8.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "images/img9.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayButtons();
});

function displayMenu(menuItems) {

  let menuHTML = menuItems.map(function(item){

    return `
    <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <p class="menu-text">
          ${item.desc}
        </p>
      </div>
    </div>
    `

  });

  menuHTML = menuHTML.join("");

  sectionCenter.innerHTML = menuHTML;
}
function displayButtons() {

  const categories = menu.reduce(function(values,item){

    if(!values.includes(item.category)){
      values.push(item.category)
    }

    return values

  },["All"])

  const categoryBtns = categories.map(function(category){

    return `<button class="btn btn-outline-dark btn-item" data-id="${category}">
    ${category}
    </button>`

  }).join("")

  btnContainer.innerHTML = categoryBtns

  const buttons = document.querySelectorAll(".btn-item")

  buttons.forEach(function(btn){

    btn.addEventListener("click", function(e){

      const category = e.currentTarget.dataset.id

      const menuCategory = menu.filter(function(menuItem){
        return menuItem.category === category
      })

      if(category === "All"){
        displayMenu(menu)
      } else {
        displayMenu(menuCategory)
      }

    })

  })

}




const menuCategory = menu.filter(function(menuItem){

  return menuItem.category === category

})
if(category === "All"){
  displayMenu(menu)
}else{
  displayMenu(menuCategory)
}

