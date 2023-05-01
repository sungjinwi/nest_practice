import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { version } from 'os';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';


@Controller('cats')
export class CatsController {
    // creating and returning an instance of CatsService 
    // or returning ther existing instance of singletone if it has already been requested elsewhere
    constructor(private catsService: CatsService) {} 

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }
    
}








// Only controller
/*
@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cashe-Control', 'none')
    @HttpCode(204)
    create(): string {
        return 'This action adds a new cat';
    }

    @Post('cat')
    async createCat(@Body() CreateCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }
    
    
    @Get("a*b")
    findAll(@Req() request: Request):string {
        return 'This action returns all cats';
    }

    @Get("docs")
    @Redirect("http://docs.nestjs.com",302)
    getDocs(@Query('version') version) {
        // if (version && version === '5') {
        if (1) {
            return {url: 'https://docs.nestjs.com/v5/'}
        }
    }

    @Get('promise')
    async findEntire(): Promise<any[]> {
        return ["cat1",'cat2'];
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`
    }

    
    
}
*/