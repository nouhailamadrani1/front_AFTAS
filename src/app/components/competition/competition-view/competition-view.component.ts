// competition-view.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankingService } from '../../../services/ranking.service';

@Component({
  selector: 'app-competition-view',
  templateUrl: './competition-view.component.html',
  styleUrls: ['./competition-view.component.css']
})
export class CompetitionViewComponent implements OnInit {
  competitionId: number = 0;
  competitionDetails: any;
  members: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private rankingService: RankingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.competitionId = +params['id'];
      this.loadCompetitionDetails();
      this.loadMembers();
    });
  }

  loadCompetitionDetails(): void {
    // Implement logic to fetch competition details based on this.competitionId
    // Assign the fetched data to this.competitionDetails
  }

  loadMembers(): void {
    if (isNaN(this.competitionId)) {
      console.error('Invalid competitionId:', this.competitionId);
      return;
    }

    this.rankingService.getAllMembersByCompetition(this.competitionId).subscribe(
      (data) => {
        this.members = data; // Assuming the data is an array of members
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
