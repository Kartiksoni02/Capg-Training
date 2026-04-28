import { Routes } from '@angular/router';
import { Home } from '../component/home/home';
import { Product } from '../component/product/product';
import { Electronics } from '../component/electronics/electronics';
import { About } from '../component/about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { AddProduct } from '../component/home-child/add-product/add-product';
import { UpdateProduct } from '../component/home-child/update-product/update-product';
import { DeleteProduct } from '../component/home-child/delete-product/delete-product';

export const routes: Routes = [
    {path:"", component:Home , children:[
        {path:"add" , component:AddProduct},
        {path:"update" , component:UpdateProduct},
        {path:"delete" , component:DeleteProduct},
    ]},
    {path:"product" , component:Product},
    {path:"elec" , component:Electronics},
    {path:"about" , component:About},
    {path:"**" , component:PageNotFound},
];
