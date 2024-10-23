import { Request, Response } from 'express';
import { PlayerService } from '../player/player.service';
import { CreatePlayerDTO } from '../player/dto/createPlayer.input';

const playerService = new PlayerService();

export const createPlayer = async (req: Request, res: Response) => {
  const playerData: CreatePlayerDTO = req.body;
  try {
    const player = await playerService.createPlayer(playerData);
    res.status(201).json(player);
  } catch (error) {
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'Unknown error occurred' });
      }
  }
};

export const getAllPlayers =async (req: Request, res: Response) => {
    try {
        const players = await playerService.findAll();
        res.status(200).json(players);
      } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
          } else {
            res.status(400).json({ message: 'Unknown error occurred' });
          }
      }
    };
