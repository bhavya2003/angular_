import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductCardUnder500Component } from './product-card-under-500/product-card-under-500/product-card-under-500.component';
import { filters, singleFilter } from '../../../products/filterdata';
import {under} from '../../../../../../../assets/Data/under'

@Component({
  selector: 'app-under-500',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatRadioModule,MatButton,MatMenuModule,MatDividerModule,CommonModule,MatCheckboxModule, FormsModule,ProductCardUnder500Component],
  templateUrl: './under-500.component.html',
  styleUrl: './under-500.component.scss'
})
export class Under500Component {

  filterData:any
  singleFilterData:any
  Under500:any

  constructor(private activatedRoute:ActivatedRoute, private router:Router){

  }


  ngOnInit(){
     this.filterData=filters;
     this.singleFilterData=singleFilter
     this.Under500=under
  }


   handleMultipleSelectFilter(value:string, sectionId:string){
     const queryParams={...this.activatedRoute.snapshot.queryParams};

     console.log("query params",queryParams)
     // const filterValue=queryParams[sectionId]?

     const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[];

     const valueIndex=filterValues.indexOf(value);

     if(valueIndex!=-1){
           filterValues.splice(valueIndex,1)
     }
     else{
        filterValues.push(value);
     }

     if(filterValues.length>0){
        queryParams[sectionId]=filterValues.join(",")
     }
     else{
        delete queryParams[sectionId];
     }

     this.router.navigate([],{queryParams})

   }

   handleSingleSelectFilter(value:string, sectionId:string){
     const queryParams={...this.activatedRoute.snapshot.queryParams};
     queryParams[sectionId]=value;
     this.router.navigate([],{queryParams})

     console.log(queryParams)
   }



}
