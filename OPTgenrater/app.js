function generateOTP() {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Display the OTP
    document.getElementById('otpDisplay').innerText = `Your OTP: ${otp}`;
}