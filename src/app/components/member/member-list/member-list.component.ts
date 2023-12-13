// member-list.component.ts

import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    this.memberService.getAllMembers().subscribe(
      (members) => (this.members = members),
      (error) => console.log(error)
    );
  }

  viewMember(num: number): void {
    console.log(`View member with number ${num}`);
  }

  editMember(num: number): void {
    console.log(`Edit member with number ${num}`);
  }

 
  deleteMember(num: number): void {
    this.memberService.deleteMember(num).subscribe(
      () => {
        console.log(`level with code ${num} deleted successfully.`);
       
        this.loadMembers();
      },
      (error) => {
        console.error(`Error deleting level with code ${num}:`, error);
      }
    );
  }

  
}
