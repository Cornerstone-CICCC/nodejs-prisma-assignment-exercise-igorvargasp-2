import { Request, Response } from "express";
import * as ProductModel from "./product.model.js";

export const getAll = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await ProductModel.getProductById(id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { productName, price } = req.body;
    const product = await ProductModel.createProduct(productName, price);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { productName, price } = req.body;
    const product = await ProductModel.updateProduct(id, productName, price);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await ProductModel.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
