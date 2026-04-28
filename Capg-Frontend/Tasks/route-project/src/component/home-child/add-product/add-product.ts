import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiData } from '../../../core/api-data';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
})
export class AddProduct {
  apiData = inject(ApiData);
  message = '';

  product = {
    title: '',
    price: 0,
    description: '',
    categoryId: 1,
    images: ['']
  };

  submit() {
    this.apiData.sendData(this.product).subscribe({
      next: (res) => {
        console.log('Created:', res);
        this.message = 'Product added successfully!';
      },
      error: (err) => {
        console.log('Error:', err.error);
        this.message = 'Error: ' + JSON.stringify(err.error);
      }
    });
  }
}
