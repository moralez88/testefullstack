import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './schemas/category.schema';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryDto: CreateCategoryDto): Promise<Category>;
    remove(id: string): Promise<Category>;
}
