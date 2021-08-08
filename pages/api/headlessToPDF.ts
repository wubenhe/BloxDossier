import puppeteer from "puppeteer";

type Props = {
  path: string;
};

export const headlessToPDF = async ({ path }: Props) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 2480, height: 3508, deviceScaleFactor: 4 });

  await page.goto(path, {
    waitUntil: "networkidle2",
  });

  const pdf = await page.pdf({ format: "a4" });
  await browser.close();
  return pdf;
};
