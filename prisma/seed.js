const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function seedProducts() {
  try {

      await prisma.products.create({
        data: {
            category: "Rugs", 
            title: "Multi-White Base",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam. Dictum fusce ut placerat orci nulla pellentesque dignissim. Nulla aliquet enim tortor at auctor urna nunc id cursus. Leo vel orci porta non pulvinar neque laoreet. Pretium quam vulputate dignissim suspendisse in est ante. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Rhoncus urna neque viverra justo nec. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Semper auctor neque vitae tempus. Enim nec dui nunc mattis enim. Nunc sed velit dignissim sodales ut. Tempor orci dapibus ultrices in iaculis nunc sed.",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam." , 
            price: 1685,
            discount: 10, 
            length: 5.4,
            width: 7.4,
            soldOut: true,
            priceId:"FDSAFD",
            ThumbnailImage: "/rug1.jpg",
            images: [
                "/Designer (1).png",
                "/Designer (4).png",
                "/Designer (5).png",
                "/Designer (6).png"
            ]
        },
      });

      
      await prisma.products.create({
        data: {
            category: "Rugs", 
            title: "Multi-White Base",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam. Dictum fusce ut placerat orci nulla pellentesque dignissim. Nulla aliquet enim tortor at auctor urna nunc id cursus. Leo vel orci porta non pulvinar neque laoreet. Pretium quam vulputate dignissim suspendisse in est ante. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Rhoncus urna neque viverra justo nec. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Semper auctor neque vitae tempus. Enim nec dui nunc mattis enim. Nunc sed velit dignissim sodales ut. Tempor orci dapibus ultrices in iaculis nunc sed.",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam." , 
            price: 1685,
            discount: 10, 
            length: 5.4,
            width: 7.4,
            soldOut: true,
            priceId:"FDSAFD",

            ThumbnailImage: "/rug1.jpg",
            images: [
                "/Designer (1).png",
                "/Designer (4).png",
                "/Designer (5).png",
                "/Designer (6).png"
            ]
        },
      });

      
      await prisma.products.create({
        data: {
            category: "Rugs", 
            title: "Multi-White Base",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam. Dictum fusce ut placerat orci nulla pellentesque dignissim. Nulla aliquet enim tortor at auctor urna nunc id cursus. Leo vel orci porta non pulvinar neque laoreet. Pretium quam vulputate dignissim suspendisse in est ante. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Rhoncus urna neque viverra justo nec. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Semper auctor neque vitae tempus. Enim nec dui nunc mattis enim. Nunc sed velit dignissim sodales ut. Tempor orci dapibus ultrices in iaculis nunc sed.",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam." , 
            price: 1685,
            discount: 10, 
            length: 5.4,
            width: 7.4,
            soldOut: true,
            priceId:"FDSAFD",

            ThumbnailImage: "/rug1.jpg",
            images: [
                "/Designer (1).png",
                "/Designer (4).png",
                "/Designer (5).png",
                "/Designer (6).png"
            ]
        },
      });

      
      await prisma.products.create({
        data: {
            category: "Rugs", 
            title: "Multi-White Base",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam. Dictum fusce ut placerat orci nulla pellentesque dignissim. Nulla aliquet enim tortor at auctor urna nunc id cursus. Leo vel orci porta non pulvinar neque laoreet. Pretium quam vulputate dignissim suspendisse in est ante. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Rhoncus urna neque viverra justo nec. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Semper auctor neque vitae tempus. Enim nec dui nunc mattis enim. Nunc sed velit dignissim sodales ut. Tempor orci dapibus ultrices in iaculis nunc sed.",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam." , 
            price: 1685,
            discount: 10, 
            length: 5.4,
            width: 7.4,
            soldOut: true,
            priceId:"FDSAFD",

            ThumbnailImage: "/rug1.jpg",
            images: [
                "/Designer (1).png",
                "/Designer (4).png",
                "/Designer (5).png",
                "/Designer (6).png"
            ]
        },
      });

      
      await prisma.products.create({
        data: {
            category: "Rugs", 
            title: "Multi-White Base",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam. Dictum fusce ut placerat orci nulla pellentesque dignissim. Nulla aliquet enim tortor at auctor urna nunc id cursus. Leo vel orci porta non pulvinar neque laoreet. Pretium quam vulputate dignissim suspendisse in est ante. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Rhoncus urna neque viverra justo nec. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Semper auctor neque vitae tempus. Enim nec dui nunc mattis enim. Nunc sed velit dignissim sodales ut. Tempor orci dapibus ultrices in iaculis nunc sed.",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam." , 
            price: 1685,
            discount: 10, 
            length: 5.4,
            width: 7.4,
            soldOut: true,
            priceId:"FDSAFD",

            ThumbnailImage: "/rug1.jpg",
            images: [
                "/Designer (1).png",
                "/Designer (4).png",
                "/Designer (5).png",
                "/Designer (6).png"
            ]
        },
      });

      
      await prisma.products.create({
        data: {
            category: "Rugs", 
            title: "Multi-White Base",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam. Dictum fusce ut placerat orci nulla pellentesque dignissim. Nulla aliquet enim tortor at auctor urna nunc id cursus. Leo vel orci porta non pulvinar neque laoreet. Pretium quam vulputate dignissim suspendisse in est ante. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Rhoncus urna neque viverra justo nec. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Semper auctor neque vitae tempus. Enim nec dui nunc mattis enim. Nunc sed velit dignissim sodales ut. Tempor orci dapibus ultrices in iaculis nunc sed.",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Mi quis hendrerit dolor magna. Cras tincidunt lobortis feugiat vivamus at. Commodo odio aenean sed adipiscing diam." , 
            price: 1685,
            discount: 10, 
            length: 5.4,
            width: 7.4,
            soldOut: true,
            ThumbnailImage: "/rug1.jpg",
            priceId:"FDSAFD",
            images: [
                "/Designer (1).png",
                "/Designer (4).png",
                "/Designer (5).png",
                "/Designer (6).png"
            ]
        },
      });
      
      // Similarly for the remaining items...
      
      await prisma.categoryPage.create({
        data: {
          name: "Rugs",
          description: "Moroccan rugs stand out for their impeccable quality, woven with locally sourced materials like wool, cotton, and recycled fabric, each rug telling a story of its origins. Crafted by Berber artisans who preserve ancestral techniques, these rugs are more than decor—they're a testament to tradition, creativity, and strong familial bonds. With vibrant colors, intricate patterns, and symbolic motifs, Moroccan rugs not only beautify spaces but also carry the rich heritage and narratives of the Berber tribes.",
          images: "/rugg.jpg"
        
        },
      });



  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();