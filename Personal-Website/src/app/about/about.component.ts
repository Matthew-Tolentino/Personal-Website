import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  icons: string[] = ['ri-javascript-line',
                     'ri-html5-line', 
                     'ri-css3-line', 
                     'ri-angularjs-line', 
                     'ri-bootstrap-line',
                     'ri-github-line'
                    ]

  angle: number = (360 / this.icons.length);

  ngOnInit(): void { }

  getTransform(i: number) {
    console.log('transform', i);
    const rotAngle = (this.angle * i) + 90;
    const transformStr = `rotate(${rotAngle}deg) translate(100px) rotate(-${rotAngle}deg)`;
    return transformStr;
  }
}
