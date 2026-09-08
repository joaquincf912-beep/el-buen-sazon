// ===== WHATSAPP CONFIGURATION =====
const RESTAURANT_WHATSAPP = '584123460372';

// ===== INITIAL DISHES DATA =====
const defaultDishes = [
  {
    id: 101,
    name: 'Smash Double Bacon Cheeseburger',
    category: 'burgers',
    price: 12.50,
    tag: 'chef',
    image: 'images/burger_double.jpg',
    description: 'Doble carne smash 100% res (200g), queso cheddar fundido, doble tocineta crujiente, pepinillos y salsa secreta Vibra en pan brioche artesanal.',
    extras: [
      { name: 'Extra Queso Cheddar Fundido', price: 1.50 },
      { name: 'Extra Tocineta Crispy', price: 2.00 },
      { name: 'Salsa Especial Extra', price: 1.00 }
    ]
  },
  {
    id: 102,
    name: 'Pizza Pepperoni Artesanal 12"',
    category: 'pizzas',
    price: 14.00,
    tag: 'chef',
    image: 'images/pizza_pepperoni.jpg',
    description: 'Masa de fermentación lenta de 48 horas, salsa de tomate San Marzano, abundante queso mozzarella fior di latte y pepperoni crocante.',
    extras: [
      { name: 'Borde Relleno de Queso', price: 2.50 },
      { name: 'Extra Pepperoni', price: 2.00 },
      { name: 'Miel Picante Jalapeño', price: 1.50 }
    ]
  },
  {
    id: 103,
    name: 'Tacos de Birria Fusión (3 uds)',
    category: 'tacos',
    price: 11.00,
    tag: 'spicy',
    image: 'images/tacos_birria.jpg',
    description: 'Tortillas de maíz dorado en la grasa de la carne, res desmechada cocida a fuego lento por 8 horas, queso gratinado, cilantro, cebolla y consome caliente.',
    extras: [
      { name: 'Taco Adicional de Birria', price: 3.50 },
      { name: 'Guacamole Casero', price: 2.00 },
      { name: 'Salsa Macha Picante Extra', price: 1.00 }
    ]
  },
  {
    id: 104,
    name: 'Dragon Roll Sushi (10 Pzs)',
    category: 'sushi',
    price: 15.00,
    tag: 'chef',
    image: 'images/sushi_dragon.jpg',
    description: 'Relleno de langostino empanizado en panko y queso crema, cubierto con finas láminas de aguacate fresco, salmón, salsa unagi dulce y sésamo tostado.',
    extras: [
      { name: 'Salsa Unagi Extra', price: 1.00 },
      { name: 'Salsa Spicy Mayo', price: 1.00 },
      { name: 'Porción Extra de Gari (Jengibre)', price: 0.50 }
    ]
  },
  {
    id: 105,
    name: 'Loaded Cheddar Bacon Fries',
    category: 'entradas',
    price: 8.50,
    tag: 'chef',
    image: 'images/loaded_fries.jpg',
    description: 'Papas fritas crujientes bañadas en salsa de queso cheddar fundido artesanal, tocineta bits ahumada, cebollín fresco y dip de sour cream.',
    extras: [
      { name: 'Extra Queso Cheddar', price: 1.50 },
      { name: 'Rodajas de Jalapeño', price: 1.00 },
      { name: 'Carne Pulled Pork (100g)', price: 3.00 }
    ]
  },
  {
    id: 106,
    name: 'Wings BBQ Ahumadas (8 Uds)',
    category: 'entradas',
    price: 9.50,
    tag: null,
    image: 'images/wings_bbq.jpg',
    description: 'Alitas de pollo crujientes glaseadas en salsa BBQ ahumada de la casa. Acompañadas de bastones de apio y aderezo ranch de ajo.',
    extras: [
      { name: 'Aderezo Ranch Extra', price: 1.00 },
      { name: 'Salsa Buffalo Picante', price: 1.00 }
    ]
  },
  {
    id: 107,
    name: 'Mojito Artesanal Fusión',
    category: 'bebidas',
    price: 7.00,
    tag: null,
    image: 'images/cocktail_mojito.jpg',
    description: 'Refrescante cóctel con ron blanco premium, menta fresca machacada, zumo de lima recién exprimido, azúcar de caña y toque de maracuyá.',
    extras: [
      { name: 'Shot Extra de Ron', price: 2.50 }
    ]
  },
  {
    id: 108,
    name: 'Churros con Choco-Nutella',
    category: 'postres',
    price: 6.00,
    tag: 'veggie',
    image: 'images/dessert_churros.jpg',
    description: 'Churros crujientes espolvoreados con azúcar refinada y canela. Servidos calientes con dip de Nutella y manjar de dulce de leche.',
    extras: [
      { name: 'Dip Extra de Nutella', price: 1.50 },
      { name: 'Bola de Helado Mantecado', price: 2.00 }
    ]
  }
];

