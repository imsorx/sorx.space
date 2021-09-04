import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  baseTitle: string = 'Sourabh Patel | '

  constructor(private title: Title, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.info(`
    #######  #######  ######   ###  ## 
    ##       ##   ##  ##  ##   ###  ## 
    #######  ##   ##  ##  ##   ###  ## 
         ##  ##  ###  #######   #####  
    ###  ##  ##  ###  ### ###  ##  ### 
    ###  ##  ##  ###  ### ###  ##  ### 
    #######  #######  ### ###  ##  ###
    `);
    console.log('i see you are man of curiuosity O_o too.....');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;

        while (child?.firstChild) {
          child = child.firstChild;
        }

        return child?.snapshot.data['title'] ?
          this.baseTitle + child.snapshot.data['title'] : this.baseTitle;
      })
    ).subscribe((ttl: string) => this.title.setTitle(ttl));
  }
}
