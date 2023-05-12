import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '../services/auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private readonly authService: AuthService,
  ) {
    super({
      usernameField: 'email',
    })
  }

  async validate(documentNumber: string, password: string): Promise<any> {
    const user = await this.authService.validateUserCredentials(
      documentNumber,
      password
    )
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
