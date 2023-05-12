import { Injectable } from '@nestjs/common'
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices'
import { AUTH } from '@app/shared/events'
import { LoginDto } from '@app/shared/dtos'

@Injectable()
export class AuthService {

  constructor() {
  }

  @MessagePattern(AUTH.VALIDATE_CREDENTIALS)
  validateCredential(
    @Payload() data: LoginDto,
    @Ctx() ctx: RmqContext,
  ) {
    console.log(ctx.getMessage())
  }
}



