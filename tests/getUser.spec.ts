import "isomorphic-fetch";
import * as martian from "../martian";
import { test, expect } from "@playwright/test";

const settings = new martian.Settings({
  host: "https://h7hbzrzw.mindtouch.es",
  token: "143f2f272f045ca3fd89843d313d408e57e7ebd5b488d83f4491766ac12372d6",
});

test("basic test", async ({ page }) => {
  const userManager = new martian.UserManager(settings);
  const userInfo = (await userManager.getCurrentUser()) as any;
  console.log(userInfo);
  await expect(userInfo.id).toBe(2);
});
