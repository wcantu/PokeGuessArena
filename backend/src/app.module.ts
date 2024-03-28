import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FandomService } from './fandom/fandom.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FandomService],
})
export class AppModule {}
