import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'portfolio', component: PortfolioComponent, title: 'portfolio' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'gallery', component: GalleryComponent, title: 'gallery' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: '**', component: NotfoundComponent, title: 'notfound' },
];
