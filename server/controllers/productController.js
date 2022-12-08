import ProductService from "../services/productService.js";

export const fetchProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    const products = await ProductService.fetchProducts(qNew, qCategory);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  const { body } = req;
  const newProduct = {
    title: body.title,
    desc: body.desc,
    img: body.img,
    categories: body.categories,
    size: body.size,
    color: body.color,
    price: body.price,
    inStock: body.inStock,
  };
  try {
    const product = await ProductService.createProduct(newProduct);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const newUpdatedProduct = {
    title: body.title,
    desc: body.desc,
    img: body.img,
    categories: body.categories,
    size: body.size,
    color: body.color,
    price: body.price,
    inStock: body.inStock,
  };
  try {
    const updatedProduct = await ProductService.updateProduct(
      id,
      newUpdatedProduct
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductService.deleteProduct(id);
    res.status(200).json("Product deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductService.getProduct(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
