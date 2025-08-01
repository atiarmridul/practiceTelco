describe("Sample Test Suite", () => {
  it("should perform a sample test", async () => {
    await driver.pause("5000");
    await $('//*[@text="English"]').click();

    await driver.pause("3000");
    await $("android.widget.EditText").setValue("01897689140");
    await $("android.widget.Button").click();
    await driver.pause("3000");
    await $("android.widget.EditText").setValue("123456");
    await driver.pause("2000");
    await $('//*[@text="Submit"]').click();
    await driver.pause("5000");

    await $(
      "//android.view.ViewGroup/android.view.View/android.view.View/android.view.View[2]"
    ).click();

    await driver.pause("3000");
  });
});
