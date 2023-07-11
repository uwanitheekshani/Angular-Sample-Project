import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { Injectable, inject } from '@angular/core';

@Injectable()
class userToken{

}

@Injectable()
class permissionsService{
  canActivate(currentUser: userToken, userId: string): boolean{
    return true;
  }
  canMatch(currentUser: userToken): boolean{
    return true;
  }
}

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  return inject(permissionsService).canActivate(inject(userToken), route.params['userId']);
};