// Load dishes from localStorage
function loadDishes() {
  const saved = localStorage.getItem('vibra_custom_dishes');
  if (saved) {
    try {
      const customDishes = JSON.parse(saved);
      return [...defaultDishes, ...customDishes];
    } catch (e) {
      console.error('Error loading custom dishes', e);
    }
  }
  return defaultDishes;
}

let dishes = loadDishes();
let cart = [];
let selectedCategory = 'todos';
let selectedPref = 'todos';
let currentModalDish = null;
let currentModalQty = 1;
let currentModalExtras = [];

// ===== DOM ELEMENTS =====
const dishesGrid = document.getElementById('dishesGrid');
const searchInput = document.getElementById('searchInput');
const categoryTabs = document.getElementById('categoryTabs');
const prefBtns = document.querySelectorAll('.pref-btn');

// Modal Elements
const dishModal = document.getElementById('dishModal');
const closeDishModal = document.getElementById('closeDishModal');
const modalDishImage = document.getElementById('modalDishImage');
const modalDishCategory = document.getElementById('modalDishCategory');
const modalDishTitle = document.getElementById('modalDishTitle');
const modalDishDesc = document.getElementById('modalDishDesc');
const modalDishTags = document.getElementById('modalDishTags');
const modalExtrasList = document.getElementById('modalExtrasList');
const dishNotes = document.getElementById('dishNotes');
const modalQtyMinus = document.getElementById('modalQtyMinus');
const modalQtyPlus = document.getElementById('modalQtyPlus');
const modalQtyNum = document.getElementById('modalQtyNum');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
const modalAddPrice = document.getElementById('modalAddPrice');

// Cart Drawer Elements
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartBadge = document.getElementById('cartBadge');
const cartSubtotal = document.getElementById('cartSubtotal');
const sendWhatsAppOrderBtn = document.getElementById('sendWhatsAppOrderBtn');
const deliveryAddress = document.getElementById('deliveryAddress');

// Admin Elements
const adminOverlay = document.getElementById('adminOverlay');
const adminClose = document.getElementById('adminClose');
const adminLogin = document.getElementById('adminLogin');
const adminForm = document.getElementById('adminForm');
const adminPassword = document.getElementById('adminPassword');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const loginError = document.getElementById('loginError');
const addDishBtn = document.getElementById('addDishBtn');
const resetMenuBtn = document.getElementById('resetMenuBtn');
const adminDishList = document.getElementById('adminDishList');
const adminSuccess = document.getElementById('adminSuccess');

// ===== RENDER DISHES =====
function renderDishes() {
  if (!dishesGrid) return;
  dishesGrid.innerHTML = '';

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = dishes.filter(d => {
    // Category match
    const matchCat = selectedCategory === 'todos' || d.category === selectedCategory;
    
    // Preference match
    const matchPref = selectedPref === 'todos' || d.tag === selectedPref;

    // Search term match
    const matchSearch = !searchTerm || 
      d.name.toLowerCase().includes(searchTerm) || 
      d.description.toLowerCase().includes(searchTerm);

    return matchCat && matchPref && matchSearch;
  });

  if (filtered.length === 0) {
    dishesGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 3rem; margin-bottom: 12px;">🍳</p>
        <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 8px;">No encontramos platillos</h3>
        <p>Intenta buscar con otro nombre o selecciona otra categoría.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((dish, idx) => {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.style.animationDelay = `${idx * 0.05}s`;

    const tagBadge = dish.tag === 'chef' ? '<span class="dish-badge">⭐ Recomendado</span>' :
                     dish.tag === 'spicy' ? '<span class="dish-badge" style="color:#ef4444;">🌶️ Picante</span>' :
                     dish.tag === 'veggie' ? '<span class="dish-badge" style="color:#4ade80;">🌿 Vegetariano</span>' : '';

    card.innerHTML = `
      <div class="dish-image-wrapper">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
        ${tagBadge}
      </div>
      <div class="dish-info">
        <div class="dish-category-tag">${getCategoryLabel(dish.category)}</div>
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <div class="dish-footer">
          <span class="dish-price">$${parseFloat(dish.price).toFixed(2)}</span>
          <button class="btn-add-dish" onclick="openDishModal(${dish.id})">
            <span>+ Agregar</span>
          </button>
        </div>
      </div>
    `;

    // Whole card click
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-add-dish')) {
        openDishModal(dish.id);
      }
    });

    dishesGrid.appendChild(card);
  });
}

