import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './views/home/home.component';
import { CpfPipe } from './core/pipes/cpf.pipe';
import { UploadComponent } from './components/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    CpfPipe,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
