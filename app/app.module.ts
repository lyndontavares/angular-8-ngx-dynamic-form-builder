import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    ReactiveFormsModule //add
  ],
  declarations: [AppComponent, HelloComponent,
    UserPanelComponent //add
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UserPanelComponent //add
  ]
})
export class AppModule { }
