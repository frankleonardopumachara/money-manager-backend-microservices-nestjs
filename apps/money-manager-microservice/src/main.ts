import {NestFactory} from '@nestjs/core'
import {MoneyManagerMicroserviceModule} from './money-manager-microservice.module'
import {Logger} from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(MoneyManagerMicroserviceModule)
	const logger = new Logger('MoneyManagerMicroserviceModule')
	logger.log('========================================================')
	logger.log(`Money Manager service running on: ${3002}`)
	logger.log('========================================================')
	await app.listen(3002)
}

bootstrap()
