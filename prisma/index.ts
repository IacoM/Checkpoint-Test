import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  
  await prisma.$connect()
  
  await prisma.user.create({
    data: {
        name: 'Gianni',
        email: 'gianni@prisma.com',
        weight: 80,
    }
  })
  
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })