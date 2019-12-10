import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { TranslateModule } from '@ngx-translate/core';
import { HarborLibraryModule } from "../../../lib/harbor-library.module";

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    TranslateModule,
    HarborLibraryModule
  ]
})
export class SummaryModule { }
