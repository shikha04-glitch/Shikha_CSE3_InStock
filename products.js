const Products = [
  {
    id: 1,
    name: "Milk",
    price: 3.99,
    category: "Inventory",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300",
    quantity: 100,
  },
  {
    id: 2,
    name: "Bread",
    price: 2.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300",
    quantity: 100,
  },
  {
    id: 3,
    name: "Eggs",
    price: 4.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300",
    quantity: 59,
  },
  {
    id: 4,
    name: "Cheese",
    price: 5.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300",
    quantity: 12,
  },
  {
    id: 5,
    name: "Chicken",
    price: 8.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=300",
    quantity: 37,
  },

  {
    id: 6,
    name: "Rice",
    price: 12.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=300",
    quantity: 37,
  },
  {
    id: 7,
    name: "Pasta",
    price: 3.49,
    category: "Food",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300",
    quantity: 46,
  },
  {
    id: 8,
    name: "Tomatoes",
    price: 2.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=300",
    quantity: 56,
  },
  {
    id: 9,
    name: "Potatoes",
    price: 4.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300",
    quantity: 26,
  },
  {
    id: 10,
    name: "Onions",
    price: 1.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300",
    quantity: 62,
  },
  {
    id: 11,
    name: "Cereal",
    price: 4.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=300",
    quantity: 62,
  },
  {
    id: 12,
    name: "Coca Cola",
    price: 1.99,
    category: "Beverages",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
  },
  {
    id: 13,
    name: "Orange Juice",
    price: 3.99,
    category: "Beverages",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300",
  },
  {
    id: 14,
    name: "Coffee",
    price: 7.99,
    category: "Beverages",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=300",
  },
  {
    id: 15,
    name: "Tea",
    price: 4.99,
    category: "Beverages",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300",
  },
  {
    id: 16,
    name: "Water",
    price: 0.99,
    category: "Beverages",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=300",
  },
  {
    id: 17,
    name: "Energy Drink",
    price: 2.99,
    category: "Beverages",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=300",
  },
  {
    id: 18,
    name: "Lemonade",
    price: 2.49,
    category: "Beverages",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300",
  },
  {
    id: 19,
    name: "Toilet Paper",
    price: 5.99,
    category: "Household",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300",
  },
  {
    id: 20,
    name: "Paper Towels",
    price: 4.99,
    category: "Household",
    image: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?w=300",
    quantity: 62,
  },
  {
    id: 21,
    name: "Dish Soap",
    price: 3.99,
    category: "Household",
    image:
      "https://plus.unsplash.com/premium_photo-1664372899296-f5455d37fcb9?w=300",
    quantity: 62,
  },
  {
    id: 22,
    name: "Laundry Detergent",
    price: 12.99,
    category: "Household",
    image: "https://images.unsplash.com/photo-1624372635282-b324bcdd4907?w=300",
    quantity: 62,
  },
  {
    id: 23,
    name: "Trash Bags",
    price: 8.99,
    category: "Household",
    image: "https://images.unsplash.com/photo-1611830696076-462acd8aa9e9?w=300",
    quantity: 62,
  },
  {
    id: 24,
    name: "Cleaning Spray",
    price: 4.99,
    category: "Household",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300",
    quantity: 62,
  },
  {
    id: 25,
    name: "Sponges",
    price: 2.99,
    category: "Household",
    image:
      "https://plus.unsplash.com/premium_photo-1677012996784-5167c541e1ea?w=300",
    quantity: 62,
  },
  {
    id: 26,
    name: "Shampoo",
    price: 6.99,
    category: "PersonalCare",
    image: "https://images.unsplash.com/photo-1655892810227-c0cffe1d9717?w=300",
    quantity: 62,
  },
  {
    id: 27,
    name: "Toothpaste",
    price: 3.99,
    category: "PersonalCare",
    image: "https://images.unsplash.com/photo-1693692273603-3b9e13789298?w=300",
    quantity: 62,
  },
  {
    id: 28,
    name: "Deodorant",
    price: 4.99,
    category: "PersonalCare",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=300",
  },
  {
    id: 29,
    name: "Body Wash",
    price: 5.99,
    category: "PersonalCare",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300",
  },
  {
    id: 30,
    name: "Hand Soap",
    price: 2.99,
    category: "PersonalCare",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=300",
  },
  {
    id: 31,
    name: "Lotion",
    price: 7.99,
    category: "PersonalCare",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1575410229391-19b4da01cc94?w=300",
  },
  {
    id: 32,
    name: "Tissues",
    price: 3.49,
    category: "PersonalCare",
    quantity: 62,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300",
  },
];

let displayProductsList = Products;

function activateTab(category) {
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active-tab"));

  if (category === "Inventory") {
    displayProductsList = Products;
  } else {
    displayProductsList = Products.filter(
      (product) => product.category === category
    );
  }
  const categoryNav = document.querySelector(".category-nav");
  const categoryNavChildren = categoryNav.children;
  console.log(categoryNavChildren);
  for (let i = 0; i < categoryNavChildren.length; i++) {
    categoryNavChildren[i].classList.remove("active-tab");
  }
  document.getElementById(category).classList.add("active-tab");
  displayProducts();
}

// PRODUCT SECTION FUNCTIONALITY
function displayProducts() {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";

  displayProductsList.forEach((product) => {
    const productCard = document.createElement("div");

    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    //add lazy loading

    productImage.classList.add("product-image");
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.loading = "lazy";

    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    const productQuantity = document.createElement("p");
    productQuantity.classList.add("product-quantity");
    productQuantity.textContent = `Quantity: ${product.quantity}`;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productQuantity);

    productContainer.appendChild(productCard);
  });
}

// Initialize the product display when the page loads
displayProducts();
