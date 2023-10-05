const products = [
    {
        id: "1",
        name: "Libreta Sirena",
        price: 49,
        category: "Libretas",
        img: "https://memimporta.com.uy/wp-content/uploads/2022/05/Libreta-Sirena.jpg",
        stock: 15,
        description: "¡Inspira la creatividad de tus pequeños con nuestra libreta de diseño de sirena! Perfecta para dibujos, historias y aventuras mágicas. ¡Captura la magia en cada página en blanco!."
    },
    { id: "2", name: "Recetario", price: 300, category: "Recetarios", img: "https://hotmart.s3.amazonaws.com/product_pictures/aa0c42d9-3c61-4893-a3ff-2a09cb85fc10/Disenosintitulo7.png", stock: 30, description: "¡Eleva tus sabores con nuestro recetario personalizado! Organización y estilo en cada página para tus mejores recetas. ¡Cocina con pasión y guarda tus secretos culinarios!"},
    { id: "3", name: "Box Dinosaurio", price: 850, category: "Boxes", img: "https://lasuperpapeleria.com//imagenes_grandes/9788418/978841869770.JPG", stock: 20, description: "¡Viaja atrás en el tiempo con nuestro box temático de dinosaurios! Descubre un mundo prehistórico lleno de diversión y emoción. Cada elemento está diseñado para llevar la magia de los dinosaurios a tu vida cotidiana. ¡Explora y aprende mientras te sumerges en la era de los gigantes!"},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}