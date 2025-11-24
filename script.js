// Products Data
const products = [
  { name: "iPhone 15", price: 75000, img: "images/iphone.jpeg" },
  { name: "one plus nord", price: 52000, img: "images/oneplusnord.jpeg" },
  { name: "Samsung Galaxy", price: 68000, img: "images/samsung.jpeg" },
  { name: "OnePlus 12", price: 55000, img: "images/oneplus.jpeg" },
  { name: "MacBook Air", price: 95000, img: "laptop/macbook.jpeg" },
  { name: "MacBook Pro", price: 120000, img: "laptop/macbookpro.jpeg" },
  { name: "HP Laptop", price: 60000, img: "laptop/samsung.jpeg" },
  { name: "Dell Inspiron", price: 58000, img: "laptop/dell.jpeg" },
  { name: "Sony Bravia TV", price: 85000, img: "led tv/sony.jpeg" },
  { name: "Samsung Smart TV", price: 65000, img: "led tv/samsung.jpeg" },
  { name: "Canon DSLR", price: 45000, img: "camera/canon2.jpeg" },
  { name: "Nikon Camera", price: 48000, img: "camera/nikon.jpeg" },
];

// Render products
const productList = document.getElementById("product-list");
if (productList) {
  products.forEach((p, i) => {

    productList.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card product-card p-2">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body text-center">
            <h6>${p.name}</h6>
            <p>₹${p.price}</p>
            <input type="number" id="qty${i}" value="1" min="1" class="form-control mb-2">
            <button class="btn btn-primary btn-sm" onclick="addToCart(${i})">Add to Cart</button>
          </div>
        </div>
      </div>`;
  });
}

let cart = [];
function addToCart(index) {
  const qty = parseInt(document.getElementById(`qty${index}`).value);
  const item = products[index];
  cart.push({ ...item, qty });
  alert(`${item.name} added successfully!`);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(c => {
    total += c.price * c.qty;
    cartList.innerHTML += `<li>${c.name} x ${c.qty} = ₹${c.price * c.qty}</li>`;
  });
  totalEl.innerText = `Total: ₹${total}`;
}

function purchase() {
  alert("Thank you for your order!");
  cart = [];
  updateCart();
}

// Search (home page)
function searchProduct() {
  const val = document.getElementById("searchInput").value.toLowerCase();
  if (["mobile", "laptop", "tv", "camera"].includes(val)) {
    window.location.href = "products.html";
  } else {
    alert("Please search Mobile, Laptop, TV, or Camera!");
  }
}
