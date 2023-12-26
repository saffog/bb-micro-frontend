import { Module } from '@nestjs/common';

import { InfoPersonController } from './infoPerson.controller';

@Module({
  controllers: [InfoPersonController],
})
export class InfoPersonModule {}
