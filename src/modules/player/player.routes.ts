import { Router } from 'express';
import { createPlayer, getAllPlayers } from './player.controller';

const playerRouter = Router();

playerRouter.post('/', createPlayer);

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Obtiene todos los jugadores
 *     responses:
 *       200:
 *         description: Lista de jugadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 */
playerRouter.get('/all', getAllPlayers);

export default playerRouter;