import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey', // Troque por uma chave segura em produção
      signOptions: { expiresIn: '1h' },
    }), PrismaModule,
  ],
  providers: [AuthService, JwtStrategy,],
  controllers: [AuthController],
})
export class AuthModule {}
