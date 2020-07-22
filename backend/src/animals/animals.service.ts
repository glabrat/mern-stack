import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './interface/animal.interface';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel('Animal') private AnimalModel: Model<Animal>) {}

  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const createdAnimal = new this.AnimalModel(createAnimalDto);
    return createdAnimal.save();
  }

  async findAll(): Promise<Animal[]> {
    return this.AnimalModel.find().exec();
  }

  async getOne(id: string): Promise<Animal> {
    return this.AnimalModel.findById(id).exec();
  }

  async deleteOne(id: string): Promise<any> {
    const animal = await this.AnimalModel.findById(id).exec();
    if (animal) {
        if (!animal.deleteOne()) {
          throw new HttpException(`Couln't delete record`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    } else {
        throw new HttpException(`Couldn't find record`, HttpStatus.NOT_FOUND);
    }
    return true;
  }
}
