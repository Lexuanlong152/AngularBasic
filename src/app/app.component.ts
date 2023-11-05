import { Component, } from '@angular/core';

// import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent{
  currentText = "Le Xuan Long";

  onButtonClick=()=>{
    this.currentText= "Parent";
  }
  
  OnBtnClickFormHello = (text: string) =>{
    this.currentText = text;
  }
  // implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  // title = 'my-app';
  // imageSrc ='https://cdn.alongwalk.info/vn/wp-content/uploads/2022/05/09195316/image-cach-lay-net-tay-chuan-nhat-va-cac-goc-anh-dep-sieu-net-khi-chup-phong-canh-165207559677975.jpg';
  // textColor ='tomato';
  
  // ngOnInit(): void {
  //   console.log('OnInit Run')
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("Onchange Run ",{changes})
  // }

  // ngOnDestroy(): void {
  //   console.log('Destroy Run');
  // }

  // ngAfterViewInit(): void {
  //   console.log("View Int Run")
  // }

  // ngAfterContentInit(): void {
  //   console.log("Content Init Run")
  // }

  // ngAfterViewChecked(): void {
  //   console.log("View Checked")
  // }

  // ngAfterContentChecked(): void {
  //   console.log("Contend Checked")
  // }


  // handleBtnClick=()=>{
  //   console.log('click');
  // }

  // items = ['item1', 'item2', 'item3', 'item4'];

  // addItem(newItem: string) {
  //       this.items.push(newItem);
  //   }

  // currentItem = 'Televisions';

  // title = 'reactive-form';

  // countryList = [
  //   {id: 1, name: 'Viet Nam'},
  //   {id: 2, name: 'Canada'},
  //   {id: 3, name: 'USA'},
  // ];
  // contactForm = new FormGroup({
  //   firstname: new FormControl(),
  //   lastname: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //     pincode: new FormControl()
  //   })
  // });
  // get firstname(){
  //   return this.contactForm.get('firstname');
  // }

  // onSubmit() {
  //   console.log(this.contactForm.value);
  // }

  // item =['item1','item2', 'item3', 'item4'];

  // addItem(newItem : string){
  //   this.item.push(newItem);
  // }

  // handleShow = (show : MouseEvent) =>{
  //   show != show;
  // }

  // currentSize = 16;

 
}
