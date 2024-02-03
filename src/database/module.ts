import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";

const providers = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "postgres",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "password",
        database: "nest",
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

@Module({
  providers,
  exports: providers,
})
export class DatabaseModule {}
