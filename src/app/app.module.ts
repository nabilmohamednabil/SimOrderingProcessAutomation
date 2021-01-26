import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common//http';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersService} from './services/users.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { OrderComponent } from './order/order.component';
import { ViewtasksComponent } from './viewtasks/viewtasks.component';
import { MenuComponent } from './menu/menu.component';
import { SmsComponent } from './components/sms/sms.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { UploadfilesComponent } from './components/uploadfiles/uploadfiles.component';
import {FlowService} from './services/FlowService';
import {TrackingOrderService} from './services/TrackingOrderService';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SearchComponent } from './components/search/search.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { VendorUploadFilesComponent } from './components/vendor-upload-files/vendor-upload-files.component'; 
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    TasksComponent,
    OrderComponent,
    ViewtasksComponent,
    MenuComponent,
    SmsComponent,
    PurchaseOrderComponent,
    PurchaseOrderListComponent,
    UploadfilesComponent,
    ProgressbarComponent,
    InputValidationComponent,
    RadiobuttonComponent,
    SearchComponent,
    SearchresultsComponent,
    VendorUploadFilesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressbarModule   
   
  ],
  providers: [UsersService , FlowService , TrackingOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
