import puppeteer from "puppeteer";
import { encode } from 'js-base64';

type Props = {
  path: string;
  data: object;
};

export const headlessToPDF = async ({ path, data }: Props) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 2480, height: 3508, deviceScaleFactor: 4 });
  await page.setExtraHTTPHeaders({ 'x-report-data': encode(JSON.stringify(data)) });
  await page.goto(path, {
    waitUntil: "networkidle2",
  });

  const pdf = await page.pdf({ format: "a4" });
  await browser.close();
  return pdf;
};
