// toast.service.ts
import { Injectable } from '@angular/core';

declare var bootstrap: any;

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showSuccess(message: string): void {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `<div class="toast-header " style="background-color: #0c151e; color: #f9eeb9;>
                          <strong class="me-auto">Alert</strong>
                          <button type="button" class="btn-close text-white" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">${message}</div>`;

    const toastContainer = document.getElementById('toast-container');

    if (toastContainer) {
      toastContainer.appendChild(toast);

      const bsToast = new (bootstrap.Toast as any)(toast);
      bsToast.show();
  
      bsToast.addEventListener('hidden.bs.toast', () => {
        toastContainer.removeChild(toast);
      });
    } else {
      console.error('Toast container not found.');
    }
  }
}
