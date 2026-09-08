// ===== WHATSAPP CONFIGURATION =====
const RESTAURANT_WHATSAPP = '584123460372';

// ===== INITIAL DISHES DATA =====
const defaultDishes = [
  // === ARROCES ===
  {
    id: 101,
    name: 'Arroz, Pollo y Ensalada',
    category: 'arroces',
    price: 3.50,
    tag: 'chef',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop',
    description: 'Arroz blanco bien sazonado acompañado de pollo a la parrilla y ensalada fresca del día. El plato perfecto para un almuerzo completo.',
    extras: []
  },
  {
    id: 102,
    name: 'Arroz, Pollo, Ensalada y Lumpia',
    category: 'arroces',
    price: 4.00,
    tag: 'chef',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop',
    description: 'Nuestro clásico arroz con pollo y ensalada fresca, acompañado de una crujiente lumpia dorada rellena de vegetales.',
    extras: []
  },
  {
    id: 103,
    name: 'Arroz, Pollo y Chop Suey',
    category: 'arroces',
    price: 4.00,
    tag: null,
    image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=600&h=400&fit=crop',
    description: 'Arroz blanco acompañado de jugoso pollo y un exquisito chop suey de vegetales salteados al wok con salsa especial.',
    extras: []
  },
  {
    id: 104,
    name: 'Arroz, Pollo y Refresco',
    category: 'arroces',
    price: 4.00,
    tag: null,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    description: 'Combo completo: arroz bien sazonado con pollo al estilo de la casa y tu refresco favorito incluido. ¡La mejor oferta!',
    extras: []
  },
  {
    id: 105,
    name: 'Arroz, Pollo y Papas Fritas',
    category: 'arroces',
    price: 4.00,
    tag: null,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop',
    description: 'Arroz blanco con pollo a la parrilla acompañado de papas fritas crujientes y doradas. Contundente y delicioso.',
    extras: []
  },
  {
    id: 106,
    name: 'Pollo Salteado',
    category: 'arroces',
    price: 4.00,
    tag: null,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop',
    description: 'Trozos de pollo salteados al wok con vegetales frescos, pimentón, cebolla y salsas especiales de la casa.',
    extras: []
  },
  // === POLLOS ASADOS ===
  {
    id: 201,
    name: '1/4 Pollo con Arroz, Lumpia y Ensalada',
    category: 'pollos',
    price: 6.00,
    tag: 'chef',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop',
    description: 'Un cuarto de pollo asado a las brasas con arroz, crujiente lumpia y ensalada fresca. Sabor ahumado irresistible.',
    extras: []
  },
  {
    id: 202,
    name: '1/2 Pollo con Arroz, Lumpia, Ensalada y Hallaquitas',
    category: 'pollos',
    price: 9.00,
    tag: 'chef',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop',
    description: 'Medio pollo asado jugoso acompañado de arroz, lumpia crujiente, ensalada fresca y hallaquitas venezolanas.',
    extras: []
  },
  {
    id: 203,
    name: 'Pollo Entero con 4 Hallaquitas y Ensalada',
    category: 'pollos',
    price: 11.00,
    tag: 'chef',
    image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=600&h=400&fit=crop',
    description: 'Pollo entero asado a las brasas, dorado y jugoso, con 4 hallaquitas tradicionales y ensalada fresca generosa.',
    extras: []
  },
  {
    id: 204,
    name: 'Combo Familiar: Pollo + 2 Arroz + 3 Ensaladas + 3 Hallaquitas',
    category: 'pollos',
    price: 14.00,
    tag: 'chef',
    image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=600&h=400&fit=crop',
    description: 'El combo ideal para compartir en familia: pollo entero asado, 2 porciones de arroz, 3 ensaladas y 3 hallaquitas.',
    extras: []
  },
  {
    id: 205,
    name: '1/2 Pollo con 3 Hallaquitas y Ensalada',
    category: 'pollos',
    price: 7.00,
    tag: null,
    image: 'https://images.unsplash.com/photo-1610057099443-fde6c99db9e1?w=600&h=400&fit=crop',
    description: 'Medio pollo asado a la brasa con 3 hallaquitas venezolanas recién hechas y ensalada fresca del día.',
    extras: []
  },
  // === BEBIDAS ===
  {
    id: 301,
    name: 'Refresco de 1 Litro',
    category: 'bebidas',
    price: 1.80,
    tag: null,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=600&h=400&fit=crop',
    description: 'Refresco de 1 litro bien frío. Variedad de sabores disponibles: cola, naranja, uva y más.',
    extras: []
  },
  {
    id: 302,
    name: 'Refresco de Litro y Medio',
    category: 'bebidas',
    price: 2.10,
    tag: null,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&h=400&fit=crop',
    description: 'Refresco familiar de litro y medio, perfecto para acompañar tu combo o compartir en la mesa.',
    extras: []
  },
  {
    id: 303,
    name: 'Sun Pequeño',
    category: 'bebidas',
    price: 1.00,
    tag: null,
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=400&fit=crop',
    description: 'Jugo Sun refrescante en presentación individual. Ideal para acompañar tu almuerzo.',
    extras: []
  },
  {
    id: 304,
    name: 'Coca-Cola Bombita',
    category: 'bebidas',
    price: 1.20,
    tag: null,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&h=400&fit=crop',
    description: 'Coca-Cola clásica en presentación bombita de vidrio, bien fría. El complemento perfecto.',
    extras: []
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
    const matchCat = selectedCategory === 'todos' || d.category === selectedCategory;
    const matchPref = selectedPref === 'todos' || d.tag === selectedPref;
    const matchSearch = !searchTerm || 
      d.name.toLowerCase().includes(searchTerm) || 
      d.description.toLowerCase().includes(searchTerm);
    return matchCat && matchPref && matchSearch;
  });

  if (filtered.length === 0) {
    dishesGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 3rem; margin-bottom: 12px;"><svg viewBox='0 0 24 24' width='48' height='48' fill='currentColor' style='opacity:0.5'><path d='M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z'/></svg></p>
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

    const tagBadge = dish.tag === 'chef' ? '<span class="dish-badge">Recomendado</span>' : '';

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
    arroces: 'Arrozes',
    pollos: 'Pollos Asados',
    bebidas: 'Bebidas'
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
        <span style="font-weight:700; color:var(--accent-gold);">+$${extra.price.toFixed(2)}</span>
      `;
      modalExtrasList.appendChild(label);
    });
  } else {
    modalExtrasList.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Platillo sin opciones adicionales.</p>';
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
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;

  cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div style="text-align:center; padding: 60px 0; color: var(--text-muted);">
        <p style="font-size: 3rem;"><svg viewBox='0 0 24 24' width='48' height='48' fill='currentColor' style='opacity:0.5'><path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'/></svg></p>
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
      ? `<br><small style="color:var(--accent-gold);">+ ${item.extras.map(e => e.name).join(', ')}</small>`
      : '';

    const notesText = item.notes
      ? `<br><small style="color:var(--text-muted);"> "${item.notes}"</small>`
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

  let orderText = `*NUEVO PEDIDO - EL BUEN SAZÓN DEL CENTRO*\n\n`;
  orderText += `*Modo:* ${deliveryType}\n`;
  orderText += `*Ubicación/Mesa:* ${address}\n\n`;
  orderText += `*DETALLE DEL PEDIDO:*\n`;

  let total = 0;
  cart.forEach((item, idx) => {
    orderText += `\n${idx + 1}. *${item.name}* (x${item.quantity}) - $${item.totalPrice.toFixed(2)}`;
    if (item.extras.length > 0) {
      orderText += `\n   *Extras:* ${item.extras.map(e => e.name).join(', ')}`;
    }
    if (item.notes) {
      orderText += `\n   *Nota:* ${item.notes}`;
    }
    total += item.totalPrice;
  });

  orderText += `\n\n*TOTAL A PAGAR:* $${total.toFixed(2)}\n\nPor favor confirmen recepción del pedido.`;

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
  const key = prompt("Ingrese la clave de administrador:");
  if (key === "2828") {
    openAdminPanel();
    adminLogin.style.display = 'none';
    adminForm.style.display = 'block';
    loginError.style.display = 'none';
    renderAdminDishList();
  } else if (key !== null) {
    alert("Clave incorrecta.");
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

  const finalImage = uploadedDishImageBase64 || imageUrl || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop';

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
    dishImageUploadArea.innerHTML = `<input type="file" id="dishImageFile" accept="image/*"><div class="upload-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg></div><p>Haz clic o arrastra la foto del platillo aquí</p>`;
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
