describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('should have "Welcome Vinod!!" section', async () => {
    await expect(element(by.text('Welcome Vinod!!'))).toBeVisible();
  });

  it('should have "Weather" section', async () => {
    await expect(element(by.text('Weather'))).toBeVisible();
  });

  it('should have location', async () => {
    await expect(element(by.text('Mumbai'))).toBeVisible();
  });
  it('should have "My Steps" button', async () => {
    await expect(element(by.text('My Steps'))).toBeVisible();
  });
});