import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({ where: { id } });
};

export const createProduct = async (productName: string, price: number) => {
  return await prisma.product.create({
    data: { productName, price },
  });
};

export const updateProduct = async (
  id: number,
  productName: string,
  price: number
) => {
  return await prisma.product.update({
    where: { id },
    data: { productName, price },
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({ where: { id } });
};
