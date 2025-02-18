document.addEventListener("DOMContentLoaded", function () {
    const payButton = document.getElementById("payButton");

    payButton.addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Razorpay Payment Options
        var options = {
            "key": "YOUR_RAZORPAY_KEY", // Replace with your Razorpay API Key
            "amount": 100000, // ₹1000 in paise (1 INR = 100 paise)
            "currency": "INR",
            "name": "E-Sushrusa",
            "description": "Membership Enrollment",
            "image": "your-logo.png", // Replace with your logo URL
            "handler": function (response) {
                alert("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
                generateCustomerId();
            },
            "prefill": {
                "name": name,
                "email": email,
                "contact": phone
            },
            "theme": {
                "color": "#007bff"
            }
        };

        var rzp = new Razorpay(options);
        rzp.open();
    });

    function generateCustomerId() {
        const customerId = "ES" + Math.floor(100000 + Math.random() * 900000);
        alert("Your Customer ID: " + customerId);
    }
});
