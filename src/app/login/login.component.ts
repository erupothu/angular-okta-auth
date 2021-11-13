import { Component, OnInit } from '@angular/core';

import {OAuthService, AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://vayaindiaharish.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/home',
    clientId: '0oa6ioafmIpYH3l9x696'
  };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService) { 
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocument();
  }

  ngOnInit(): void {
  }

  login() {
    this.oauthService.initImplicitFlow();
  }


  logout() {
    this.oauthService.logOut();
  }

  getUserName()  {
    const claims: any = this.oauthService.getIdentityClaims();
    if(!claims) {
      return null;
    }
    return claims?.name;

  }

}
