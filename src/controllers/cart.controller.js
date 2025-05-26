import Cart from '../dao/models/cart.model.js';

export async function deleteProductFromCart(req, res) {
  const { cid, pid } = req.params;
  try {
    const cart = await Cart.findById(cid);
    if (!cart) return res.status(404).json({ error: 'carrito no encontrado' });

    cart.products = cart.products.filter(item => item.product.toString() !== pid);
    await cart.save();
    res.json({ msg: 'producto eliminado' });
  } catch (e) {
    res.status(500).json({ error: 'error al borrar producto' });
  }
}

export const updateCart = async (req, res) => {
  const { cid } = req.params;
  const { products } = req.body;

  try {
    const cart = await Cart.findById(cid);
    if (!cart) return res.status(404).json({ error: 'no se encontró el carrito' });

    cart.products = products;
    await cart.save();
    res.json({ msg: 'carrito actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'error actualizando carrito' });
  }
};

export const updateProductQty = async (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;

  try {
    const cart = await Cart.findById(cid);
    if (!cart) return res.status(404).json({ error: 'carrito no existe' });

    const item = cart.products.find(p => p.product.toString() === pid);
    if (!item) return res.status(404).json({ error: 'producto no encontrado en el carrito' });

    item.quantity = quantity;
    await cart.save();
    res.json({ msg: 'cantidad actualizada' });
  } catch (err) {
    res.status(500).json({ error: 'error actualizando cantidad' });
  }
};

export const deleteAllProducts = async (req, res) => {
  const { cid } = req.params;

  try {
    const cart = await Cart.findById(cid);
    if (!cart) return res.status(404).json({ error: 'carrito no encontrado' });

    cart.products = [];
    await cart.save();
    res.json({ msg: 'carrito vaciado' });
  } catch (err) {
    res.status(500).json({ error: 'error al vaciar carrito' });
  }
};

export const getCartById = async (req, res) => {
  const { cid } = req.params;

  try {
    const cart = await Cart.findById(cid).populate('products.product');
    if (!cart) return res.status(404).json({ error: 'carrito no encontrado' });

    res.json({ cart });
  } catch (err) {
    res.status(500).json({ error: 'error obteniendo carrito' });
  }
};
