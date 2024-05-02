const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "",
        description: "",
        price: 899,
        created_at: new Date(),
        category: "rug",
        highlight: "Immerse yourself in the rich cultural heritage of Moroccan craftsmanship with our exquisite handwoven rug. Made with 100% natural wool, its captivating design features intricate blue patterns against a pristine white background, evoking a sense of timeless elegance and sophistication. Woven decades ago and passed down through generations, this rug carries tales of tradition and kinship, waiting to become a cherished heirloom in your home. Elevate your décor with its unique blend of authenticity and artistry, while supporting over 1000 skilled craftswomen and making a sustainable choice for your space. As both a stunning addition to your home and a wise investment for the future, this rug embodies beauty, tradition, and value in every stitch.",
        discount: 10,
        length: 9,
        width: 9,
        soldOut: false,
        ThumbnailImage: "",
        images: [],
        priceId: "jfsdajkfds"
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedRug(name, thumbnailImage, images) {
  try {
    await prisma.products.create({
      data: {
        title: name,
        description: "",
        price: 190,
        created_at: new Date(),
        category: "poufs",
        highlight: "Indulge in the exquisite craftsmanship of our Moroccan pom pom blanket, meticulously woven and hand-colored to perfection. Ideal for adding a cozy touch to your home, whether draped over your bed or sofa. This enchanting cover promises to elevate the ambiance of your bedrooms and nurseries with its irresistibly soft and warm textures. These Moroccan pom pom throws are a testament to the Berber artisans' dedication from Marrakesh. Crafted with care using traditional loom techniques, they embody the essence of Berber craftsmanship. A delightful present for your cherished ones! Crafted from 100% handspun cotton and meticulously hand-loomed, each piece is a testament to the skilled hands of Marrakesh artisans.",
        discount: 15,
        length: 8.5,
        width: 6.5,
        soldOut: false,
        ThumbnailImage: thumbnailImage,
        images: images,
        priceId: "temp"
      },
    });
    console.log(`"${name}" rug seeded successfully.`);
  } catch (error) {
    console.error(`Error seeding "${name}" rug:`, error);
  }
}

async function seedReview(productName, customerName, date, description, images) {
  try {
    await prisma.review.create({
      data: {
        productName: productName,
        customerName: customerName,
        date: date,
        description: description,
        images: images,
      },
    });
    console.log(`Review for "${productName}" seeded successfully.`);
  } catch (error) {
    console.error(`Error seeding review for "${productName}":`, error);
  }
}

// Seed reviews
seedReview(
  "Midnight Mosaic",
  "David Tran",
  "2023-06-15",
  "Really nice, and super thick and comfy",
  []
);

seedReview(
  "Emerald Elegance",
  "Fatima Ahmed",
  "2023-09-28",
  "In love with this rug the  green tones match my walls and bring come togather  well in my home.",
  []
);

seedReview(
  "Earthy Tones Tapestry",
  "Konan Bux",
  "2023-11-12",
  "Adds warmth and character.",
  []
);

seedReview(
  "Moroccan Nightscape",
  "Aisha Khan",
  "2024-02-19",
  "Nice bright  colors and intricate patterns i made it the centerpiece in myt my room.",
  []
);

seedReview(
  "Sapphire Skies",
  "Emily Taylor",
  "2023-08-07",
  "I Like having a piece of the sky in my living room.",
  []
);

seedReview(
  "Vintage Vineyard",
  "Miguel Rodriguez",
  "2024-01-03",
  "Very Large and warm",
  []
);

seedReview(
  "Coral Coastline",
  "Jessica Lee",
  "2023-10-20",
  "Reminds me of lazy days by the ocean! Coral tones bring a pop of color to my neutral decor.",
  []
);

seedReview(
  "Desert Dreamland",
  "Ahmed Al-Mansoori",
  "2023-07-05",
  "Warm hues and intricate patterns, super nice",
  []
);

seedReview(
  "Azure Arabesque",
  "Sarah Mylarlend",
  "2024-03-15",
  "Breathtaking azure blue! Arabesque design adds sophistication to my space.",
  []
);

seedReview(
  "Orchid Oasis",
  "Linda Nguyen",
  "2023-12-10",
  "So pretty, it has a nice sheen and makes my room so bright",
  []
);

seedReview(
  "Rustic Retreat",
  "Laura Vanderkemp",
  "2023-09-03",
  "I love this for my living space, my dog has claimed it as his new fav spot haha",
  []
);

seedReview(
  "Coastal Charm",
  "Olivia J Anderson",
  "2024-04-18",
  "OMG the blue hues and the patterns are so pretty, and to thing it was handmade.",
  []
);







