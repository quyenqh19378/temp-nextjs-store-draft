const { PrismaClient } = require("@prisma/client");
const products = require("../prisma/products.json");

const prisma = new PrismaClient();

async function main() {
    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    });
