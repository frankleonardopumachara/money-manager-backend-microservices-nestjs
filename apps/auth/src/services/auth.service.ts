import {Injectable, Logger} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {

	private readonly logger = new Logger('AuthService')

	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) {
	}

	// async validateUserCredentials(email: string, password: string): Promise<User | null> {
	// 	const user: User | null = await this.usersService.findOneByEmail(email)
	// 	if (user && await user.validatePassword(password)) {
	// 		return user
	// 	}
	// 	return null
	// }

	// async login(user: User): Promise<JwtCredentials> {
	// 	// update las login
	// 	await this.usersService.updateLastLogin(user.id)
	//
	// 	const {id: userId, forceToResetPassword} = user
	// 	const {id: partnerId, name, lastName} = user.partner!
	// 	const {id: roleId, code: roleCode} = user.role!
	//
	// 	const payload: JwtPayload = {
	// 		userId,
	// 		email: user.email,
	// 		partnerId,
	// 		name,
	// 		lastName,
	// 		roleId,
	// 		roleCode,
	// 		forceToResetPassword,
	// 	}
	// 	return {
	// 		accessToken: this.jwtService.sign(payload, {
	// 			secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
	// 		}),
	// 	}
	// }

	async initPasswordReset(email: string) {
		// const user = await this.usersService.findOneByEmail(email)
		// this.logger.debug(`user with email $${email} ${user ? 'exists' : 'doest not exists'}`)
		// if (!user) return
		//
		// const token = generateResetToken()
		// await this.usersService.updateResetToken(user.id, token)
		//
		// const link = createResetPasswordLink(token, this.configService)
		//
		// await this.mailService.sendEmailToResetPassword({
		// 	email: user.email,
		// 	name: user.partner!.fullName,
		// 	link,
		// })
	}

	async validateTokenAndResetPasswordOrFail(token: string, newPassword: string): Promise<void> {
		// try {
		// 	const user = await this.usersService.findOneByResetTokenOrNull(token)
		// 	if (user === null) throw new InvalidToken()
		//
		// 	// check token expiration
		// 	if (user.tokenExpiresAt!.isBefore(moment().utc(false))) {
		// 		throw new ExpiredToken()
		// 	}
		//
		// 	await this.usersService.resetPassword(user.id, newPassword)
		//
		// } catch (e) {
		// 	if (e instanceof InvalidToken) {
		// 		throw fromError(e, HttpStatus.BAD_REQUEST)
		// 	}
		// 	if (e instanceof ExpiredToken) {
		// 		throw fromError(e, HttpStatus.BAD_REQUEST)
		// 	}
		// 	throw fromError(e, HttpStatus.INTERNAL_SERVER_ERROR)
		// }
	}
}
