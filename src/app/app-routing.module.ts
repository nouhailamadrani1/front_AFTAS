import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingListComponent } from './components/ranking/ranking-list/ranking-list.component';
import { RankingCreateComponent } from './components/ranking/ranking-create/ranking-create.component';
import { RankingUpdateComponent } from './components/ranking/ranking-update/ranking-update.component';
import { RankingViewComponent } from './components/ranking/ranking-view/ranking-view.component';
import { LevelViewComponent } from './components/level/level-view/level-view.component';
import { LevelUpdateComponent } from './components/level/level-update/level-update.component';
import { LevelCreateComponent } from './components/level/level-create/level-create.component';
import { LevelListComponent } from './components/level/level-list/level-list.component';
import { CompetitionViewComponent } from './components/competition/competition-view/competition-view.component';
import { CompetitionUpdateComponent } from './components/competition/competition-update/competition-update.component';
import { CompetitionCreateComponent } from './components/competition/competition-create/competition-create.component';
import { CompetitionListComponent } from './components/competition/competition-list/competition-list.component';
import { MemberViewComponent } from './components/member/member-view/member-view.component';
import { MemberUpdateComponent } from './components/member/member-update/member-update.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { FishViewComponent } from './components/fish/fish-view/fish-view.component';
import { FishUpdateComponent } from './components/fish/fish-update/fish-update.component';
import { FishCreateComponent } from './components/fish/fish-create/fish-create.component';
import { FishListComponent } from './components/fish/fish-list/fish-list.component';
import { HuntingViewComponent } from './components/hunting/hunting-view/hunting-view.component';
import { HuntingUpdateComponent } from './components/hunting/hunting-update/hunting-update.component';
import { HuntingCreateComponent } from './components/hunting/hunting-create/hunting-create.component';
import { HuntingListComponent } from './components/hunting/hunting-list/hunting-list.component';

const routes: Routes = [
  { path: 'rankings', component: RankingListComponent },
  { path: 'rankings/create', component: RankingCreateComponent },
  { path: 'rankings/update/:id', component: RankingUpdateComponent },
  { path: 'rankings/view/:id', component: RankingViewComponent },
  
  { path: 'levels', component: LevelListComponent },
  { path: 'levels/create', component: LevelCreateComponent },
  { path: 'levels/update/:code', component: LevelUpdateComponent },
  { path: 'levels/view/:code', component: LevelViewComponent },
  
  { path: 'competitions', component: CompetitionListComponent },
  { path: 'competitions/create', component: CompetitionCreateComponent },
  { path: 'competitions/update/:code', component: CompetitionUpdateComponent },
  { path: 'competitions/view/:id', component: CompetitionViewComponent },

  
  
  { path: 'members', component: MemberListComponent },
  { path: 'members/create', component: MemberCreateComponent },
  { path: 'members/update/:num', component: MemberUpdateComponent },
  { path: 'members/view/:num', component: MemberViewComponent },
  
  { path: 'fish', component: FishListComponent },
  { path: 'fish/create', component: FishCreateComponent },
  { path: 'fish/update/:id', component: FishUpdateComponent },
  { path: 'fish/view/:id', component: FishViewComponent },
  
  { path: 'hunting', component: HuntingListComponent },
  { path: 'hunting/create', component: HuntingCreateComponent },
  { path: 'hunting/update/:id', component: HuntingUpdateComponent },
  { path: 'hunting/view/:id', component: HuntingViewComponent },
  { path: 'fishes', component: FishListComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }