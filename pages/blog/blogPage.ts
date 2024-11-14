import { Page, expect } from '@playwright/test';

export class BlogPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openAllBlogSection() {
    const allBlogButton = this.page.getByRole('button', { name: 'All Posts' });
    await allBlogButton.waitFor({ state: 'visible' }); 
    await allBlogButton.click(); 
  }

  async waitForAllBlogPageLoad() {
    await this.page.waitForSelector('#person-blog-results'); 
  }

  async openFirstBlogPost(title: string) {
    const allBlogButton = this.page.getByRole('link', { name: title }).first()
    await allBlogButton.waitFor({ state: 'visible' }); 
    await allBlogButton.click(); 
  }

  async waitForBlogPostLoad() {
    await this.page.waitForSelector('#blogs'); 
  }

  async verifyImageIsLoadedInBlogPost() {
    const image = this.page.locator('#blogs img').first();
    const isImageLoaded = await image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
    return isImageLoaded;
}

  async verifyTitleBlogPost(title: string) {
    const titleText = await this.page.locator('div.row.g2 .col-xs-12 h1').textContent();
    return titleText?.trim() === title;
  }

  async verifySummaryBlogPost(summary: string) {
    const summaryText = await this.page.locator('div.row.g2 .col-xs-12 p strong').textContent();
    return summaryText?.trim() === summary;
  }

  async verifyContentBlogPost(content: string) {
    const contentText = await this.page.locator('section.section.content.is-primary p').textContent();
    return contentText?.trim() === content;
  }
  
}