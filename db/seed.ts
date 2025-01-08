import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';
import { hash } from '@/lib/encrypt';

async function main() {
  const prisma = new PrismaClient();

  // Clear previous data
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // Seed products
  await prisma.product.createMany({ data: sampleData.products });

  // Seed users
  const users = [];
  for (let i = 0; i < sampleData.users.length; i++) {
    const user = sampleData.users[i];
    
    // Hash user password with a fallback key
    const hashedPassword = await hash(user.password);

    // Store user with hashed password
    users.push({
      ...user,
      password: hashedPassword,
    });

    // Log the password and its hash for debugging purposes
    console.log(user.password, hashedPassword);
  }

  // Create users in the database
  await prisma.user.createMany({ data: users });

  console.log('Database seeded successfully!');
}

main();