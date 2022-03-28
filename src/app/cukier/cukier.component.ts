import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cukier',
  templateUrl: './cukier.component.html',
  styleUrls: ['./cukier.component.css']
})
export class CukierComponent implements OnInit {
  info?: string= undefined;
  constructor() { }

  ngOnInit(): void {
  }
  cukier = {} as CukierObject
  showResult:boolean = false;
  test:any;

  calculateSugar(myForm:any){
    this.showResult= true;
    let c= Number(this.cukier.sugar);
    
    if(c<=99)
    {
      //return('OK')
      this.info='OK';
    }
    if(c>99 && c<=125)
    {
      //return('Low');
      this.info='Low';
    }
    if(c>125)
    {
      //return('D')
      this.info='D';
    }
    return myForm;

  }
}
  
export interface CukierObject{
sugar:number;
info:string;

}


