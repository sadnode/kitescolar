import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserView } from './entities/user.view';
import { UserController } from './user.controller';
import { UserViewService } from './userview.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserView])],
  controllers: [UserController],
  providers: [UserViewService],
  exports: [UserViewService],
})
export class UserModule {}
