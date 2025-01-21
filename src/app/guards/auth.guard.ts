import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { isTokenValid, tokenGetter } from '../utils/token.utils';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = tokenGetter();

  if (token && isTokenValid(token)) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
