import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modal-terms',
    loadChildren: () => import('./pages/modal-terms/modal-terms.module').then( m => m.ModalTermsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'entry-form',
    loadChildren: () => import('./pages/entry-form/entry-form.module').then( m => m.EntryFormPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'otp-reset-password',
    loadChildren: () => import('./pages/otp-reset-password/otp-reset-password.module').then( m => m.OtpResetPasswordPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'register-general',
    loadChildren: () => import('./pages/register-general/register-general.module').then( m => m.RegisterGeneralPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reservations',
    loadChildren: () => import('./pages/reservations/reservations.module').then( m => m.ReservationsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'balance',
    loadChildren: () => import('./pages/balance/balance.module').then( m => m.BalancePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then( m => m.RatingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./pages/personal-info/personal-info.module').then( m => m.PersonalInfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bank-info',
    loadChildren: () => import('./pages/bank-info/bank-info.module').then( m => m.BankInfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'photos-videos',
    loadChildren: () => import('./pages/photos-videos/photos-videos.module').then( m => m.PhotosVideosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'description',
    loadChildren: () => import('./pages/description/description.module').then( m => m.DescriptionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rates',
    loadChildren: () => import('./pages/rates/rates.module').then( m => m.RatesPageModule),
    canActivate: [AuthGuard]
  }

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
