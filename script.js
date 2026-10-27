
/* ==================================
   1. SAMPLE PRODUCT DATA
================================== */

const products = [
    {
        id: "p1",
        name: "The City Tote",
        brand: "Louis Vuitton",
        category: "purse",
        price: 18500,
        color: "Tan",
        material: "Coated canvas",
        description: "A spacious bag for everyday essentials.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSr1cFWOM5Lwt9IHem_ZQEriDEZpFMT9k6lEYo56Rdw&s=10",
        tag: "FEATURED"
    },
    {
        id: "p2",
        name: "Mini Shoulder Bag",
        brand: "Coach",
        category: "purse",
        price: 12400,
        color: "Brown",
        material: "Textured finish",
        description: "A compact bag for daily use.",
        image: "https://coach.scene7.com/is/image/Coach/cfq98_b4bk_a0?$mobileProductTile$",
        tag: "POPULAR"
    },
    {
        id: "p3",
        name: "Everyday Wallet",
        brand: "Michael Kors",
        category: "wallet",
        price: 6900,
        color: "Black",
        material: "Faux leather",
        description: "A practical wallet for your cards.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaG09AuXh7qx1Kdg6KyAvebCwESPHSSxl8jnDAVIMgQ&s=10",
        tag: "ESSENTIAL"
    },
    {
        id: "p4",
        name: "Soft Curve Purse",
        brand: "Everyday Edit",
        category: "purse",
        price: 5200,
        color: "Cream",
        material: "Vegan leather",
        description: "A versatile purse with a simple design.",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=80",
        tag: "NEW"
    },
    {
        id: "p5",
        name: "Classic Zip Wallet",
        brand: "Coach",
        category: "wallet",
        price: 7800,
        color: "Brown",
        material: "Textured finish",
        description: "A zip wallet for everyday essentials.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmW_c6qBra_64P9dhh9RflOS79FcLzrik61if-d0pPNg&s=10",
        tag: "CLASSIC"
    },
    {
        id: "p6",
        name: "Weekend Carryall",
        brand: "Louis Vuitton",
        category: "purse",
        price: 22900,
        color: "Tan",
        material: "Canvas look",
        description: "A roomy bag for busy days.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
        tag: "FEATURED"
    },
    {
        id: "p7",
        name: "Slim Card Holder",
        brand: "Everyday Edit",
        category: "wallet",
        price: 2400,
        color: "Sage",
        material: "Vegan leather",
        description: "A compact holder for your cards.",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
        tag: "MINIMAL"
    },
    {
        id: "p8",
        name: "Structured Crossbody",
        brand: "Michael Kors",
        category: "purse",
        price: 14700,
        color: "Black",
        material: "Faux leather",
        description: "A structured bag for day and evening.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
        tag: "POPULAR"
    }
    
];


/* ==================================
   2. HELPER FUNCTIONS
================================== */

function findProduct(id) {
    return products.find(product => product.id === id);
}

function formatPrice(price) {
    return "PKR " + price.toLocaleString("en-PK");
}

function getCompareIds() {
    try {
        const saved = JSON.parse(
            localStorage.getItem("nextagCompare") || "[]"
        );

        if (!Array.isArray(saved)) {
            return [];
        }

        return [...new Set(saved)].filter(id => findProduct(id));
    } catch {
        return [];
    }
}

function saveCompareIds(ids) {
    try {
        localStorage.setItem("nextagCompare", JSON.stringify(ids));
    } catch {
        console.warn("Comparison could not be saved in this browser.");
    }
}


/* ==================================
   3. CREATE PRODUCT CARDS
================================== */

function createProductCard(product) {
    return `
        <article class="product-card">

            <div class="product-image-wrap">
                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-tag">
                    ${product.tag}
                </span>
            </div>

            <div class="product-info">

                <span class="product-brand">
                    ${product.brand}
                </span>

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <span class="product-price">
                    ${formatPrice(product.price)}
                </span>

                <div class="product-actions">
                    <button
                        class="small-button add-compare"
                        data-id="${product.id}"
                        type="button"
                    >
                        + Compare
                    </button>

                    <a class="small-button" href="compare.html">
                        View Compare
                    </a>
                </div>

            </div>
        </article>
    `;
}

function renderProducts(element, list) {
    if (!element) return;

    if (list.length === 0) {
        element.innerHTML =
            "<p>No products found. Try another search.</p>";
        return;
    }

    element.innerHTML = list
        .map(createProductCard)
        .join("");
}


