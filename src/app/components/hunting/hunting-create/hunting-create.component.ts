// hunting-create.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hunting } from '../../../models/hunting.model';
import { ToastService } from '../../../services/toast.service';
import { HuntingService } from '../../../services/hunting.service';
import { CompetitionService } from '../../../services/competition.service';
import { RankingService } from '../../../services/ranking.service';
import { FishService } from '../../../services/fish.service';
import { Competition } from '../../../models/competition.model';
import { Member } from '../../../models/member.model';
import { Fish } from '../../../models/fish.model';

@Component({
  selector: 'app-hunting-create',
  templateUrl: './hunting-create.component.html',
  styleUrls: ['./hunting-create.component.css']
})

export class HuntingCreateComponent implements OnInit {
  huntingForm: FormGroup;
  competitions: Competition[] = [];
  members: Member[] = [];
  fishes: Fish[] = [];

  showSuccessToast(): void {
    this.toastService.showSuccess('Hunting entry created successfully.');
  }

  constructor(
    private formBuilder: FormBuilder,
    private huntingService: HuntingService,
    private competitionService: CompetitionService,
    private rankingService: RankingService,
    private fishService: FishService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.huntingForm = this.formBuilder.group({
      memberNum: ['', Validators.required],
      competitionId: ['', Validators.required],
      numberOfFish: [1, Validators.required],
      fishId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCompetitions();
    this.loadFishes();
  }

  loadCompetitions(): void {
    const today = new Date();
    this.competitionService.getAllCompetitions().subscribe(
      (competitions) => {
        this.competitions = competitions.filter(comp => {
          const compDate = new Date(comp.date);
          return compDate.getFullYear() === today.getFullYear() &&
            compDate.getMonth() === today.getMonth() &&
            compDate.getDate() === today.getDate();
        });

        if (this.competitions.length > 0) {
          this.loadMembers(this.competitions[0].id);
        }
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
  }

  loadMembers(competitionId: number): void {
    this.rankingService.getAllMembersByCompetition(competitionId).subscribe(
      (members) => {
        this.members = members;
      },
      (error) => {
        console.error('Error loading members:', error);
      }
    );
  }

  loadFishes(): void {
    this.fishService.getAllFish().subscribe(
      (fishes) => {
        this.fishes = fishes;
      },
      (error) => {
        console.error('Error loading fishes:', error);
      }
    );
  }

  createHunting(): void {
    if (this.huntingForm.valid) {

      const newHuntingData: Hunting = {
        id: 0,
        memberNum: this.huntingForm.value.memberNum,
        competitionId: this.huntingForm.value.competitionId,
        numberOfFish: this.huntingForm.value.numberOfFish,
        fishId: this.huntingForm.value.fishId,
      };

      this.huntingService.saveHunting(newHuntingData).subscribe(
        (createdHunting) => {
          this.showSuccessToast();
          this.router.navigate(['/hunting']);
        },
        (error) => {
          console.error('Error creating hunting:', error);
        }
      );
    }
  }
}
