import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AssortmentComponent } from './assortment/assortment.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuestionsComponent } from './questions/questions.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PricePageComponent } from './price-page/price-page.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ForOrderComponent } from './for-order/for-order.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ConsultationComponent } from './consultation/consultation.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip'; 

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminComponent } from './admin/admin.component';



const router: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
   redirectTo: 'home',
   pathMatch: "full"
  },
  {
    path: 'gallery',
    loadChildren: () => import('src/app/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {
    path: 'price',
    loadChildren: () => import('src/app/price-page/price-page.module').then(m => m.PricePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('src/app/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('src/app/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('src/app/questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('src/app/consultation/consultation.module').then(m => m.ConsultationModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'menu',
        component: AdminComponent
      },
      {
        path: 'solid_block',
        component: AdminComponent
      },
      {
        path: 'assortment',
        component: AdminComponent
      },
      {
        path: 'wood_work',
        component: AdminComponent
      },
      {
        path: 'advantages',
        component: AdminComponent
      },
      {
        path: 'about_us',
        component: AdminComponent
      },
      {
        path: 'any_questions',
        component: AdminComponent
      },
      {
        path: 'price_list',
        component: AdminComponent
      },
      {
        path: 'contact',
        component: AdminComponent
      },
      {
        path: 'page404',
        component: AdminComponent
      },
      {
        path: 'footer',
        component: AdminComponent
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('src/app/pages/error404-page/error404-page.module').then(m => m.Error404PageModule)
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssortmentComponent,
    CarouselComponent,
    AdvantagesComponent,
    AboutUsComponent,
    QuestionsComponent,
    FooterComponent,
    MenuComponent,
    GalleryComponent,
    MainComponent,
    HomeComponent,
    AboutPageComponent,
    Error404PageComponent,
    PriceListComponent,
    PricePageComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    ForOrderComponent,
    ConsultationComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

    
  ],
  providers: [

    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } },
    BsModalService,
    BsModalRef

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
