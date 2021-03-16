import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageNavigationService {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public closePage(){
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/';
    this.router.navigate([returnUrl]);
  }

  public openPage(route: string){
    const currentReturnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/';

    const url = this.router.createUrlTree(
      [route],
      {queryParams: {returnUrl: currentReturnUrl}}
    );

    this.router.navigateByUrl(url);
  }

}