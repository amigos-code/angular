import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BiograpghyComponent } from "./biograpghy/biograpghy.component";

import { CollectionsHomeComponent } from "./collections-home/collections-home.component";
import { CompaniesComponent } from "./companies/companies.component";
import { PartnersComponent } from "./partners/partners.component";

const routes: Routes = [
  {
    path: "",
    component: CollectionsHomeComponent,
    children: [
      { path: "", component: BiograpghyComponent },
      { path: "companies", component: CompaniesComponent },
      { path: "partners", component: PartnersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
