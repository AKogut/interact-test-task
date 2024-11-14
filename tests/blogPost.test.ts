import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProfileMenu } from '../pages/profileMenu';
import { BlogPage } from '../pages/blog/blogPage';
import { AddBlogPost } from '../pages/blog/addBlogPost';

test('Login and Create Blog Post', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profileMenu = new ProfileMenu(page);
  const blogPage = new BlogPage(page);
  const addBlogPost = new AddBlogPost(page);

  // Retrieve credentials from environment variables
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  // Login page
  await loginPage.openWebSite();
  await loginPage.waitForLoginPageLoad();
  await loginPage.login(username!, password!);  // `!` tells TypeScript that username and password are defined

  // Profile page
  await profileMenu.waitForElementDisplayedProfileMenu();
  await profileMenu.openProfileMenu();
  await profileMenu.chooseAddBlogPost();

  // Create blog page
  const title = 'Test title'; 
  const summary = 'Test summary'; 
  const content = 'Test content';  
  const imagePath = 'picture/testPhoto.jpeg'; 

  await addBlogPost.waitForAddBlogPageLoad();
  await addBlogPost.createBlogPost(title, summary, content, imagePath);
  await addBlogPost.publishBlogPost();

  // open all blog section
  await blogPage.openAllBlogSection();
  await blogPage.waitForAllBlogPageLoad();

  // validate that the blog post exists and open blog post
  await blogPage.openFirstBlogPost(title);
  await blogPage.waitForBlogPostLoad();

  // Verify the content of the blog post matches the input data
  expect(await blogPage.verifyImageIsLoadedInBlogPost()).toBeTruthy();
  expect(await blogPage.verifyTitleBlogPost(title)).toBeTruthy();
  expect(await blogPage.verifySummaryBlogPost(summary)).toBeTruthy();
  expect(await blogPage.verifyContentBlogPost(content)).toBeTruthy();
});

