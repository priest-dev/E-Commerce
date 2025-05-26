import { Router } from 'express';
import {
  deleteProductFromCart,
  updateCart,
  updateProductQty,
  deleteAllProducts,
  getCartById
} from '../controllers/cart.controller.js';

const router = Router();

router.delete('/:cid/products/:pid', deleteProductFromCart);
router.put('/:cid', updateCart);
router.put('/:cid/products/:pid', updateProductQty);
router.delete('/:cid', deleteAllProducts);
router.get('/:cid', getCartById);

export default router;
