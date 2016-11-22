import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuth, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormGroup, FormArray, FormBuilder, FormControl ,Validators } from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  //Form controlls
   checkboxControl: FormControl = new FormControl(false);
   radioControl: FormControl = new FormControl(false);
   sliderControl: FormControl = new FormControl();
   toggleControl: FormControl = new FormControl();
   public formRadioControl: FormControl = new FormControl();

  projects: FirebaseListObservable<any>;
  item: any;
  items: FirebaseListObservable<any>;

  // Project form
  public projectForm: FormGroup;
  formFeedback: FormGroup;
  formSubmited: boolean = false;
  events: any[] = [];
  formVal: any[] = [];

  key: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public af: AngularFire,
    public auth: FirebaseAuth,
    public fb: FormBuilder
  ) {

    this.projects = af.database.list('projects', { preserveSnapshot: true, query: {
    limitToLast: 1,
    orderByKey: true
    }
  });


    this.projects.subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      this.key = snapshot.key;
      console.log(snapshot.key)
      console.log(snapshot.val())
    });
  })

  }

  ngOnInit() {

    this.projectForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        company: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(3)]],
         type:
             this.fb.group({
                dev: [''],
                project: [''],
                seo:  [''],
             }),
        cost: this.fb.group({
          project: this.fb.group({
            price: [''],
            hours: [''],
            comment: ['']
          }),
          development: this.fb.group({
            price: [''],
            hours: [''],
            comment: ['']
          }),
          seo: this.fb.group({
            price: [''],
            hours: [''],
            comment: ['']
           })
        }),
      approved: false,
      approvedBy: '',
      additional: this.fb.array([
      ]),
    });
      this.formVal = this.projectForm.value;
      console.log(this.projectForm.value);
  }

  submit() {
      console.log(this.projectForm.value);
    this.projects.push(this.projectForm.value);
    this.router.navigate(['/project/', this.key ]);
  }
}
