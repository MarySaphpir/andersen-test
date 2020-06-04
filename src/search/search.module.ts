import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {SearchComponent} from './search.component';
import {SearchService} from './service/search.service';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [SearchService],
})
export class SearchModule {
}
