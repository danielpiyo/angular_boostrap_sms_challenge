import { Component, Input} from '@angular/core';
import { Sms, Resipient } from './sms.model';
import { AppService } from './app.service';



@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  smsResponse: any;
  smsError: any;
  loading = false;
  state = 'normal';
  smsModel: Sms = new Sms();
  resipientModel: Resipient = new Resipient()
  title = 'angular-bootstra-challenge';

  constructor(private appService: AppService){

  }

  ngOnInit(){

  }

  // send message
  send(){
    this.loading = true;    
   if(this.resipientModel.to == null){
      alert('Please the enter the Number');
      this.loading = false;
   }
   else{
    console.log(this.smsModel);
    this.smsModel.to = "+254" + this.resipientModel.to;
    this.appService.sendNow(this.smsModel)
    .subscribe((response)=>{
      this.state = 'sent';
      this.loading = false;
      this.smsResponse = response;
      
      console.log('response', this.smsResponse);
    },error =>{
      this.loading=false;
        this.smsError = error
        console.log('error', error);
    })
   }
  }

}
