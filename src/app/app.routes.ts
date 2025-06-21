import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {EducacionFinancieraComponent} from "./public/pages/educacion-financiera/educacion-financiera.component";
import {TasaCrediticiaComponent} from "./public/pages/tasa-crediticia/tasa-crediticia.component";
import {SignupComponent} from "./authentication/components/signup/signup.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {NgModule} from "@angular/core";
import {AddTransactionComponent} from "../AhorrArte/add-transaction/add-transaction.component";
import {RegisterDataComponent} from "../AhorrArte/register-data/register-data.component";
import {RegisterTransactionComponent} from "../AhorrArte/register-transaction/register-transaction.component";
import {AppRecomendationComponent} from "../AhorrArte/app-recomendation/app-recomendation.component";
import {ClientServiceComponent} from "../AhorrArte/client-service/client-service.component";
import {PlanSubscriptionComponent} from "../AhorrArte/plan-subscription/plan-subscription.component";
import {LandingPageComponent} from "../AhorrArte/landing-page/landing-page.component";
import {AboutUsComponent} from "../AhorrArte/landing-page/about-us/about-us.component";
import {PlansComponent} from "../AhorrArte/landing-page/plans/plans.component";
import {FaqComponent} from "../AhorrArte/landing-page/faq/faq.component";
import {HelpServiceComponent} from "../AhorrArte/landing-page/help-service/help-service.component";
import {FeaturesComponent} from "../AhorrArte/landing-page/features/features.component";
import {ContactsComponent} from "../AhorrArte/landing-page/contacts/contacts.component";

export const routes: Routes = [
  { path: 'landing', component: LandingPageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'plans', component: PlansComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'help-service', component: HelpServiceComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '',redirectTo: 'landing', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'educacion-financiera', component: EducacionFinancieraComponent },
  { path: 'tasa-crediticia', component: TasaCrediticiaComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'register-data', component: RegisterDataComponent },
  { path: 'register-transaction', component: RegisterTransactionComponent },
  { path: 'app-recomendation', component: AppRecomendationComponent },
  { path: 'client-service', component: ClientServiceComponent },
  { path: 'suscription', component: PlanSubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

