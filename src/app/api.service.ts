import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
    
   }

   public fetchData(): Observable<Categories>{
     let headers = new Headers();
     let body = [{"method":"getAllCategory"}];
     this.http.post('http://devpatidar.com/app/administrator/genral_apis/category_apis.php', body)
     .map(response => {
         const tst: string = "slkfjsdl";
         return tst;
        })
     .catch(
      this.handleError
     )
   }

    private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}


class Categories {
  message:string;
  result:any = new Array();
  status: number;
}