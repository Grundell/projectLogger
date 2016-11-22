import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuth, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute} from '@angular/router'
import { SlackIntergrationService } from '../shared/slack-intergration.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    projects: FirebaseListObservable<any>;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      public af: AngularFire,
      public auth: FirebaseAuth,
      private slack: SlackIntergrationService
    ) {
      this.projects = af.database.list('/projects');
    }

  ngOnInit() {
  }

  postToSlack(){
      console.log('postToSlack');
      this.slack.sendSlack();
  }

  navigateSingle(key){
    this.router.navigate(['/project/', key ]);
  }

}
