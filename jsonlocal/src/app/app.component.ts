import { Component } from '@angular/core';
import countries from './files/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-file-read-angular';
  public countryList:{name:string, code:string}[] = countries;
  selectedCountry: string = '';
selectedCode:string='';
expression:any='';
expression1:any='';
y:any='';
x:any='';
x1:any='';
x2:any='';
x3:any='';
x4:any='';
x5:any='';
  //event handler for the select element's change event

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedCountry = event.target.value;
    
  }
  
  selectChangeHandler2 (event: any) {
    //update the ui
    this.selectedCode = event.target.value;
//      if(this.selectedCode=='Delhi'){
// // function displaydelhi();
// alert('delhi is selected');
//      }
  }
  displayValues1(){
  
    this.expression='true';
  }
  displayValues2(){
  
  this.expression1='true';
  // this.x=document.getElementById('marker');
  // displaydelhi(){
    if(this.selectedCode=='Delhi' && this.selectedCountry=='India'){
      // function displaydelhi();
      // alert('delhi is selected');
      this.x=document.getElementById('marker1');
      this.x.style.visibility='visible';}

    if(this.selectedCode=='Washington D.C' &&this.selectedCountry=='USA')
      {   this.x1=document.getElementById('marker2');
      this.x1.style.visibility='visible';}

      if(this.selectedCode=='Ottawa'&& this.selectedCountry=='Canda')
      {   this.x2=document.getElementById('marker3');
      this.x2.style.visibility='visible';}

      if(this.selectedCode=='Beijing'&&this.selectedCountry=='China')
      {   this.x3=document.getElementById('marker4');
      this.x3.style.visibility='visible';}

      if(this.selectedCode=='Moscow'&&this.selectedCountry=='Russia')
      {   this.x4=document.getElementById('marker5');
      this.x4.style.visibility='visible';}
      
      if(this.selectedCode=='Wellington'&&this.selectedCountry=='New-zealand')
      {   this.x5=document.getElementById('marker6');
      this.x5.style.visibility='visible';}

           }
           
           
  //   this.x=document.getElementById('marker');
  //  this.x.style.visibility='visible';}
  // }

  resetValues(){
    this.expression='';
    this.expression1='';
    // var y=document.getElementsByClassName("markers");
  //  this.y.style.visibility='hidden';
  
   this.x.style.visibility='hidden';
   this.x1.style.visibility='hidden';
   this.x2.style.visibility='hidden';  
   this.x3.style.visibility='hidden';
   this.x4.style.visibility='hidden';
   this.x5.style.visibility='hidden';
 }
//  loadPointer(){
  
//  }
}


 