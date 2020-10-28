import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NavController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./intro-page/intro-page.module').then( m => m.IntroPagePageModule)
  },
  {
    path: 'bogorodica',
    loadChildren: () => import('./places/bogorodica/bogorodica.module').then(m => m.BogorodicaPageModule)
  },
  {
    path: 'kitino-kale',
    loadChildren: () => import('./places/kitino-kale/kitino-kale.module').then(m => m.KitinoKalePageModule)
  },
  {
    path: 'georgija',
    loadChildren: () => import('./places/georgija/georgija.module').then(m => m.GeorgijaPageModule)
  },
  {
    path: 'museum',
    loadChildren: () => import('./places/museum/museum.module').then(m => m.MuseumPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./mapPages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
  },
  {
    path: 'all-place',
    loadChildren: () => import('./mapPages/all-place/all-place.module').then(m => m.AllPlacePageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./mapPages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
  },
  {
    path: 'all-place',
    loadChildren: () => import('./mapPages/all-place/all-place.module').then(m => m.AllPlacePageModule)
  },
  {
    path: 'new-note',
    loadChildren: () => import('./new-note/new-note.module').then( m => m.NewNotePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
      private navCtrl: NavController,
      private storage: Storage,
      private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.storage.get('exploreKicevo.introOpened').then((data: any) => {
        if (data) {
          this.navCtrl.navigateRoot('/tabs');
        } else {
          this.navCtrl.navigateRoot('/');
        }
      });
    });
  }
}
