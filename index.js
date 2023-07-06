import puppeteer from "puppeteer";
import fs from "fs/promises";
//?openWebPage
// async function openWebPage(){
//   const browser = await puppeteer.launch(
//     {executablePath:'/usr/bin/google-chrome',headless:false,slowMo:200}
//   );

//   const page=await browser.newPage()
//   await page.goto('http://example.com')
//   await browser.close()
// }

// openWebPage()

//?captureScreenshot

// async function captureScreenshot(){
//   const browser = await puppeteer.launch(
//     {executablePath:'/usr/bin/google-chrome',headless:false,slowMo:200}
//   );

//   const page=await browser.newPage()
//   await page.goto('http://example.com')
//   await page.screenshot({path: 'example.png'});
//   await browser.close()
// }

// captureScreenshot()

//?navigateWebPage()
// async function navigateWebPage(){
//   const browser = await puppeteer.launch(
//     {executablePath:'/usr/bin/google-chrome',headless:false,slowMo:200}
//   );

//   const page=await browser.newPage()
//   await page.goto("https://quotes.toscrape.com")
//   await page.click('a[href="/login"]');
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//     await browser.close()
// }

// navigateWebPage()

//?getDataFromWebPage
async function getDataFromWebPage() {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: false,
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");

  const data = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText;
    let description = document.querySelector("p").innerText;
    return {
      title,
      description,
    };
  });
  console.log(data);
  await fs.writeFile("example.json", JSON.stringify(data));

  await browser.close();
}

getDataFromWebPage();

//?handleDynamicWebPage

// async function handleDynamicWebPage() {
//   const browser = await puppeteer.launch({
//     executablePath: "/usr/bin/google-chrome",
//     headless: false,
//     slowMo: 300,
//   });
//   const page = await browser.newPage();
//   await page.goto("https://quotes.toscrape.com");

//   const data = await page.evaluate(() => {
//     const quotes = document.querySelectorAll(".quote");
//     const data = [...quotes].map((quote) => {
//       const quoteText = quote.querySelector(".text").innerText;
//       const author = quote.querySelector(".author").innerText;
//       const tags = [...quote.querySelectorAll(".tag")].map(
//         (tag) => tag.innerText
//       );
//       return {
//         quoteText,
//         author,
//         tags,
//       };
//     });
//     return data;
//   });
//   console.log(data);
//   await fs.writeFile('quotes.json',JSON.stringify(data))
//   await browser.close();
// }

// handleDynamicWebPage();
