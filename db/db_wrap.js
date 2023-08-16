import { PrismaClient } from '@prisma/client';

const
  prisma = new PrismaClient();


export async function getAllUsers(){
  return await prisma.user.findMany({
    include: { name: true, phone: true }
  });
}

export async function addNewUser({ name, phone, ...user }) {
  return await prisma.user.create({
    data: {
      ...user,
      phone: {
        create: { ...phone }
      },
      name: {
        create: { ...name }
      }
    },
    include: { phone: true,name: true }
  });
}

// export async function updateUser(user:User):Promise<User>{
//   return await prisma.user.update({
//     where: {id: user.id},
//     data: user,
//     include: { company: true, address: true }
//   });
// }


/**
 * 
 * @param  id {number}
 * @returns 
 */
export async function deleteUser(id) {
  return await prisma.user.delete({
    where: { id }
  });
}