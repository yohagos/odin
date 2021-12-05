import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs';

@Injectable()
export class NameService {

  public xyz: any;

  constructor(public http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public get(message: string) {
    let params = new HttpParams();
    params = params.append("name", message);

    return this.http.get(environment.server + "/name", {observe: "response", params}).pipe(
     map(response => {
      return this.xyz = response.body
     })
    )
  }

  public post(message: string) {
   return this.http.post(environment.server + "/name", {name: message})/* .pipe(
      tap(data => {
        console.log("pipe tap :" + data);
      }) 
    )*/
  }


}
