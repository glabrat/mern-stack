 
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;
}