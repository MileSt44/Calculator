import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Digit0Component } from './digit0/digit0.component';
import { Digit1Component } from './digit1/digit1.component';
import { Digit2Component } from './digit2/digit2.component';
import { Digit3Component } from './digit3/digit3.component';
import { Digit4Component } from './digit4/digit4.component';
import { Digit5Component } from './digit5/digit5.component';
import { Digit6Component } from './digit6/digit6.component';
import { Digit7Component } from './digit7/digit7.component';
import { Digit8Component } from './digit8/digit8.component';
import { Digit9Component } from './digit9/digit9.component';
import { DecimalComponent } from './decimal./decimal..component';
import { OperatorsubComponent } from './operatorsub/operatorsub.component';
import { OperatoraddComponent } from './operatoradd/operatoradd.component';
import { OperatormulComponent } from './operatormul/operatormul.component';
import { OperatordivComponent } from './operatordiv/operatordiv.component';
import { OperatorpowComponent } from './operatorpow/operatorpow.component';
import { OperatorrootComponent } from './operatorroot/operatorroot.component';
import { OperatorsqrComponent } from './operatorsqr/operatorsqr.component';
import { OperatorcubComponent } from './operatorcub/operatorcub.component';
import { OperatorlogComponent } from './operatorlog/operatorlog.component';
import { CharacterbracketComponent } from './characterbracket/characterbracket.component';
import { OperatorlimComponent } from './operatorlim/operatorlim.component';
import { OperatorequateComponent } from './operatorequate/operatorequate.component';

@NgModule({
  declarations: [
    AppComponent,
    Digit0Component,
    Digit1Component,
    Digit2Component,
    Digit3Component,
    Digit4Component,
    Digit5Component,
    Digit6Component,
    Digit7Component,
    Digit8Component,
    Digit9Component,
    DecimalComponent,
    OperatorsubComponent,
    OperatoraddComponent,
    OperatormulComponent,
    OperatordivComponent,
    OperatorpowComponent,
    OperatorrootComponent,
    OperatorsqrComponent,
    OperatorcubComponent,
    OperatorlogComponent,
    CharacterbracketComponent,
    OperatorlimComponent,
    OperatorequateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
