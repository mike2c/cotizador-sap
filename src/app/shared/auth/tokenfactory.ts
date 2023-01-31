import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

export function jwtOptionsFactory(tokenService) {
    return {
      tokenGetter: () => {
        return localStorage.getItem("token");
      }
    }
  }
  