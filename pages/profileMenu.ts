import { Page } from '@playwright/test';

export class ProfileMenu {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async waitForElementDisplayedProfileMenu() {
    await this.page.waitForSelector('#profile-alerts');
  }

  async openProfileMenu() {
    await this.page.click('#profile-alerts');
  }

  async chooseAddBlogPost() {
    await this.page.click('text="Add Blog Post"');
  }
}