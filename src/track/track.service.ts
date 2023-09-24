import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackService {
  // ф-я для створення трека
  async create() {}

  // ф-я для отримання всіх треків з бази даних
  async getAll() {}

  // ф-я яку ми будемо викор. коли нажмемо на откремий трек і відкриється сторінка з детальним описом трека
  async getOne() {}

  // ф-я для видалення трека
  async delete() {}
}
