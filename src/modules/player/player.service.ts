
import { AppDataSource } from '../../config/data-source';
import { Player } from '../../entity/player';
import { CreatePlayerDTO } from './dto/createPlayer.input';

export class PlayerService {
  private playerRepository = AppDataSource.getRepository(Player);

  async createPlayer(playerData: CreatePlayerDTO): Promise<Player> {
    const player = this.playerRepository.create(playerData);
    return this.playerRepository.save(player);
  }

  async findAll(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  /*async findOne(id: number): Promise<Player | undefined> {
    return this.playerRepository.findOne(id);
  }

  async updatePlayer(id: number, data: Partial<Player>): Promise<Player | null> {
    await this.playerRepository.update(id, data);
    return this.playerRepository.findOne(id);
  }

  async deletePlayer(id: number): Promise<void> {
    await this.playerRepository.delete(id);
  }*/
}