function getCategoryLabel(cat) {
  const map = {
    burgers: 'Burgers',
    pizzas: 'Pizzas',
    tacos: 'Tacos & Fusión',
    sushi: 'Sushi Rolls',
    entradas: 'Entradas',
    bebidas: 'Bebidas',
    postres: 'Postres'
  };
  return map[cat] || cat;
}

// ===== DISH MODAL LOGIC =====
window.openDishModal = function(id) {
  const dish = dishes.find(d => d.id === id);
  if (!dish) return;

  currentModalDish = dish;
  currentModalQty = 1;
  currentModalExtras = [];

  modalDishImage.src = dish.image;
  modalDishCategory.textContent = getCategoryLabel(dish.category);
  modalDishTitle.textContent = dish.name;
  modalDishDesc.textContent = dish.description;
  dishNotes.value = '';
  modalQtyNum.textContent = '1';

  // Extras list
  modalExtrasList.innerHTML = '';
  if (dish.extras && dish.extras.length > 0) {
    dish.extras.forEach((extra, i) => {
      const label = document.createElement('label');
      label.className = 'extra-item';
      label.innerHTML = `
        <div>
          <input type="checkbox" value="${i}" onchange="toggleModalExtra(${i})">
          <span>${extra.name}</span>
        </div>
        <span style="font-weight:700; color:var(--accent-orange);">+$${extra.price.toFixed(2)}</span>
      `;
      modalExtrasList.appendChild(label);
    });
  } else {
    modalExtrasList.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Sin adicionales para este platillo.</p>';
  }

  updateModalPrice();
  dishModal.classList.add('active');
};

window.toggleModalExtra = function(idx) {
  const extra = currentModalDish.extras[idx];
  const exists = currentModalExtras.findIndex(e => e.name === extra.name);
  if (exists >= 0) {
    currentModalExtras.splice(exists, 1);
  } else {
    currentModalExtras.push(extra);
  }
  updateModalPrice();
};

function updateModalPrice() {
  if (!currentModalDish) return;
  const extrasTotal = currentModalExtras.reduce((sum, e) => sum + e.price, 0);
  const total = (currentModalDish.price + extrasTotal) * currentModalQty;
  modalAddPrice.textContent = `$${total.toFixed(2)}`;
}

modalQtyMinus.addEventListener('click', () => {
  if (currentModalQty > 1) {
    currentModalQty--;
    modalQtyNum.textContent = currentModalQty;
    updateModalPrice();
  }
});

modalQtyPlus.addEventListener('click', () => {
  currentModalQty++;
  modalQtyNum.textContent = currentModalQty;
  updateModalPrice();
});

closeDishModal.addEventListener('click', () => {
  dishModal.classList.remove('active');
});

dishModal.addEventListener('click', (e) => {
  if (e.target === dishModal) {
    dishModal.classList.remove('active');
  }
});

// Add item from modal to cart
modalAddToCartBtn.addEventListener('click', () => {
  if (!currentModalDish) return;

  const extrasTotal = currentModalExtras.reduce((sum, e) => sum + e.price, 0);
  const unitPrice = currentModalDish.price + extrasTotal;
  const notes = dishNotes.value.trim();

  cart.push({
    id: Date.now(),
    dishId: currentModalDish.id,
    name: currentModalDish.name,
    image: currentModalDish.image,
    quantity: currentModalQty,
    unitPrice: unitPrice,
    totalPrice: unitPrice * currentModalQty,
    extras: [...currentModalExtras],
    notes: notes
  });

  updateCart();
  dishModal.classList.remove('active');
  cartOverlay.classList.add('active');
});

