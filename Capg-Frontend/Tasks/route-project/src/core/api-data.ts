import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiData {

  http:HttpClient = inject(HttpClient);

  getData() {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }

  sendData(data: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/products', data)
  }

  updateData(id: number, data: any) {
    return this.http.put(`https://api.escuelajs.co/api/v1/products/${id}`, data);
  }

  deleteData(id: number) {
    return this.http.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
  }


  sendFormData(data: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/users' , data)
  }
}


