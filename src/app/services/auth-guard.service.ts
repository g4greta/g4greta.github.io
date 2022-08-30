import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private authService: AuthenticationService;

    constructor(
        public authenticationService: AuthenticationService) {
        this.authService = authenticationService;
    }

    public async canActivate(): Promise<boolean> {
      return this.authService.isAuthenticated();
    }

}
