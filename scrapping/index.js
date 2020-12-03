const puppeteer=require('puppeteer');

async function main()
{
    try {

        const browser= await puppeteer.launch({headless:false})
        const page= await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0')
        await page.goto('https://experts.shopify.com/')
        await page.waitForSelector('.section')
        const sections=await page.$$('.section')
        console.log(sections.length);
        for(const section of sections)
        {
            const button =await section.$('a.marketing-button');
            button.click();
            await page.waitForSelector('#Expertresults',{timeout:30000});
            const lis=await page.$$('#Expertresults >li')

            for(li of lis)
            {
                const name=await li.$eval('h2',(h2)=>{
                    return h2.innerText
                })

                console.log(name);
            }
            
        }

        
    } catch (error) {
        await page.waitForSelector('#Expertresults',{timeout:30000}); 
    }

    
}
main();