import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar.component';
import { content} from './content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent {

  category: any;
  @Input() selectedSection: any;

  

   ngOnInit() {
     this.category = content;  // Assigning navigation object to category

     console.log("Navigation Object:", this.category);  // Logging the full navigation object
     console.log("Selected Section:", this.selectedSection);  // Logging selectedSection to ensure it's passed correctly

  //   Ensure selectedSection is a valid key within the category
     if (this.selectedSection && this.category[this.selectedSection.toUpperCase()]) {
       console.log(`Category for selected section (${this.selectedSection}):`, this.category[this.selectedSection.toUpperCase()]);
     } else {
       console.error(`Selected section (${this.selectedSection}) does not exist in navigation.`);
     }
   }


   constructor(private router:Router) {}
    handleNavigate=(path:any)=>{
      this.router.navigate([path])
    }

    getClothingUrl(sectionName: string): string {
      return '/catalogue/clothing/' + sectionName.toLowerCase().replace(/ /g, '-');
    }


   getAccessoriesUrl(sectionName : string): string {
    return '/catalogue/accessories/' + sectionName.toLowerCase().replace(/ /g, '-');
   }

  }

  //  category:any
  //  @Input() selectedSection:any;

  //  ngOnInit() {
  // //   this.category=navigation;

  // //   console.log("selected section", this.selectedSection)
  // // }

  //  category = navigation.CATALOGUE;

  //  constructor() {
  //    console.log('Navigation Object:', this.category); // Check if this logs correctly
  //  }


