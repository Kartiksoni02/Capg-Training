import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiData } from '../../../core/api-data';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule],
  templateUrl: './update-product.html',
})
export class UpdateProduct {
  apiData = inject(ApiData);
  message = '';

  productId = 0;
  product = {
    title: '',
    price: 0,
    description: '',
    categoryId: 1,
    images: ['']
  };

  submit() {
    this.apiData.updateData(this.productId, this.product).subscribe({
      next: (res) => {
        console.log('Updated:', res);
        this.message = 'Product updated successfully!';
      }
    });
  }
}
