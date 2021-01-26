import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {TasksComponent}  from './tasks/tasks.component' ;
import {OrderComponent}  from './order/order.component' ;
import {ViewtasksComponent} from './viewtasks/viewtasks.component' ;
import {PurchaseOrderListComponent} from './components/purchase-order-list/purchase-order-list.component' ;
import { UploadfilesComponent } from './components/uploadfiles/uploadfiles.component' ;
import {PurchaseOrderComponent} from './components/purchase-order/purchase-order.component';
import {InputValidationComponent } from './components/input-validation/input-validation.component' ;
import {SearchComponent} from './components/search/search.component' ;
import {VendorUploadFilesComponent} from './components/vendor-upload-files/vendor-upload-files.component';

const routes: Routes = [ 
  {
    path:'',
    component:HomeComponent
  },
{ 
  path:'admin' ,
  component:AdminComponent
},
{
  path:'tasks/:name' ,
  component : TasksComponent
},
{
  path:'orderr/:name',
  component : OrderComponent
},
{
  path : 'viewtasks/:loggedteam' ,
  component : ViewtasksComponent
},
{
  path : 'order/showall' ,
  component : PurchaseOrderListComponent
},
{
  path  : 'file/upload' ,
  component : UploadfilesComponent
},
{
  path  :  'inputvalidation' ,
  component : InputValidationComponent
},
{
  path : 'searchOta' ,
  component : SearchComponent
},
{
  path : 'vendorfile/vendorupload' , 
  component : VendorUploadFilesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
