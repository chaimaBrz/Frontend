import { Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { FullComponent } from './shared/components/layout/full/full.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { full } from './shared/routes/full';
import { content } from './shared/routes/routes/routers';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddProductComponent } from './components/e-commerce/add-product/add-product.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "http://localhost:4200/e-commerce/product-list",
    component: DashboardComponent,
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "",
    component: ContentComponent,
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: "",
    component: FullComponent,
    canActivate: [AdminGuard],

    children: full,
  },
  {
    path: "**",
    redirectTo: "error-page/error-page1",
  },
  {
  path: 'e-commerce/add-product',
  component: AddProductComponent
}

];
