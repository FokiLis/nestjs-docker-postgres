import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  // host: 'localhost',
  port: 5432,
  username: 'pguser',
  password: 'pgpwd4121',
  database: 'db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
