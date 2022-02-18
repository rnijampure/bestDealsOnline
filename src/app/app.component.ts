import { Component, OnInit } from '@angular/core';
import offers from '../assets/offers.json';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sabsesastadeal';
  Offers = offers;
  showFiller = true;
  uniqueArray: any = [];
  selectNavItem = -1;
  OffersFiltered: any = [];
  filteredCatogary= "";
  withCoupons:any = [];
  isChecked:boolean = true;
  //value = false;
  showHideNav() {
    this.showFiller = !this.showFiller;
    this.Offers.forEach((element, index, array) => {
      //this.uniqueArray.push(element.Categories);
      this.uniqueArray = this.uniqueArray.filter(function (
        el: any,
        index: number,
        array: any
      ) {
        return array.indexOf(el) == index;
      });
    });
  }
  ngOnInit(): void {
    this.Offers.forEach((element, index, array) => { 
              this.uniqueArray.push(element.Categories);
    this.uniqueArray = this.uniqueArray.filter(function (
        el: any,
        index: number,
        array: any
      ) {
      return array.indexOf(el) == index;
    
      });
        
     
  
    });
  }
  toggleNav(value: boolean) {
    // console.log("parent" + value)
    this.showFiller = value;

    // Remove the duplicate elements
     if(this.isChecked === true){
    this.Offers.forEach((element, index, array) => {
      //this.uniqueArray.push(element.Categories);
      this.uniqueArray = this.uniqueArray.filter(function (
        el: any,
        index: number,
        array: any
      ) {
        if(el.CouponCode !== ""){
      return array.indexOf(el) == index;
    }
       else{
        return false;
      }
       });
      // }
    });
   } /* (function (el, index, array) {
      return array.indexOf(el) == index;
    }); */
  }
  filterByCategory(value: any, index: number) {
   // console.log(value);
   this.filteredCatogary = value;
     if(this.isChecked === true){
   this.OffersFiltered = this.Offers.filter(function (
      el: any,
      index: number,
      array: any
    ) {
      console.log(el.Categories);
      if(el.CouponCode !== ""){
return el.Categories == value;
      }
      else{
        return false;
      }
    });
     }
 
    this.selectNavItem = index;
  }
  toggleCoupons(){
   // window.alert(this.isChecked)
    //let value = this.filteredCatogary ;
    
          this.withCoupons = this.Offers.filter(function (
        el: any,
        index: number,
        array: any
      ) {
        console.log(el.CouponCode)
        if(el.CouponCode !== ""){
      return array.indexOf(el) == index;
    }
       else{
        return false;
      }
       });
  }
}
