
class LoginPage {
    get englishLanguageButton() {
        return $('//*[@text="English"]');
    }

    get phoneNumberInput() {
        return $("android.widget.EditText");
    }
    get sendOtp() {
        return $("android.widget.Button");
    }

    get otpInput() {
        return $("android.widget.EditText");
    }
    get submitButton() {
        return $('//*[@text="Submit"]');
    }

    async login(phoneNumber, otp) {
        await this.englishLanguageButton.click();
        await this.phoneNumberInput.setValue(phoneNumber);
        await this.sendOtp.click();
        await this.otpInput.setValue(otp);
        await this.submitButton.click();
    }
}

export default new LoginPage();
