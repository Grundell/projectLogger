import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuth, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  project: FirebaseObjectObservable<any>;
  item: any;
  items: FirebaseListObservable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public af: AngularFire,
    public auth: FirebaseAuth
  ) {
    this.route.params.subscribe(params => {
      //Get id of object
      let id = params['id'];
      // Call the object in DB
      this.project = af.database.object('projects/' + id);
      // Subscribe and add to collection
    })
   }

  ngOnInit() {
  }

}
