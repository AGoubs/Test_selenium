const { Builder, By } = require('selenium-webdriver');
const faker = require("faker/locale/fr");

(async function () {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost/Cours_AUROUSSEAU/quali/');

    for (let i = 0; i < 1000; i++) {
        await search(driver, { "product": faker.fake('{{commerce.product}}'), "quantity": faker.fake('{{random.number({"min":1, "max":20})}}'), "price": faker.fake('{{commerce.price}}') });
    }
})()

async function search(driver, data) {
    try {
        await driver.findElement(By.id('product')).sendKeys(data.product)
        await driver.findElement(By.id('quantity')).sendKeys(data.quantity)
        await driver.findElement(By.id('price')).sendKeys(data.price);
        await driver.findElement(By.id('submitButton')).click();
    } catch (error) {
        console.log(error);
    }
}

