import { Component, Input} from '@angular/core';
import { Sms, Resipient } from './sms.model';
import { AppService } from './_services/app.service';
import { AlertService } from './_services/alert.service';




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

  constructor(private appService: AppService, private alertService: AlertService){

  }

  ngOnInit(){

  }

  // send message
  send(){
    this.loading = true;    
   if(this.resipientModel.to == null){
      this.alertService.error('Please input phone number first')
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
      this.alertService.success('You have succesfully sent your message');
      this.reset();     
      console.log('response', this.smsResponse);
    },error =>{
      this.loading=false;
        this.smsError = error
        this.alertService.error('Error Sending the text message');
        // this.reset();
        console.log('error', error);
    })
   }
  }

  reset(){
    this.smsModel.fname = undefined;
    this.smsModel.message = undefined;
    this.smsModel.to = undefined;
    this.resipientModel.to = undefined;
  }



}