/* ==================================
   4. RUN WHEN PAGE LOADS
================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Automatically display the current year.
    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // Mobile navigation menu.
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.textContent = isOpen ? "×" : "☰";
        });
    }


    // Home page featured products.
    renderProducts(
        document.getElementById("featured-products"),
        products.slice(0, 4)
    );


    /* ==================================
       5. PRODUCT SEARCH AND FILTERS
    ================================== */

    const productContainer = document.getElementById("all-products");

    if (productContainer) {
        const categoryFilter =
            document.getElementById("category-filter");

        const brandFilter =
            document.getElementById("brand-filter");

        const searchInput =
            document.getElementById("product-search");

        const productCount =
            document.getElementById("product-count");

        // Read filters from the brand/category links.
        const parameters = new URLSearchParams(window.location.search);

        if (parameters.has("category")) {
            const category = parameters.get("category");

            if (["purse", "wallet"].includes(category)) {
                categoryFilter.value = category;
            }
        }

        if (parameters.has("brand")) {
            const brand = parameters.get("brand");

            const brandExists = Array.from(
                brandFilter.options
            ).some(option => option.value === brand);

            if (brandExists) {
                brandFilter.value = brand;
            }
        }

        function updateProducts() {
            const searchTerm =
                searchInput.value.trim().toLowerCase();

            const filteredProducts = products.filter(function (product) {
                const matchesCategory =
                    categoryFilter.value === "all" ||
                    product.category === categoryFilter.value;

                const matchesBrand =
                    brandFilter.value === "all" ||
                    product.brand === brandFilter.value;

                const productText = (
                    product.name + " " +
                    product.brand + " " +
                    product.description
                ).toLowerCase();

                const matchesSearch =
                    productText.includes(searchTerm);

                return (
                    matchesCategory &&
                    matchesBrand &&
                    matchesSearch
                );
            });

            renderProducts(productContainer, filteredProducts);

            productCount.textContent =
                filteredProducts.length + " product(s) found";
        }

        categoryFilter.addEventListener("change", updateProducts);
        brandFilter.addEventListener("change", updateProducts);
        searchInput.addEventListener("input", updateProducts);

        updateProducts();
    }


    /* ==================================
       6. ADD PRODUCTS TO COMPARISON
    ================================== */

    document.addEventListener("click", function (event) {
        const button = event.target.closest(".add-compare");

        if (!button) return;

        const productId = button.dataset.id;
        const selectedIds = getCompareIds();

        if (selectedIds.includes(productId)) {
            alert("This product is already in your comparison list.");
            return;
        }

        if (selectedIds.length >= 3) {
            alert("You can compare a maximum of three products.");
            return;
        }

        selectedIds.push(productId);
        saveCompareIds(selectedIds);

        button.textContent = "✓ Added";

        alert("Product added! Open the Compare page to view it.");
    });


    /* ==================================
       7. COMPARISON PAGE
    ================================== */

    const compareSelect = document.getElementById("compare-select");
    const compareResults = document.getElementById("compare-results");
    const compareMessage = document.getElementById("compare-message");

    function renderComparison() {
        if (!compareResults) return;

        const selectedIds = getCompareIds();

        if (selectedIds.length === 0) {
            compareResults.innerHTML =
                "<p>No products selected. Visit Products and click + Compare.</p>";
            return;
        }

        compareResults.innerHTML = selectedIds.map(function (id) {
            const product = findProduct(id);

            return `
                <article class="compare-card">

                    <img src="${product.image}" alt="${product.name}">

                    <span class="product-brand">
                        ${product.brand}
                    </span>

                    <h3>${product.name}</h3>

                    <p><strong>Price:</strong>
                        ${formatPrice(product.price)}
                    </p>

                    <p><strong>Category:</strong>
                        ${product.category}
                    </p>

                    <p><strong>Color:</strong>
                        ${product.color}
                    </p>

                    <p><strong>Material:</strong>
                        ${product.material}
                    </p>

                    <p>${product.description}</p>

                    <button
                        class="small-button remove-compare"
                        data-id="${product.id}"
                        type="button"
                    >
                        Remove
                    </button>

                </article>
            `;
        }).join("");
    }

    if (compareSelect && compareResults) {
        compareSelect.innerHTML = products.map(function (product) {
            return `
                <option value="${product.id}">
                    ${product.name} — ${product.brand}
                </option>
            `;
        }).join("");

        document.getElementById("add-compare").addEventListener(
            "click",
            function () {
                const ids = getCompareIds();
                const id = compareSelect.value;

                if (ids.includes(id)) {
                    compareMessage.textContent =
                        "This product is already selected.";
                    return;
                }

                if (ids.length >= 3) {
                    compareMessage.textContent =
                        "Remove a product before adding another.";
                    return;
                }

                ids.push(id);
                saveCompareIds(ids);

                compareMessage.textContent =
                    "Product added to your comparison list.";

                renderComparison();
            }
        );

        document.getElementById("clear-compare").addEventListener(
            "click",
            function () {
                saveCompareIds([]);

                compareMessage.textContent =
                    "Your comparison list has been cleared.";

                renderComparison();
            }
        );

        compareResults.addEventListener("click", function (event) {
            const button = event.target.closest(".remove-compare");

            if (!button) return;

            const remainingIds = getCompareIds().filter(
                id => id !== button.dataset.id
            );

            saveCompareIds(remainingIds);
            renderComparison();
        });

        renderComparison();
    }


    /* ==================================
       8. CONTACT FORM
    ================================== */

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            document.getElementById("contact-feedback").textContent =
                "Thank you! The form is valid, but this demo does not send messages.";

            contactForm.reset();
        });
    }

});
