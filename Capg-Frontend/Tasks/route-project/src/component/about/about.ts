import { Feedback } from './../home-child/feedback/feedback';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  route = inject(ActivatedRoute);
  Feedbackdata:string='';

  ngOnInit(){
    this.route.queryParams.subscribe((param)=>{
      this.Feedbackdata= param['msg']
      console.log(param['msg']);
    
    })
  }
}
