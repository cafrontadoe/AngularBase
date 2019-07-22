import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbModalModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {NgSelectModule} from "@ng-select/ng-select";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModalModule,
    NgbPaginationModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModalModule,
    NgbPaginationModule,
    NgSelectModule
  ]
})
export class SharedModule { }
