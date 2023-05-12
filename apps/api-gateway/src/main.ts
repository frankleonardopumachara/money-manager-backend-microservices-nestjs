import {NestFactory} from '@nestjs/core'
import {ApiGatewayModule} from '../api-gateway.module'
import {Logger} from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(ApiGatewayModule)
	const logger = new Logger('ApiGatewayModule')
	logger.log('========================================================')
	logger.log(`Api Gateway running on: ${3000}`)
	logger.log('========================================================')
	await app.listen(3000)
}

bootstrap()
