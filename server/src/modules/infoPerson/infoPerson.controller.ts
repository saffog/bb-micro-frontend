import { Controller, Get, Param } from '@nestjs/common';

import infoPersons, { InfoPerson } from 'src/amount';

@Controller('infoPerson')
export class InfoPersonController {
  constructor() {}

  @Get()
  async index(): Promise<InfoPerson[]> {
    return infoPersons;
  }

  @Get(':userId')
  async show(@Param('userId') userId: string): Promise<InfoPerson> {
    return infoPersons.find((infoPerson) => infoPerson.userId === userId);
  }
}
