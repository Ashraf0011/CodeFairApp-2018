import { Component } from '@angular/core';
import { ProfilePage} from "../profile/profile";
import { SummaryPage} from "../summary/summary";
import { PlanPage} from "../plan/plan";
import { TodayPage} from "../today/today";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodayPage;
  tab2Root = PlanPage;
  tab3Root = SummaryPage;
  tab4Root = ProfilePage;

  constructor() {

  }
  ionViewDidLoad() {
    console.log('trying routes for all tabs pages... ');
  }
}
