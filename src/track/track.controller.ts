import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('/track')
export class TrackController {
  create() {}

  @Get()
  getAll() {
    return 'WORK';
  }

  getOne() {}

  delete() {}
}
