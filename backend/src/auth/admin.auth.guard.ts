import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest();
    return user.admin
  }
}

@Injectable()
export class SelfOrAdminUserGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean {
    const {user, params} = context.switchToHttp().getRequest()

    return user.admin || params.id === user.id
  }
}