import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: {
    email: string;
    password: string;
    fullname: string;
    referenceId: string;
  }) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        fullname: data.fullname,
        referenceId: data.referenceId,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
