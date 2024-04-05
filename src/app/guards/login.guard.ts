import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage-service.service';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth-service.service';


export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const storageService = inject(SessionStorageService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = storageService.getFromSessionStorage('jwt');

  if (token !== '') {
    return true;
  } else {
    authService.successLogin.next(false);
    router.navigate(['auth/login']);
    return false;
  }
};