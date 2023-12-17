
import { ToastService } from '../../../services/toast.service';
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
  filteredMembers: Member[] = [];
  searchTerm: string = '';

  constructor(private memberService: MemberService, private toastService: ToastService) { }

  showSuccessToast(): void {
    this.toastService.showSuccess('Operation completed successfully.');
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    this.memberService.getAllMembers().subscribe(
      (members) => {
        this.members = members;
        this.filterMembers();
      },
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
        console.log(`Member with number ${num} deleted successfully.`);
        this.loadMembers();
        this.showSuccessToast();
      },
      (error) => {
        console.error(`Error deleting member with number ${num}:`, error);
      }
    );
  }

  filterMembers(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();

    this.filteredMembers = this.members.filter((member) =>
      member.num.toString().includes(lowerCaseSearchTerm) ||
      member.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      member.familyName.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
}
