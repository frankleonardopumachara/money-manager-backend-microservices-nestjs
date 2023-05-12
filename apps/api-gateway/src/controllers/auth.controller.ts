import { TOKENS } from '@app/shared'
import { Controller, Inject, Post } from '@nestjs/common'
import { ClientRMQ } from '@nestjs/microservices'
import { AUTH } from '@app/shared/events'

@Controller('auth')
export class AuthController {

  constructor(
    @Inject(TOKENS.AUTH_QUEUE)
    private readonly authClient: ClientRMQ,
  ) {
  }

  @Post()
  login() {
    this.authClient.emit(AUTH.VALIDATE_CREDENTIALS, JSON.stringify({}))
  }
}
