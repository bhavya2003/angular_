import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { matMenuAnimations } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { filters, singleFilter } from './filterdata';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { bottomwear } from '../../../../../assets/Data/Womenbottomwear';
import { Router } from '@angular/router';
import { ProductService } from '../../../../State/Product/product.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { trends } from '../../../../../assets/Data/trends';
import { MatRadioModule } from '@angular/material/radio';
import { tops } from '../../../../../assets/Data/tops';
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { FilterDialogComponent } from '../../components/products/filter/dialog/filter-dialog/filter-dialog.component';


@Component({
   selector: 'app-products',
   standalone: true,
   imports: [RouterModule, MatIconModule, MatRadioModule, MatButton, MatDialogContent, MatMenuModule, MatDividerModule, CommonModule, MatCheckboxModule, FormsModule, ProductCardComponent],
   templateUrl: './products.component.html',
   styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

   // filterdata:any
   // singleFilterData:any
   // Womenbottomwear:any 
   // products: any;
   // levelThree:any;

   // // products:any

   // constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService:ProductService,private store:Store<AppState>) {}



   // ngOnInit() {
   //   this.filterdata=filters;
   //   this.singleFilterData=this.singleFilterData;
   //   this.Womenbottomwear=bottomwear;

   //   this.activatedRoute.paramMap.subscribe((params)=>{
   //       this.levelThree=params.get("levelThree")
   //       var reqData={
   //         category:params.get("levelThree"),
   //         colors:[],
   //         sizes:[],
   //         minPrice:0,
   //         maxPrice:1000,
   //         minDiscount:0,
   //         pageNumber:0,
   //         pageSize:10,
   //         stock:null
   //       };
   //       this.productService.findProductsByCategory(reqData);
   //       console.log("params",params)
   //     });

   //      this.activatedRoute.queryParams.subscribe(
   //       (params)=>{
   //         const color=params["color"]
   //         const size=params["size"]
   //         const price=params["price"]
   //         const discount=params["discount"]
   //         const stock=params["stock"]
   //         const sort=params["sort"]
   //         const pageNumber=params["pageNumber"]
   //         const minPrice=price?.split("-")[0];
   //         const maxPrice=price?.split("-")[1];

   //         var reqData={
   //         category:this.levelThree,
   //           colors: color?color.join(","):[],
   //           sizes: size,
   //           minPrice:minPrice?minPrice:0,
   //           maxPrice:maxPrice?maxPrice:1000,
   //           minDiscount: discount?discount:0,
   //           pageNumber: pageNumber?pageNumber:0,
   //           pageSize:10,
   //           stock:null,
   //           sort:sort?sort:"price_low"
   //         };

   //         this.productService.findProductsByCategory(reqData)
   //       }
   //      )      




   //     this.store.pipe(select(store=>store.product)).subscribe((product)=>{
   //       this.products=product?.products?.content;
   //       console.log("store data", product.products.content)
   //     });

   // }


   // handleMultipleSelectFilter(value:string, sectionId:string) {
   //   const queryParams = {...this.activatedRoute.snapshot.queryParams}

   //   console.log ("query params",queryParams)

   //   const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];

   //   const valueIndex=filterValues.indexOf(value);

   //   if(valueIndex !=-1){
   //     filterValues.splice(valueIndex,1)
   //   }

   //   else{
   //     filterValues.push(value);
   //   }

   //   if(filterValues.length>0) {
   //     queryParams[sectionId]=filterValues.join(",")
   //   }

   //   else{
   //     delete queryParams[sectionId];
   //   }

   //   this.router.navigate([],{queryParams})

   //   console.log(queryParams)

   // }
//    filterData: any
//    singleFilterData: any
//    Tops: any
//    currentDate = new Date();
//   allowedKeywords = ['top', 'shirt', 'blouse','Top', 'T-shirt']; // Keywords for filtering
//   dynamicTops: any[] = [];
//   combinedTops: any[] = [];

//    constructor( private productService: ProductService, private cdr: ChangeDetectorRef,private activatedRoute: ActivatedRoute, private router: Router, private dialog: MatDialog) {

//    }


//    ngOnInit() {
//       this.filterData = filters;
//       this.singleFilterData = singleFilter
//       this.Tops = tops
//       this.fetchDynamicTops();

//       this.activatedRoute.paramMap.subscribe(
//          (params) => {
//             var reqData = {
//                category: params.get("levelThree"),
//                colors: [],
//                sizes: [],
//                minPrice: 0,
//                maxPrice: 1000,
//                minDiscount: 0,
//                pageNumber: 0,
//                pageSize: 10,
//                stock: null
//             };
//             this.productService.findProductsByCategory(reqData)
//          }
//       )
//    }

//    fetchDynamicTops() {
//       this.productService.getAllProducts().subscribe(
//         (response: any) => {
//           const today = this.getFormattedDate(new Date());
  
//           // Filter products based on creation date and title keywords
//           this.dynamicTops = response.filter((product: any) => {
//             const productDate = this.getFormattedDate(new Date(product.createdAt));
  
//             // Check if the product was created today and has the right title keywords
//             return (
//               productDate === today &&
//               this.allowedKeywords.some(keyword =>
//                 product.title.toLowerCase().includes(keyword)
//               )
//             );
//           });
  
//           // Combine dynamic tops with static data
//           this.combinedTops = [...tops,...this.dynamicTops];
//           console.log('Combined Tops:', this.combinedTops);
  
//           this.cdr.detectChanges(); // Manually trigger change detection
//         },
//         (error: any) => {
//           console.error('Error fetching products:', error);
//         }
//       );
//     }
  
//     // Helper function to format date to 'YYYY-MM-DD' for easier comparison
//     getFormattedDate(date: Date): string {
//       const year = date.getFullYear();
//       const month = (date.getMonth() + 1).toString().padStart(2, '0');
//       const day = date.getDate().toString().padStart(2, '0');
//       return `${year}-${month}-${day}`;
//     }


//    handleMultipleSelectFilter(value: string, sectionId: string) {
//       const queryParams = { ...this.activatedRoute.snapshot.queryParams };

//       console.log("query params", queryParams)
//       // const filterValue=queryParams[sectionId]?

//       const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];

//       const valueIndex = filterValues.indexOf(value);

//       if (valueIndex != -1) {
//          filterValues.splice(valueIndex, 1)
//       }
//       else {
//          filterValues.push(value);
//       }

//       if (filterValues.length > 0) {
//          queryParams[sectionId] = filterValues.join(",")
//       }
//       else {
//          delete queryParams[sectionId];
//       }

//       this.router.navigate([], { queryParams })

//    }

//    handleSingleSelectFilter(value: string, sectionId: string) {
//       const queryParams = { ...this.activatedRoute.snapshot.queryParams };
//       queryParams[sectionId] = value;
//       this.router.navigate([], { queryParams })

//       console.log(queryParams)
//    }

   // this.activatedRoute.queryParams.subscribe(
   //       (params)=>{
   //         const color=params["color"]
   //         const size=params["size"]
   //         const price=params["price"]
   //         const discount=params["discount"]
   //         const stock=params["stock"]
   //         const sort=params["sort"]
   //         const pageNumber=params["pageNumber"]
   //         const minPrice=price?.split("-")[0];
   //         const maxPrice=price?.split("-")[1];

   filterData: any;
   singleFilterData: any;
   Tops: any;
   currentDate = new Date();
   allowedKeywords = ['top', 'shirt', 'blouse', 'Top', 'T-shirt']; // Keywords for filtering
   dynamicTops: any[] = [];
   combinedTops: any[] = [];
 
   constructor(
     private productService: ProductService,
     private cdr: ChangeDetectorRef,
     private activatedRoute: ActivatedRoute,
     private router: Router
   ) {}
 
   ngOnInit() {
     this.filterData = filters; // Assuming filters is defined elsewhere
     this.singleFilterData = singleFilter; // Assuming singleFilter is defined elsewhere
     this.Tops = tops; // Static tops data
     this.fetchDynamicTops();
   }
 
   fetchDynamicTops() {
     this.productService.getAllProducts().subscribe(
       (response: any) => {
         const today = this.getFormattedDate(new Date());
 
         // Filter products based on creation date and title keywords
         this.dynamicTops = response.filter((product: any) => {
           const productDate = this.getFormattedDate(new Date(product.createdAt));
 
           // Check if the product was created today and has the right title keywords
           return (
             productDate === today &&
             this.allowedKeywords.some(keyword =>
               product.title.toLowerCase().includes(keyword)
             )
           );
         });
 
         // Combine dynamic tops with static data
         this.combinedTops = [...tops, ...this.dynamicTops];
         console.log('Combined Tops:', this.combinedTops);
 
         this.cdr.detectChanges(); // Manually trigger change detection
       },
       (error: any) => {
         console.error('Error fetching products:', error);
       }
     );
   }
 
   // Helper function to format date to 'YYYY-MM-DD' for easier comparison
   getFormattedDate(date: Date): string {
     const year = date.getFullYear();
     const month = (date.getMonth() + 1).toString().padStart(2, '0');
     const day = date.getDate().toString().padStart(2, '0');
     return `${year}-${month}-${day}`;
   }
 
   handleMultipleSelectFilter(value: string, sectionId: string) {
     const queryParams = { ...this.activatedRoute.snapshot.queryParams };
     const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];
 
     const valueIndex = filterValues.indexOf(value);
     if (valueIndex != -1) {
       filterValues.splice(valueIndex, 1);
     } else {
       filterValues.push(value);
     }
 
     if (filterValues.length > 0) {
       queryParams[sectionId] = filterValues.join(",");
     } else {
       delete queryParams[sectionId];
     }
 
     this.router.navigate([], { queryParams });
   }
 
   handleSingleSelectFilter(value: string, sectionId: string) {
     const queryParams = { ...this.activatedRoute.snapshot.queryParams };
     queryParams[sectionId] = value;
     this.router.navigate([], { queryParams });
   }



}




