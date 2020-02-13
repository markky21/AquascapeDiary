import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"
      >Created with ♥ by
      <b
        ><a
          href="https://www.linkedin.com/in/marcin-mirecki-8747718b/"
          target="_blank"
          >Marcin Mirecki</a
        ></b
      ></span
    >
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `
})
export class FooterComponent {}
