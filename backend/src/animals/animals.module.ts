import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from './schemas/animal.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Animal', schema: AnimalSchema }])],
  controllers: [AnimalsController],
  providers: [AnimalsService]
})
export class AnimalsModule {}
