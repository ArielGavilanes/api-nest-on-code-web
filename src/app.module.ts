import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UsersDataModule } from './users-data/users-data.module';
import { CursosModule } from './cursos/cursos.module';
import { MatriculasModule } from './matriculas/matriculas.module';
import { ContenidoModule } from './contenido/contenido.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TipoContenidoModule } from './tipo-contenido/tipo-contenido.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', `.fileJson.env`],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    UsersDataModule,
    CursosModule,
    MatriculasModule,
    ContenidoModule,
    CategoriasModule,
    TipoContenidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
