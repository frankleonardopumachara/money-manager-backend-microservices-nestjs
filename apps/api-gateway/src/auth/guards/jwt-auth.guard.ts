import {ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common'
import {AuthGuard} from '@nestjs/passport'
import {Reflector} from '@nestjs/core'
import {IS_PUBLIC_KEY} from '../decorators/public.decorator'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const isPublic: boolean = this.reflector.getAllAndOverride<boolean>(
      IS_PUBLIC_KEY, [context.getHandler(), context.getClass()],
    )
    return isPublic ? isPublic : super.canActivate(context)
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException(info)
    }
    return user
  }
}
