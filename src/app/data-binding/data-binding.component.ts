import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  message: string = 'Hello';
  isActive : boolean = true;
  userName: string = "Tèo";
  email: string = 'taitai';

  constructor() { }

  ngOnInit(): void {
    
  }

  handleChangeMessage(messageRef: HTMLInputElement){
    // alert('OK')

    // const txtMessage = <HTMLInputElement>document.getElementById('txtMessage')

    // this.message = txtMessage.value
    // console.log('messege', this.message)

    console.log(messageRef)
    this.message = messageRef.value
  }

  handleChangeUserName(evt: any) {
    console.log(evt.target)

    this.userName = evt.target.value
    
  }

}
