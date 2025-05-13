import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
    imports: [
        LanguageSwitcherComponent,
        MatToolbar,
        RouterLink
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  /*constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }*/
}
