export const ecommerceProducts = [
  {
    category: "Electronics",
    brand: "Apple",
    productName: "iPhone 13 Pro",
    productCode: "IP13P001",
    stock: 50,
    price: 999.99,
    colors: ["Graphite", "Silver", "Gold"],
    sizes: ["128GB", "256GB", "512GB"],
    image:
      "https://images.unsplash.com/photo-1633053699034-459674171bec?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    discount: 10, // 10% discount
    costPrice: 900.0,
    status: "In Stock",
    description:
      "The latest iPhone with a stunning Super Retina XDR display and powerful A15 Bionic chip.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Clothing",
    brand: "Nike",
    productName: "Men's Running Shoes",
    productCode: "NKSHOE001",
    stock: 100,
    price: 79.99,
    colors: ["Black", "Red", "Blue"],
    sizes: ["US 9", "US 10", "US 11"],
    image:
      "https://freepngimg.com/download/running_shoes/8-2-running-shoes-free-download-png.png",
    discount: 15, // 15% discount
    costPrice: 70.0,
    status: "In Stock",
    description:
      "High-performance running shoes for men with excellent cushioning and support.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Home & Kitchen",
    brand: "KitchenAid",
    productName: "Stand Mixer",
    productCode: "KMIX001",
    stock: 30,
    price: 299.99,
    colors: ["Red", "Blue", "Silver"],
    sizes: ["5-Quart", "6-Quart"],
    image:
      "https://atlas-content-cdn.pixelsquid.com/stock-images/stand-mixer-7G3NBL5-600.jpg",
    discount: 5, //
    costPrice: 280.0,
    status: "In Stock",
    description:
      "A versatile stand mixer for all your baking and cooking needs.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Furniture",
    brand: "IKEA",
    productName: "Bookshelf",
    productCode: "BKSHLF001",
    stock: 20,
    price: 149.99,
    colors: ["White", "Black", "Oak"],
    sizes: ["3-Shelf", "5-Shelf"],
    image:
      "https://thumbs.dreamstime.com/b/blurred-image-many-old-books-bookshelf-library-81867124.jpg",
    discount: 0, // No discount
    costPrice: 120.0,
    status: "In Stock",
    description: "Stylish and practical bookshelf for your home or office.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Beauty",
    brand: `L'Oréal`,
    productName: "Anti-Aging Cream",
    productCode: "LOREAL001",
    stock: 75,
    price: 29.99,
    colors: [],
    sizes: ["50ml"],
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623977908-olay-cream-1565103131.jpg?",
    discount: 20, // 20% discount
    costPrice: 25.0,
    status: "In Stock",
    description:
      "Fight the signs of aging with this advanced anti-aging cream.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Toys & Games",
    brand: "LEGO",
    productName: "Star Wars Millennium Falcon",
    productCode: "LEGOSW001",
    stock: 15,
    price: 149.99,
    colors: ["Gray"],
    sizes: ["10179-Piece Set"],
    image:
      "https://i5.walmartimages.ca/images/Enlarge/871/987/6000201871987.jpg",
    discount: 0, // No discount
    costPrice: 130.0,
    status: "In Stock",
    description:
      "Build the iconic Star Wars Millennium Falcon with this massive LEGO set.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Sports & Outdoors",
    brand: "Columbia",
    productName: "Men's Waterproof Jacket",
    productCode: "COLJKT001",
    stock: 40,
    price: 89.99,
    colors: ["Black", "Blue", "Green"],
    sizes: ["M", "L", "XL"],
    image:
      "https://cdn11.bigcommerce.com/s-r7ihm/images/stencil/1280x1280/products/1503/9730/Lambourne_Black_722_-_Woods_Background_685x900__46903.1608648836.jpg",
    discount: 0, // No discount
    costPrice: 75.0,
    status: "In Stock",
    description:
      "Stay dry and comfortable with this high-quality waterproof jacket for men.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Books",
    brand: "HarperCollins",
    productName: "The Great Gatsby",
    productCode: "GATSBY001",
    stock: 60,
    price: 12.99,
    colors: [],
    sizes: ["Paperback"],
    image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg",
    discount: 30, // 30% discount
    costPrice: 9.0,
    status: "In Stock",
    description:
      "A classic novel by F. Scott Fitzgerald that explores the American Dream in the Roaring Twenties.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
  {
    category: "Gadgets",
    brand: "Samsung",
    productName: "55-Inch 4K Smart TV",
    productCode: "SAMSUNGTV001",
    stock: 25,
    price: 399.99,
    colors: ["Black"],
    sizes: ["55-Inch"],
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/4600691/1.jpg",
    discount: 12, //
    costPrice: 440.0,
    status: "In Stock",
    description:
      "Immerse yourself in stunning 4K resolution and smart features with this Samsung TV.",
    order: Math.floor(Math.random() * 100),
    sales: Math.floor(Math.random() * 20),
    canceledOrders: Math.floor(Math.random() * 5),
  },
];
