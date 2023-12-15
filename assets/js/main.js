const autos = [
  {
    id: 1,
    marca: "mazda",
    modelo: 2020,
    color: "azul",
    precio: 2500,
    image: "assets/img/galeria/background_01.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    marca: "lamborghini",
    modelo: 2023,
    color: "azul",
    precio: 3000,
    image: "assets/img/galeria/background_02.jpg",
    cantidad: 3,
  },
  {
    id: 3,
    marca: "mustang",
    modelo: 2021,
    color: "blanco",
    precio: 5000,
    image: "assets/img/galeria/background_03.jpeg",
    cantidad: 1,
  },
  {
    id: 4,
    marca: "vmw",
    modelo: 2019,
    color: "negro",
    precio: 2000,
    image: "assets/img/galeria/background_04.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    marca: "ferrari",
    modelo: 2019,
    color: "negro",
    precio: 2000,
    image: "assets/img/galeria/background_05.jpg",
    cantidad: 4,
  },
  {
    id: 6,
    marca: "mustang",
    modelo: 2022,
    color: "negro",
    precio: 6000,
    image: "assets/img/galeria/background_06.jpg",
    cantidad: 2,
  },
  {
    id: 7,
    marca: "ferrari",
    modelo: 2018,
    color: "blanco",
    precio: 1500,
    image: "assets/img/galeria/background_07.jpg",
    cantidad: 1,
  },
  {
    id: 8,
    marca: "mustang cobra",
    modelo: 2020,
    color: "azul",
    precio: 3500,
    image: "assets/img/galeria/background_08.jpg",
    cantidad: 1,
  },
  {
    id: 9,
    marca: "vmw",
    modelo: 2021,
    color: "rojo",
    precio: 4500,
    image: "assets/img/galeria/background_09.jpg",
    cantidad: 2,
  },
  {
    id: 10,
    marca: "vmw",
    modelo: 2022,
    color: "blanco",
    precio: 3500,
    image: "assets/img/galeria/background_10.jpg",
    cantidad: 1,
  },
  {
    id: 11,
    marca: "ferrari",
    modelo: 2020,
    color: "rojo",
    precio: 5500,
    image: "assets/img/galeria/background_11.jpg",
    cantidad: 3,
  },
  {
    id: 12,
    marca: "nissan",
    modelo: 2018,
    color: "marron",
    precio: 3500,
    image: "assets/img/galeria/background_12.jpg",
    cantidad: 1,
  },
  {
    id: 13,
    marca: "mustang",
    modelo: 2020,
    color: "azul",
    precio: 3500,
    image: "assets/img/galeria/background_13.jpg",
    cantidad: 2,
  },
  {
    id: 14,
    marca: "nissan 350z",
    modelo: 2019,
    color: "azul",
    precio: 4500,
    image: "assets/img/galeria/background_14.jpg",
    cantidad: 1,
  },
  {
    id: 15,
    marca: "volkswagen clasico",
    modelo: 1985,
    color: "azul",
    precio: 1300,
    image: "assets/img/galeria/background_15.jpg",
    cantidad: 1,
  },
  {
    id: 16,
    marca: "vmw",
    modelo: 2018,
    color: "blanco",
    precio: 2300,
    image: "assets/img/galeria/background_16.jpg",
    cantidad: 2,
  },
  {
    id: 17,
    marca: "lamborghini",
    modelo: 2016,
    color: "negro",
    precio: 3300,
    image: "assets/img/galeria/background_17.jpg",
    cantidad: 1,
  },
  {
    id: 18,
    marca: "rolls royce",
    modelo: 2022,
    color: "gris",
    precio: 5300,
    image: "assets/img/galeria/background_18.jpg",
    cantidad: 1,
  },
  {
    id: 19,
    marca: "rolls royce",
    modelo: 2021,
    color: "negro",
    precio: 5100,
    image: "assets/img/galeria/background_19.jpg",
    cantidad: 1,
  },
  {
    id: 20,
    marca: "mustang",
    modelo: 2021,
    color: "negro",
    precio: 3100,
    image: "assets/img/galeria/background_20.jpg",
    cantidad: 1,
  },
  {
    id: 21,
    marca: "mustang",
    modelo: 2022,
    color: "negro",
    precio: 5200,
    image: "assets/img/galeria/background_21.jpg",
    cantidad: 1,
  },
  {
    id: 22,
    marca: "mustang",
    modelo: 2022,
    color: "negro",
    precio: 5100,
    image: "assets/img/galeria/background_22.jpg",
    cantidad: 1,
  },
  {
    id: 23,
    marca: "mustang",
    modelo: 2023,
    color: "rojo",
    precio: 6100,
    image: "assets/img/galeria/background_23.jpg",
    cantidad: 1,
  },
  {
    id: 24,
    marca: "mustang",
    modelo: 2023,
    color: "azul",
    precio: 6400,
    image: "assets/img/galeria/background_24.jpg",
    cantidad: 1,
  },
  {
    id: 25,
    marca: "lancer evolution",
    modelo: 2023,
    color: "blanco",
    precio: 4100,
    image: "assets/img/galeria/background_25.jpg",
    cantidad: 1,
  },
  {
    id: 26,
    marca: "chevette",
    modelo: 1987,
    color: "gris",
    precio: 6100,
    image: "assets/img/galeria/background_26.jpg",
    cantidad: 1,
  },
  {
    id: 27,
    marca: "chevette",
    modelo: 2023,
    color: "rojo",
    precio: 6100,
    image: "assets/img/galeria/background_27.jpg",
    cantidad: 1,
  },
];

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalText = document.getElementById("modal-text");
const progress = document.querySelector(".progress-bar");

