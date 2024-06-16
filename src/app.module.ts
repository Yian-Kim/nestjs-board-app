import { Module } from '@nestjs/common';
import { BoardsController } from './boards/boards.controller';

@Module({
  imports: [],
  controllers: [BoardsController],
})
export class AppModule {}
