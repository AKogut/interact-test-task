import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async openWebSite() {
    await this.page.goto('/');
  }

  async waitForLoginPageLoad() {
    await this.page.waitForSelector('#Username'); 
  }

  async login(username: string, password: string) {
    await this.page.fill('input[id="Username"]', username);
    await this.page.fill('input[id="Password"]', password);
    await this.page.click('#loginbtn');
  }
}