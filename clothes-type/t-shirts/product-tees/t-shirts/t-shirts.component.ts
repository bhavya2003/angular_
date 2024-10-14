import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { filters, singleFilter } from '../../../../../products/filterdata';
import { tees } from '../../../../../../../../../assets/Data/tees';
import { ProductCardTeesComponent } from '../../product-card-tees/product-card-tees/product-card-tees.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-t-shirts',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatRadioModule,MatButton,MatMenuModule,MatDividerModule,CommonModule,MatCheckboxModule, FormsModule,ProductCardTeesComponent],
  templateUrl: './t-shirts.component.html',
  styleUrl: './t-shirts.component.scss'
})
export class TShirtsComponent {

  filterData:any
  singleFilterData:any
  Tees:any

  constructor(private activatedRoute:ActivatedRoute, private router:Router){

  }


  ngOnInit(){
     this.filterData=filters;
     this.singleFilterData=singleFilter
     this.Tees=tees
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
