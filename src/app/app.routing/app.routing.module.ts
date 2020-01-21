import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HelloComponent } from '../hello.component';

@NgModule({
  declarations: [ HelloComponent ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: HelloComponent },
      { path: '**', redirectTo: 'hello' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
