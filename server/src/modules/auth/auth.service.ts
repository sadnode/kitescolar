import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserView } from '../user/entities/user.view';
import { UserViewService } from '../user/userview.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userViewService: UserViewService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user) {
    const payload = {
      sub: user.numcpf,
      ne: user.numcad,
      name: user.nomfun,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        name: user.nomfun,
        cpf: user.numcpf,
        ne: user.numcad,
      },
    };
  }

  async validateUser(numcpf: number, numcad: number) {
    let user: UserView;

    try {
      user = await this.userViewService.findUser(numcpf);
    } catch (error) {
      return null;
    }

    if (Number(user.numcad) !== numcad) {
      return null;
    }

    return user;
  }
}
