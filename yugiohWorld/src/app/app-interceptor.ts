import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";



@Injectable()

export class AppInterceptro implements HttpInterceptor{

    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith('/auth')){
            req = req.clone({url:req.url.replace('/auth',environment.apiUrl)})
        }
        
        
        return next.handle(req)
    }
}



export const AppInterceptroProvider :Provider = {
    provide : HTTP_INTERCEPTORS,
    useClass: AppInterceptro,
    multi :true
}