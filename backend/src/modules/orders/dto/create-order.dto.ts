import { IsArray, IsNumber, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsArray()
  @IsString({ each: true })
  productIds: string[];

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  total: number;
}
