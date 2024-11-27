import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./navigation/footer/footer.component";
import {HeaderComponent} from "./navigation/header/header.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        RouterOutlet,
        FooterComponent,
        HeaderComponent
    ],
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {
  }


  title = 'sample';

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
