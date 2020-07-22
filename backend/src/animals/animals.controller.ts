import { Body, Controller, Get, Post, Param, Delete, UsePipes } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Animal } from './interface/animal.interface';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return await this.animalsService.create(createAnimalDto);
  }

  @Get()
  async findAll(): Promise<Animal[]> {
    return this.animalsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return this.animalsService.getOne(id);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id) {
    return await this.animalsService.deleteOne(id);
  }
}