const shopping_cart = document.querySelector("#shopping_cart");
const shopping_cart_amount = document.querySelector("#shopping_cart_amount");
const total_to_pay = document.querySelector(".total_to_pay");

let cardsSelected = {};

// click en el carrito de compras
shopping_cart.onclick = () => {
  modal.classList.add("modal--open");

  modal.classList.add("modal--open", "info_card");

  let fragment = ` <header class="card_product header">
  <p>Foto</p>
  <p>Marca</p>
  <p>Precio Unitario</p>
  <p>Cantidad</p>
  <p>Precio Total:</p>
  
</header>`;
  const arrayOfSelectedCards = Object.values(cardsSelected);
  arrayOfSelectedCards.forEach((objCard) => {
    fragment += `<div id="c${objCard.id}" class="card_product">
        <img src="${objCard.image}" alt='${objCard.marca}'/>
        <p>${objCard.marca}</p>
        <p>${objCard.precio}$</p>
        <div class="container_amount">
        <button data-idcard="${objCard.id}" class="subtract_card_button"> - </button>
        <p class="cantidad">${objCard.amount}</p>
        <button data-idcard="${objCard.id}" class="add_card_button"> + </button>
        </div>
        <p class="total_price">${objCard.total_price}$</p>
        <button data-idcard="${objCard.id}" class="remove_card_button"> x </button>
      </div>`;
  });

  modalText.innerHTML = fragment;
};