// ===== CART DRAWER LOGIC =====
openCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('active');
});

cartOverlay.addEventListener('click', (e) => {
  if (e.target === cartOverlay) {
    cartOverlay.classList.remove('active');
  }
});

function updateCart() {
  // Update badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;

  // Render list
  cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div style="text-align:center; padding: 60px 0; color: var(--text-muted);">
        <p style="font-size: 3rem;">🛒</p>
        <p style="margin-top:10px;">Tu pedido está vacío.</p>
        <p style="font-size:0.85rem;">Agrega deliciosos platillos del menú.</p>
      </div>
    `;
    cartSubtotal.textContent = '$0.00';
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.totalPrice;

    const extrasText = item.extras.length > 0
      ? `<br><small style="color:var(--accent-amber);">+ ${item.extras.map(e => e.name).join(', ')}</small>`
      : '';

    const notesText = item.notes
      ? `<br><small style="color:var(--text-muted);">📝 "${item.notes}"</small>`
      : '';

    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-item';
    cartItemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name} (${item.quantity}x)</h4>
        <p>$${item.unitPrice.toFixed(2)} c/u ${extrasText} ${notesText}</p>
        <div class="cart-item-price">$${item.totalPrice.toFixed(2)}</div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})">&times;</button>
    `;
    cartItemsList.appendChild(cartItemEl);
  });

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
}

window.removeCartItem = function(index) {
  cart.splice(index, 1);
  updateCart();
};

