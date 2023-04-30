import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ path: "admin" ,host : ["localhost","www.naver.com"]})
export class AdminController {
    @Get()
    getInfo(@HostParam('account') account: string) {
        return account
    }
}
