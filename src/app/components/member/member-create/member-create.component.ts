import { Component } from '@angular/core';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../models/member.model';
import { IdentityDocumentType } from '../../../models/IdentityDocumentType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})

export class MemberCreateComponent {
  newMember: Member = {
    num: 0,
    name: '',
    familyName: '',
    accessionDate: new Date(),
    nationality: '',
    identityDocument: IdentityDocumentType.CIN,
    identityNumber: ''
  };
  identityDocumentTypes = Object.values(IdentityDocumentType);

  constructor(private memberService: MemberService, private router: Router) { }

  createMember(): void {
    this.memberService.saveMember(this.newMember).subscribe(
      (createdMember) => {
        console.log('Member created successfully:', createdMember);
        this.router.navigate(['/members']);
      },
      (error) => {
        console.error('Error creating member:', error);
      }
    );
  }
}
