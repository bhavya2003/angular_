import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trends } from '../../../../../../../assets/Data/trends';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { filters, singleFilter } from '../../../products/filterdata';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductsCardsComponent } from '../../../../../shared/components/products-cards/products-cards.component';
import { ActivatedRoute,  Router } from '@angular/router';


@Component({
  selector: 'app-trends-on-insta',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatRadioModule,MatMenuModule,MatPaginatorModule,MatCheckboxModule,MatDividerModule,MatIconModule,ProductsCardsComponent],
  templateUrl: './trends-on-insta.component.html',
  styleUrl: './trends-on-insta.component.scss'
})
export class TrendsOnInstaComponent {

   filterData:any
   singleFilterData:any
   instaTrends:any

   constructor(private activatedRoute:ActivatedRoute, private router:Router){

   }


   ngOnInit(){
      this.filterData=filters;
      this.singleFilterData=singleFilter
      this.instaTrends=trends
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
