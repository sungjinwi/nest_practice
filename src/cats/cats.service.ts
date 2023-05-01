import { Inject, Injectable, Optional } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats
    }
}

// Optional provider

/*
 @Injectable()
 export class HttpService<T> {
     constructor(@Optional() @Inject("HTTP_OPTIONAL") private httpClient: T) {}
 }

*/

// Property-based injection

@Injectable()
export class HttpService<T> {
    @Inject('HTTP_OPTION')
    private readonly httpClient: T;
}