document.onclick = (e) => {
  const elementClicked = e.target;

  // cuando el usuario le da click al boton comprar
  if (elementClicked.classList.contains("buyButton")) {
    const idCard = elementClicked.id;
    const selected = autos.find((auto) => auto.id == idCard);

    //verifico si el ID de ese carro ya lo tengo seleccionado en el objeto cardsSelected
    if (cardsSelected.hasOwnProperty(idCard)) {
      // si es así, verifico si la cantidad en stock es mayor a la cantidad que ya tengo seleccionada
      if (cardsSelected[idCard].cantidad > cardsSelected[idCard].amount) {
        // si es así lo que hago es aumentarle su cantidad de ese carro y ajustarle el precio total
        cardsSelected[idCard].amount += 1;
        cardsSelected[idCard].total_price += cardsSelected[idCard].precio;
        total_to_pay.textContent =
          +total_to_pay.textContent + cardsSelected[idCard].precio;

        shopping_cart_amount.textContent++;
        return;
      }
      alert(`Usted ya agregó todas las unidades de este vehiculo al carrito`);
    } else {
      // si no está lo agrego al objeto con los datos que voy a necesitar

      cardsSelected[idCard] = {
        id: selected.id,
        amount: 1,
        image: selected.image,
        precio: selected.precio,
        marca: selected.marca,
        total_price: selected.precio,
        cantidad: selected.cantidad,
      };
      total_to_pay.textContent =
        +total_to_pay.textContent + cardsSelected[idCard].precio;
      shopping_cart_amount.textContent++;
    }
    console.log();
  }

  // click a el icono + dentro de la información del carrito de cada producto para aumentar la cantidad
  if (elementClicked.classList.contains("add_card_button")) {
    const idCard = elementClicked.dataset.idcard;
    if (cardsSelected[idCard].cantidad > cardsSelected[idCard].amount) {
      cardsSelected[idCard].amount += 1;
      const newTotalPrice =
        cardsSelected[idCard].amount * cardsSelected[idCard].precio;
      cardsSelected[idCard].total_price = newTotalPrice;
      const div_product = elementClicked.closest(".card_product");
      console.log(cardsSelected[idCard]);
      div_product.querySelector(".cantidad").textContent++;
      div_product.querySelector(".total_price").textContent = newTotalPrice;
      total_to_pay.textContent =
        +total_to_pay.textContent + cardsSelected[idCard].precio;

      shopping_cart_amount.textContent++;
    }
  }

  // click a el icono - dentro de la información del carrito de cada producto para restar la cantidad
  if (elementClicked.classList.contains("subtract_card_button")) {
    const idCard = elementClicked.dataset.idcard;

    if (cardsSelected[idCard].amount > 1) {
      cardsSelected[idCard].amount -= 1;
      const newTotalPrice =
        cardsSelected[idCard].amount * cardsSelected[idCard].precio;
      cardsSelected[idCard].total_price = newTotalPrice;
      const div_product = elementClicked.closest(".card_product");
      console.log(cardsSelected[idCard]);
      div_product.querySelector(".cantidad").textContent--;
      div_product.querySelector(".total_price").textContent = newTotalPrice;
      total_to_pay.textContent -= cardsSelected[idCard].precio;

      shopping_cart_amount.textContent--;
    }
  }

  //click en el boton x para quitar cada producto del carrito
  if (elementClicked.classList.contains("remove_card_button")) {
    const idCard = elementClicked.dataset.idcard;
    const div_product = elementClicked.closest(".card_product");
    div_product.remove();
    shopping_cart_amount.textContent -= cardsSelected[idCard].amount;
    total_to_pay.textContent =
      +total_to_pay.textContent - cardsSelected[idCard].total_price;

    delete cardsSelected[idCard];
  }
  console.log({ cardsSelected });
};

autos.forEach((auto) => {
  const section = document.querySelector(".cards");

  const figure = document.createElement("figure");
  const figcaption = document.createElement("figcaption");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const button = document.createElement("button");
  const buyButton = document.createElement("button");

  img.setAttribute("src", `${auto.image}`);
  h3.innerText = `Marca: ${auto.marca}`;
  p1.innerText = `Modelo: ${auto.modelo}`;
  p2.innerText = `Precio: $${auto.precio}`;

  figure.classList.add("figure");
  button.classList.add("view-more");
  buyButton.classList.add("buyButton");

  button.setAttribute("id", `${auto.id}`);
  buyButton.setAttribute("id", `${auto.id}`);

  button.innerText = ` Ver mas `;
  buyButton.innerText = ` Comprar `;

  figcaption.append(h3, p1, p2);
  figure.append(img, figcaption, button, buyButton);

  section.appendChild(figure);
});

const figuras = document.querySelectorAll(".figure");
const search = document.querySelector("#search");

search.addEventListener("keyup", (e) => {
  e.preventDefault();

  if (e.target.matches("#search")) {
    figuras.forEach((carro) => {
      if (
        carro.textContent
          .toLocaleLowerCase()
          .includes(e.target["value"].toLocaleLowerCase())
      ) {
        carro.classList.remove("filtro");
      } else {
        carro.classList.add("filtro");
      }
    });
  }
});

const cerrarModal = () => {
  modal.classList.remove("modal--open", "info_card");
  document.documentElement.style.overflow = "auto";
  modalText.innerHTML = "";
};

document.querySelectorAll(".view-more").forEach((button) => {
  button.addEventListener("click", (e) => {
    const selected = autos.find((auto) => auto.id == e.target["id"]);

    modal.classList.add("modal--open");
    document.documentElement.style.overflow = "hidden";

    modalText.innerHTML = `<div>
                    <img src="${selected.image}" alt='${selected.marca}'/>
                    <p>marca: ${selected.marca}</p>
                    <p>modelo: ${selected.modelo}</p>
                    <p>color: ${selected.color}</p>
                    <p>precio: ${selected.precio}$</p>
                    <p>cantidad: ${selected.cantidad}</p>
                </div>`;
  });
});

modalClose.addEventListener("click", () => {
  cerrarModal();
});

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    cerrarModal();
  }
});

document.body.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && modal.classList.contains("modal--open")) {
    cerrarModal();
  }
});

window.addEventListener("scroll", (e) => {
  progress.style.width = `${(this.scrollY / 100) * 2.2}%`;
});
