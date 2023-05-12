import {Injectable} from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt'
import {ConfigService} from '@nestjs/config'
import {JwtPayload} from '../domain/symbols'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // convert to boolean
      secretOrKey: config.get<string>('ACCESS_TOKEN_SECRET'),
    })
  }

  async validate(payload: JwtPayload) {
    return payload
  }
}
