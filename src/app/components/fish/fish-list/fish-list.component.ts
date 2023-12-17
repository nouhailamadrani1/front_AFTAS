import { Component, OnInit } from '@angular/core';
import { FishService } from '../../../services/fish.service';
import { Fish } from '../../../models/fish.model';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {
  fishes: Fish[] = [];

  constructor(private fishService: FishService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadFishes();
  }

  showSuccessToast(): void {
    this.toastService.showSuccess('Fish deleted successfully.');
  }

  loadFishes(): void {
    this.fishService.getAllFish().subscribe(
      fishes => this.fishes = fishes,
      fishes => console.log('Fish Data:', fishes),
    );
  }

  viewFish(id: number): void {
    console.log(`View fish with id ${id}`);
  }

  editFish(id: number): void {
    console.log(`Edit fish with id ${id}`);
  }

  deleteFish(id: number): void {
    this.fishService.deleteFish(id).subscribe(
      () => {
        console.log(`level with code ${id} deleted successfully.`);
        this.loadFishes();
        this.showSuccessToast();
      },
      (error) => {
        console.error(`Error deleting level with code ${id}:`, error);
      }
    );
  }

}
