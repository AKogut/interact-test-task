import { Page } from '@playwright/test';
export class AddBlogPost {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForAddBlogPageLoad() {
    await this.page.waitForSelector('input[title="Image uploader for blog"]'); 
  }

  async createBlogPost(title: string, summary: string, content: string, imagePath: string) {
    // upload photo
    await this.page.setInputFiles('input[title="Image uploader for blog"]', imagePath);

    // add text for title field
    const titleElement = this.page.locator('[aria-label="Post title"]');
    await titleElement.click({ force: true });
    await this.page.keyboard.type(title, { delay: 100 });

    // add text for summary field
    const summaryElement = this.page.locator('[aria-label="Post Summary"]');
    await summaryElement.click({ force: true });
    await this.page.keyboard.type(summary, { delay: 100 });

    // add text for content field
    const contentElement = this.page.locator('#blogPostBodyContent');
    await contentElement.click({ force: true });
    await this.page.keyboard.type(content, { delay: 100 });

    // click continue
    await this.page.waitForSelector('a[aria-label="Continue"]', { state: 'visible' });
    await this.page.click('a[aria-label="Continue"]');
  
  }
  async publishBlogPost() {
    // choose Yes
    const slider = this.page.getByRole('dialog').locator('label');
    await slider.scrollIntoViewIfNeeded(); 
    await slider.click({ force: true }); 

    // click Save
    const saveButton = this.page.locator('a.button.is-medium-button.btn-block.xs-mt-4.is-inverted:has-text("Save")');
    await saveButton.scrollIntoViewIfNeeded();
    await saveButton.click({ force: true });
  }

}