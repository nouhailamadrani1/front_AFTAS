// ranking-create.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../../../services/member.service'; // Adjust this import based on your actual service path
import { CompetitionService } from '../../../services/competition.service'; // Adjust this import based on your actual service path
import { RankingService } from '../../../services/ranking.service'; // Adjust this import based on your actual service path

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
    private rankingService: RankingService
  ) {
    this.rankingForm = this.formBuilder.group({
      memberId: ['', Validators.required],
      competitionId: ['', Validators.required],
      rank: [''],
      score: ['']
    });
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
      (data) => {
        this.competitions = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  submitRanking(): void {
    if (this.rankingForm.valid) {
      const rankingData = this.rankingForm.value;
      console.log(`View member with number ${rankingData}`);
      this.rankingService.saveRanking(rankingData).subscribe(
        (createdRanking) => {
          console.log('Ranking created successfully:', createdRanking);
        },
        (error) => {
          console.error('Error creating ranking:', error);
        }
      );
    }
  }
}
