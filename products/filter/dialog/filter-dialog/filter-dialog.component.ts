import { Component, Inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-dialog',
  standalone: true,
  imports: [MatDialogContent,MatCheckboxModule],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss'
})
export class FilterDialogComponent {



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private activatedRoute: ActivatedRoute, private router:Router) {}

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

}
