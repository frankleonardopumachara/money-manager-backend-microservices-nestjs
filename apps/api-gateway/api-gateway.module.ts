import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { TOKENS } from '@app/shared'
import { AuthController } from './src/controllers/auth.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TOKENS.MONEY_MANAGER_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['ampq://localhost:5672'],
          queue: 'auth_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [
    AuthController,
  ],
  providers: [],
})
export class ApiGatewayModule {
}
