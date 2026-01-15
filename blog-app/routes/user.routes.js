import { Router } from 'express';
import {
    login,
    getSingleUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/user.controllers.js';
import { authorizeAdmin, isAuthenticated } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/login', login);
router.get('/:id', isAuthenticated, authorizeAdmin, getSingleUser);
router.get('/', isAuthenticated, authorizeAdmin, getAllUsers);
router.post('/', createUser);
router.put('/:id', isAuthenticated, authorizeAdmin, updateUser);
router.delete('/:id', isAuthenticated, authorizeAdmin, deleteUser);

export default router;
