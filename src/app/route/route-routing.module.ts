import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ShopComponent } from '../shop/shop.component';
import { ContactComponent } from '../contact/contact.component';
import { CartComponent } from '../cart/cart.component';
import { AdminComponent } from '../admin/admin.component';


const routes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: 'shop',
		component: ShopComponent
	},

	{
		path: 'contact',
		component: ContactComponent
	},

	{
		path: 'cart',
		component: CartComponent
	},


	{
		path: 'admin',
		component: AdminComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouteRoutingModule { }
