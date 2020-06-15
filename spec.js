describe('Protractor Test', function() {

  var EC = protractor.ExpectedConditions;

  var menuButton = element(by.id('menu-button'));
  var personalButton = element(by.xpath("//ul[@class='main-menu-list']//li//a[contains(text(), 'Personal')]"));
  var creditAndCards = element(by.xpath("//A[@text='PayPal Credit & Cards']"));
  var creditAndCardsPageHeader = element(by.xpath("//H1[contains(text(),'Explore our credit cards')]"));

  it('should navigate to credit and cards page through side menu and verify user on credit and cards page', async function() {
    try {
      await browser.waitForAngularEnabled(false);
      await browser.get('https://www.paypal.com/us/home');
      await browser.wait(EC.elementToBeClickable(menuButton), 5000);
      await menuButton.click();
      await personalButton.click();
      await browser.wait(EC.elementToBeClickable(creditAndCards), 5000);
      await creditAndCards.click();
      expect(await browser.isElementPresent(creditAndCardsPageHeader)).toBeTruthy();
    } catch (err) {
      console.log(err);
    }
  });

});
