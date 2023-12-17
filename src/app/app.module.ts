import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TimeFormatPipe } from './models/time-format.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HeadComponent } from './components/head/head.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ScriptComponent } from './components/script/script.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';





@NgModule({
  declarations: [
    SideBarComponent,
    HeadComponent,
    ScriptComponent,
    AppComponent,
    RankingListComponent,
    RankingCreateComponent,
    RankingUpdateComponent,
    RankingViewComponent,
    LevelViewComponent,
    LevelUpdateComponent,
    LevelCreateComponent,
    LevelListComponent,
    CompetitionViewComponent,
    CompetitionUpdateComponent,
    CompetitionCreateComponent,
    CompetitionListComponent,
    MemberViewComponent,
    MemberUpdateComponent,
    MemberCreateComponent,
    MemberListComponent,
    FishViewComponent,
    FishUpdateComponent,
    FishCreateComponent,
    FishListComponent,
    HuntingViewComponent,
    HuntingUpdateComponent,
    HuntingCreateComponent,
    HuntingListComponent,
    
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    MatPaginatorModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
