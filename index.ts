import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // create a user

  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Joy",
  //       email: "JOy@gmail.com",
  //     },
  //   });

  //   console.log(user);

  //   get user

  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //    create an article

  // const article = await prisma.article.create({
  //   data: {
  //     title: "Food matubber",
  //     body: "This is matubber first article ",
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });

  // Create user and article and associate theme
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Matubber",
  //       email: "Matubber@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Food matubber",
  //           body: "this is matubber article ",
  //         },
  //       },
  //     },
  //   });

  const allArticle = await prisma.article.findMany();

  //   const allUser = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });

  //   console.log(allArticle);
  //   console.log(allUser);

  //  loop joy article

  //   allUser.forEach((user) => {
  //     console.log(`User : ${user.name}, email ${user.email}`);
  //     console.log("Article");
  //     user.articles.forEach((article) => {
  //       console.log(`- Title : ${article.title}`);
  //     });
  //     console.log("\n");
  //   });

  //  update the data
  //   const userUpdate = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Joy Matubber",
  //     },
  //   });
  //  console.log(userUpdate);
  // remove the data

  //   const removeArticle = await prisma.article.delete({
  //     where: {
  //       id: 2,
  //     },
  //   });
  console.log(allArticle);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
