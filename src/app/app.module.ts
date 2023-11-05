import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HelloComponent } from 'src/app/components/helloComponent/hello.component';
// import { HiComponent } from './components/hi/hi.component';
// import { AppItemOutputComponent } from './components/app-item-output/app-item-output.component';
// import { IputItemComponent } from './components/iput-item/iput-item.component';
// import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
// import { SizerComponent } from './components/sizer/sizer.component';
// import { ShowComponent } from './components/show/show.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    // HelloComponent,
    // HiComponent,
    // AppItemOutputComponent,
    // IputItemComponent,
    // FormComponent,
    // SizerComponent,
    // ShowComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
