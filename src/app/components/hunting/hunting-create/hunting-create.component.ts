// hunting-create.component.ts

import { Component, OnInit } from '@angular/core';
import { HuntingService } from '../../../services/hunting.service';
import { Hunting } from '../../../models/hunting.model';
import { CompetitionService } from '../../../services/competition.service';
import { MemberService } from '../../../services/member.service';
import { FishService } from '../../../services/fish.service';
import { Competition } from '../../../models/competition.model';
import { Member } from '../../../models/member.model';
import { IdentityDocumentType } from "../../../models/IdentityDocumentType";
import { Fish } from '../../../models/fish.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hunting-create',
  templateUrl: './hunting-create.component.html',
  styleUrls: ['./hunting-create.component.css']
})
export class HuntingCreateComponent implements OnInit {
  newHunting: Hunting = {
    id: 0,
    numberOfFish: 0,
    competition: {
      code: 0,
      date: new Date(),
      startTime: { hours: 12, minutes: 0 },
      endTime: { hours: 14, minutes: 30 },
      numberOfParticipants: 0,
      location: '',
      amount: 0
    },
    member: {
      num: 0,
      name: '',
      familyName: '',
      accessionDate: new Date(),
      nationality: '',
      identityDocument: IdentityDocumentType.CIN,
      identityNumber: ''
    },
    fish: {
      id: 0,
      name: '',
      averageWeight: 0,
      level: {
        code: 0,
        description: '',
        points: 0
      }
    }
  };

  competitions: Competition[] = [];
  members: Member[] = [];
  fishes: Fish[] = [];
IdentityDocumentType: any;

  constructor(
    private huntingService: HuntingService,
    private competitionService: CompetitionService,
    private memberService: MemberService,
    private fishService: FishService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCompetitions();
    this.loadMembers();
    this.loadFishes();
  }

  loadCompetitions(): void {
    this.competitionService.getAllCompetitions().subscribe(
      (competitions) => {
        this.competitions = competitions;
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
  }

  loadMembers(): void {
    this.memberService.getAllMembers().subscribe(
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
    this.huntingService.saveHunting(this.newHunting).subscribe(
      (createdHunting) => {
        console.log('Hunting created successfully:', createdHunting);
       
        this.router.navigate(['/hunting']);
      },
      (error) => {
        console.error('Error creating hunting:', error);
      }
    );
  }
}
