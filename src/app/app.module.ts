import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecimalComponent } from './decimal/decimal.component';
import { CharacterbracketComponent } from './characterbracket/characterbracket.component';
import { DigitComponent } from './digit/digit.component';
import { OperatorComponent } from './operator/operator.component';
import { CalculateComponent } from './calculate/calculate.component';

@NgModule({
  declarations: [
    AppComponent,
    DecimalComponent,
    CharacterbracketComponent,
    DigitComponent,
    OperatorComponent,
    CalculateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
