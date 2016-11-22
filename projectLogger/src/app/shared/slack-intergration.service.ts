import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SlackIntergrationService {

  private url = 'https://hooks.slack.com/services/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';

  constructor(private http: Http) { }

  sendSlack(){
    console.log('Slack Service activvated');
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({ "text": "Push name of project Diplomat Intern + URL = <http://localhost:4200/project/-KVwof87AdhHY3Alu9z6|Link Text>"});

    return this.http.post(this.url, body, {headers: headers})
    .map(response => response.json())
    .subscribe(data => {
      console.log(data);
    }, error => console.log('Could not send data'));;
  }
}
