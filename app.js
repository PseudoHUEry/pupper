const puppeteer = require("puppeteer"),
  pass = require("./containerUser/pass"),
  bd = require("./bdConsultas/bd");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  let url =
    "https://accounts.zoho.com/signin?servicename=ZohoBooks&signupurl=https://www.zoho.com/books/signup/";

  // Logando ZOHO-ONE
  const page = await browser.newPage();
  await page.goto(url);
  await page.type("#login_id", pass.email);
  await page.click("#nextbtn");
  await page.type("#password", pass.pass);
  setTimeout(() => page.click("#nextbtn"), 1000);
  setTimeout(() => page.click("#skip"), 3000);
  setTimeout(() => page.click("#ember866"), 5000);
  setTimeout(() => page.click("#ember903"), 1500);


function async(bd) {

  if(bd.legth > 1) {
  await page.type("ember81", base)
  await page.keyboard.press("Enter");
    
  let target = page.$('tbody')
  const result = await target.evaluate(() => {
    
  })
  }

}

 
})();
