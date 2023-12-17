import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../../../services/member.service';
import { CompetitionService } from '../../../services/competition.service';
import { RankingService } from '../../../services/ranking.service';
import { ToastService } from '../../../services/toast.service';
@Component({
  selector: 'app-ranking-create',
  templateUrl: './ranking-create.component.html',
  styleUrls: ['./ranking-create.component.css']
})
export class RankingCreateComponent implements OnInit {
  rankingForm: FormGroup;
  members: any[] = [];
  competitions: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private competitionService: CompetitionService,
    private rankingService: RankingService,
    private toastService: ToastService
  ) {
    this.rankingForm = this.formBuilder.group({
      memberId: ['', Validators.required],
      competitionId: ['', Validators.required],
      rank: [0],
      score: [0]
    });
  }

  showSuccessToast(): void {
    this.toastService.showSuccess(' operation successful <3.');
  }

  ngOnInit(): void {
    this.loadMembers();
    this.loadCompetitions();
  }

  loadMembers(): void {
    this.memberService.getAllMembers().subscribe(
      (data) => {
        this.members = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadCompetitions(): void {
    this.competitionService.getAllCompetitions().subscribe(
      (data: any[]) => {
        console.log('All Competitions:', data);
        const currentDate = new Date();
        this.competitions = data.filter(comp => {
          const announcementDate = new Date(comp.date);
          const startDate = new Date(comp.date);
          const endDate = new Date(comp.date);
          const startTime: { hours: number, minutes: number } = this.parseTime(comp.startTime);
          const endTime: { hours: number, minutes: number } = this.parseTime(comp.endTime);
          startDate.setHours(startTime.hours, startTime.minutes, 0, 0);
          endDate.setHours(endTime.hours, endTime.minutes, 0, 0);
          return currentDate < announcementDate && currentDate < startDate && currentDate < endDate;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  parseTime(timeString: string): { hours: number, minutes: number } {
    const [hoursStr, minutesStr] = timeString.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    return { hours, minutes };
  }

  submitRanking(): void {
    if (this.rankingForm.valid && this.competitions.length > 0) {
      const rankingData = this.rankingForm.value;
      console.log(`View member with number ${rankingData}`);
      this.rankingService.saveRanking(rankingData).subscribe(
        (createdRanking) => {
          console.log('Ranking created successfully:', createdRanking);
          this.showSuccessToast();
        },
        (error) => {
          console.error('Error creating ranking:', error);
        }
      );
    } else {
      console.error('Form is invalid or competitions data is not loaded yet.');
    }
  }
}
