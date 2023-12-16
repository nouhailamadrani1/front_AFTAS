import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition.model';
import { DatePipe } from '@angular/common';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-competition-create',
  templateUrl: './competition-create.component.html',
  styleUrls: ['./competition-create.component.css']
})
export class CompetitionCreateComponent {
  newCompetition: Competition = {
    id: 0,
    code: '',
    date: new Date(),
    startTime: { hours: 0, minutes: 0 },
    endTime: { hours: 0, minutes: 0 },
    numberOfParticipants: 0,
    location: '',
    amount: 0
  };

  constructor(
    private competitionService: CompetitionService,
    private router: Router,
    private toastService: ToastService // Inject ToastService
  ) { }
  showSuccessToast(): void {
    this.toastService.showSuccess('Registration is allowed until 48 hours before the competition start OR The date is reserved ');
  }

  createCompetition(): void {
    // Check if  date reseerved
    if (!this.newCompetition.location || !this.newCompetition.date) {
      console.error('provide both location and date.');
      return;
    }
  
    // Check if 84 hours in the future
    const currentDate = new Date();
    const competitionDate = new Date(this.newCompetition.date);
    const timeDifference = competitionDate.getTime() - currentDate.getTime();
    const hoursDifference = timeDifference / (1000 * 60 * 60);
  
    if (hoursDifference < 48) {
      console.error('Registration is allowed until 24 hours before the competition start.');
      
        this.showSuccessToast();
        
      return;
    }
  
    // Generate the competition code based on the first three characters of the location and the competition date
    const locationCode = this.newCompetition.location.substring(0, 3).toLowerCase();
    const dateCode = this.formatDateCode(this.newCompetition.date);
  
    // Combine location code and date code to form 
    this.newCompetition.code = `${locationCode}-${dateCode}`;
  
    // Save competition
    this.competitionService.saveCompetition(this.newCompetition).subscribe(
      (createdCompetition) => {
        console.log('Competition created successfully:', createdCompetition);
        this.router.navigate(['/competitions']);
      },
      (error) => {
        console.error('Error creating competition:', error);
      }
    );
  }

  private formatDateCode(date: Date): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'y-MM-dd') || '';
  }
}
