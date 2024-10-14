import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router,RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AboutUsComponent } from '../../../feature/components/about-us/about-us.component';




@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButton,MatIcon,FontAwesomeModule,AboutUsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(library: FaIconLibrary, private router:Router) {
    library.addIcons(faFacebook, faInstagram, faTwitter, faLinkedin);
  }

  NavigateTo(path:any) {
    this.router.navigate([path])
  }

}
