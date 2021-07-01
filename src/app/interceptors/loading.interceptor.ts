import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Set loading true
    this.loader.setLoading(true, request.url);

    return next.handle(request).pipe(delay(500)).pipe(catchError((err: HttpErrorResponse) => {
      this.loader.setLoading(false, request.url);
      return throwError(err);
    })).pipe(map((res: HttpEvent<any>) => {
      //Set loading false only for complete request, not preflight requests
      if (res instanceof HttpResponse) this.loader.setLoading(false, request.url);
      return res;
    }));
  }
}
