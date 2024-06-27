const { Builder, By, Key, until } = require('selenium-webdriver');
const Contact = require('../../models/contactls/contact');

const sendMessage = async (message) => {
    console.log('sendMessage js ');
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.wait(until.elementLocated(By.css('._2_1wd')), 60000); // Wait for WhatsApp Web to load

        const contacts = await Contact.find();

        for (const contact of contacts) {
            await driver.get(`https://web.whatsapp.com/send?phone=${contact.phoneNumber}&text=${encodeURIComponent(message)}`);
            await driver.wait(until.elementLocated(By.css('._1E0Oz')), 10000); // Wait for the message box
            await driver.findElement(By.css('._1E0Oz')).sendKeys(Key.ENTER); // Press Enter to send
            await driver.sleep(5000); // Wait for 5 seconds before sending the next message
        }

        return { status: 'Messages sent' };
    } catch (error) {
        console.error(error);
        return { status: 'Error', error };
    } finally {
        await driver.quit();
    }
};

module.exports = sendMessage;
