import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('requisitions')
@UseGuards(AuthGuard('jwt'))
export class RequisitionsController {}