// Checkout via WhatsApp
sendWhatsAppOrderBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Tu carrito está vacío. Agrega platillos antes de realizar el pedido.');
    return;
  }

  const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
  const address = deliveryAddress.value.trim();

  if (!address) {
    alert('Por favor ingresa la dirección de entrega o número de mesa.');
    deliveryAddress.focus();
    return;
  }

  let orderText = `*¡NUEVO PEDIDO - EL BUEN SAZÓN DEL CENTRO!* 🍲✨\n\n`;
  orderText += `*🛵 Modo:* ${deliveryType}\n`;
  orderText += `*📍 Ubicación/Mesa:* ${address}\n\n`;
  orderText += `*📋 DETALLE DEL PEDIDO:*\n`;

  let total = 0;
  cart.forEach((item, idx) => {
    orderText += `\n${idx + 1}. *${item.name}* (x${item.quantity}) - $${item.totalPrice.toFixed(2)}`;
    if (item.extras.length > 0) {
      orderText += `\n   ➕ *Extras:* ${item.extras.map(e => e.name).join(', ')}`;
    }
    if (item.notes) {
      orderText += `\n   📝 *Nota:* ${item.notes}`;
    }
    total += item.totalPrice;
  });

  orderText += `\n\n*💰 TOTAL A PAGAR:* $${total.toFixed(2)}\n\n¡Por favor confirmen recepción del pedido!`;

  const url = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(orderText)}`;
  window.open(url, '_blank');
});

// ===== CATEGORY & PREFERENCE TABS =====
if (categoryTabs) {
  categoryTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.cat-tab');
    if (tab) {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      selectedCategory = tab.dataset.cat;
      renderDishes();
    }
  });
}

prefBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    prefBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPref = btn.dataset.pref;
    renderDishes();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    renderDishes();
  });
}

// ===== SECRET ADMIN LOGIC (KEY: 2828) =====
window.triggerSecretAdmin = function() {
  const key = prompt("🔒 Ingrese la clave de administrador:");
  if (key === "2828") {
    openAdminPanel();
    adminLogin.style.display = 'none';
    adminForm.style.display = 'block';
    loginError.style.display = 'none';
    renderAdminDishList();
  } else if (key !== null) {
    alert("❌ Clave incorrecta.");
  }
};

function openAdminPanel() {
  adminOverlay.classList.add('active');
}

adminClose.addEventListener('click', () => {
  adminOverlay.classList.remove('active');
});

adminOverlay.addEventListener('click', (e) => {
  if (e.target === adminOverlay) {
    adminOverlay.classList.remove('active');
  }
});

adminLoginBtn.addEventListener('click', () => {
  const pass = adminPassword.value.trim();
  if (pass === '2828') {
    adminLogin.style.display = 'none';
    adminForm.style.display = 'block';
    loginError.style.display = 'none';
    renderAdminDishList();
  } else {
    loginError.style.display = 'block';
  }
});

// Image Upload Preview Handling
let uploadedDishImageBase64 = null;
const dishImageFile = document.getElementById('dishImageFile');
const dishImageUploadArea = document.getElementById('dishImageUploadArea');

if (dishImageFile) {
  dishImageFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedDishImageBase64 = event.target.result;
        dishImageUploadArea.innerHTML = `<img src="${uploadedDishImageBase64}" style="max-height:100px; border-radius:8px;"> <p style="margin-top:4px;">Foto cargada</p>`;
      };
      reader.readAsDataURL(file);
    }
  });
}

// Add new dish to menu
addDishBtn.addEventListener('click', () => {
  const name = document.getElementById('dishName').value.trim();
  const category = document.getElementById('dishCategorySelect').value;
  const price = parseFloat(document.getElementById('dishPrice').value);
  const tag = document.getElementById('dishTagSelect').value || null;
  const imageUrl = document.getElementById('dishImageUrl').value.trim();
  const desc = document.getElementById('dishDescInput').value.trim();

  if (!name || isNaN(price) || !desc) {
    alert('Por favor completa los campos obligatorios (*): Nombre, Precio y Descripción.');
    return;
  }

  const finalImage = uploadedDishImageBase64 || imageUrl || 'images/burger_double.jpg';

  const newDish = {
    id: Date.now(),
    name,
    category,
    price,
    tag,
    image: finalImage,
    description: desc,
    extras: []
  };

  const saved = localStorage.getItem('vibra_custom_dishes');
  let customList = saved ? JSON.parse(saved) : [];
  customList.push(newDish);
  localStorage.setItem('vibra_custom_dishes', JSON.stringify(customList));

  dishes = loadDishes();
  renderDishes();
  renderAdminDishList();

  adminSuccess.style.display = 'block';
  setTimeout(() => { adminSuccess.style.display = 'none'; }, 3000);

  // Reset form
  document.getElementById('dishName').value = '';
  document.getElementById('dishPrice').value = '';
  document.getElementById('dishImageUrl').value = '';
  document.getElementById('dishDescInput').value = '';
  uploadedDishImageBase64 = null;
  if (dishImageUploadArea) {
    dishImageUploadArea.innerHTML = `<input type="file" id="dishImageFile" accept="image/*"><div class="upload-icon">📸</div><p>Haz clic o arrastra la foto del platillo aquí</p>`;
  }
});

function renderAdminDishList() {
  if (!adminDishList) return;
  adminDishList.innerHTML = '';

  dishes.forEach(d => {
    const item = document.createElement('div');
    item.className = 'admin-product-item';
    item.innerHTML = `
      <img src="${d.image}" alt="${d.name}">
      <div style="flex-grow:1; margin: 0 12px;">
        <h4 style="font-size:0.95rem; font-weight:700;">${d.name}</h4>
        <p style="font-size:0.85rem; color:var(--text-muted);">$${d.price.toFixed(2)} • ${getCategoryLabel(d.category)}</p>
      </div>
      <button class="admin-btn danger" onclick="deleteDish(${d.id})">Eliminar</button>
    `;
    adminDishList.appendChild(item);
  });
}

window.deleteDish = function(id) {
  if (!confirm('¿Deseas eliminar este platillo del menú?')) return;

  const saved = localStorage.getItem('vibra_custom_dishes');
  if (saved) {
    let customList = JSON.parse(saved);
    customList = customList.filter(d => d.id !== id);
    localStorage.setItem('vibra_custom_dishes', JSON.stringify(customList));
  }

  dishes = dishes.filter(d => d.id !== id);
  renderDishes();
  renderAdminDishList();
};

resetMenuBtn.addEventListener('click', () => {
  if (confirm('¿Restaurar el menú original predeterminado?')) {
    localStorage.removeItem('vibra_custom_dishes');
    dishes = [...defaultDishes];
    renderDishes();
    renderAdminDishList();
  }
});

// ===== INIT =====
renderDishes();
