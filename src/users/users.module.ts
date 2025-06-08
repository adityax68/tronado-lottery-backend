import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // ✅ required!
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
