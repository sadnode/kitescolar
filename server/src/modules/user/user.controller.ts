import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserViewService } from './userview.service';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userViewService: UserViewService) {}

  @Get()
  async findOne(@Body() numcpf: number) {
    return this.userViewService.findOne(numcpf);
  }
}
