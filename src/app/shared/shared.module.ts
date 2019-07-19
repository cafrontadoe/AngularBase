import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbModalModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule} from "@ngx-translate/core";
import {NgSelectModule} from "@ng-select/ng-select";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModalModule,
    NgbPaginationModule,
    TranslateModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModalModule,
    NgbPaginationModule,
    TranslateModule,
    NgSelectModule
  ]
})
export class SharedModule { }
