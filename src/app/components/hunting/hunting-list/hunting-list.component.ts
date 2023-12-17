import { Component, OnInit } from '@angular/core';
import { HuntingService } from '../../../services/hunting.service';
import { Hunting } from '../../../models/hunting.model';
import { MemberService } from '../../../services/member.service';
import { CompetitionService } from '../../../services/competition.service';
import { FishService } from '../../../services/fish.service'; 
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-hunting-list',
  templateUrl: './hunting-list.component.html',
  styleUrls: ['./hunting-list.component.css']
})
export class HuntingListComponent implements OnInit {
  huntList: Hunting[] = [];

  constructor(
    private huntingService: HuntingService,
    private memberService: MemberService,
    private competitionService: CompetitionService,
    private fishService: FishService ,
    private toastService: ToastService,
  ) {}
  
  showSuccessToast(): void {
    this.toastService.showSuccess(' operation successfully.');
  }

  ngOnInit(): void {
    this.loadHunts();
  }
 
loadHunts(): void {
  this.huntingService.getAllHuntings().subscribe(
    hunts => {
      const observables = hunts.map(hunt => {
        const memberObs = this.memberService.getMemberByNum(hunt.memberNum);
        const competitionObs = this.competitionService.getCompetitionById(hunt.competitionId);
        const fishObs = this.fishService.getFishById(hunt.fishId);
        return forkJoin({ member: memberObs, competition: competitionObs, fish: fishObs })
          .pipe(
        
            map(details => ({ ...hunt, ...details }))
          );
      });
      forkJoin(observables).subscribe(
        huntsWithDetails => {
          this.huntList = huntsWithDetails;
        },
        error => console.log(error)
      );
    },
    error => console.log(error)
  );
}

  fetchMemberDetails(memberNum: number): void {
    this.memberService.getMemberByNum(memberNum).subscribe(
      member => {
        const hunt = this.huntList.find(h => h.memberNum === memberNum);
        if (hunt) {
          hunt.member = member;
        }
      },
      error => console.log(error)
    );
  }

  fetchCompetitionDetails(competitionId: number): void {
    this.competitionService.getCompetitionById(competitionId).subscribe(
      competition => {
        const hunt = this.huntList.find(h => h.competitionId === competitionId);
        if (hunt) {
          hunt.competition = competition;
        }
      },
      error => console.log(error)
    );
  }

  fetchFishDetails(fishId: number): void {
    this.fishService.getFishById(fishId).subscribe(
      fish => {
        const hunt = this.huntList.find(h => h.fishId === fishId);
        if (hunt) {
          hunt.fish = fish;
        }
      },
      error => console.log(error)
    );
  }

  viewHunt(id: number): void {
    console.log(`View hunting with id ${id}`);
  }

  editHunt(id: number): void {
    console.log(`Edit hunting with id ${id}`);
  }

  deleteHunt(id: number): void {
    this.huntingService.deleteHunting(id).subscribe(
      () => {
        console.log(`Hunt with ID ${id} deleted successfully.`);
        this.loadHunts();
        this.showSuccessToast();
      },
      (error) => {
        console.error(`Error deleting hunt with ID ${id}:`, error);
      }
    );
  }
}
