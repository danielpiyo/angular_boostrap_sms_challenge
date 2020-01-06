import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sms } from './sms.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

//   send sms
sendNow(smsModel:Sms){
    return this.http.post(`${environment.baseUrl}/send`, smsModel);
}

}
