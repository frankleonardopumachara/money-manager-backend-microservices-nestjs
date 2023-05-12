import {NestFactory} from '@nestjs/core'
import {MailingMicroserviceModule} from './mailing-microservice.module'
import {Logger} from '@nestjs/common'
import {MicroserviceOptions, Transport} from '@nestjs/microservices'

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		MailingMicroserviceModule,
		{
			transport: Transport.RMQ,
			options: {
				urls: ['amqp://localhost:5672'],
				queue: 'mailing_queue',
				queueOptions: {
					durable: false
				}
			}
		}
	)
	const logger = new Logger('MailingMicroserviceModule')
	logger.log('========================================================')
	logger.log(`Mailing service running on: ${3001}`)
	logger.log('========================================================')
	await app.listen()
}

bootstrap()
