import Product from '../dao/models/product.model.js';

export const getProducts = async (req, res) => {
  try {
    const { limit = 10, page = 1, sort, query } = req.query;
    let filter = {};

    if (query) {
      if (query === 'available') {
        filter.stock = { $gt: 0 };
      } else {
        filter.category = query;
      }
    }

    let sortOptions = {};
    if (sort === 'asc') sortOptions.price = 1;
    else if (sort === 'desc') sortOptions.price = -1;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sortOptions,
      lean: true
    };

    const result = await Product.paginate(filter, options);

    res.json({
      status: 'success',
      payload: result.docs,
      totalPages: result.totalPages,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      page: result.page,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevLink: result.hasPrevPage ? `?page=${result.prevPage}` : null,
      nextLink: result.hasNextPage ? `?page=${result.nextPage}` : null
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Algo salio mal 😓' });
  }
};

export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json({
      status: 'success',
      payload: newProduct
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};