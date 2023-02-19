import { faker } from "@faker-js/faker";
import { addBlog } from "./blog";

async function seedBlog() {
  for (let i = 0; i < 100; i++) {
    const blog = {
      title: faker.internet.domainName(),
      content: faker.lorem.paragraphs(),
      createdBy: faker.internet.userName(),
      createdAt: faker.date.recent()
    };
    addBlog(blog);
  }

  console.log("finish");
}

export { seedBlog };
