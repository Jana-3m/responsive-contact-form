document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");

    button.addEventListener("click", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        document.getElementById("errorFullName").textContent = "";
        document.getElementById("errorEmail").textContent = "";
        document.getElementById("errorSubject").textContent = "";
        document.getElementById("errorMessage").textContent = "";

        let hasError = false;

        if (fullName === "") {
            document.getElementById("errorFullName").textContent = "Please enter your full name.";
            hasError = true;
        }

        if (email === "") {
            document.getElementById("errorEmail").textContent = "Please enter your email.";
            hasError = true;
        } else if (!emailPattern.test(email)) {
            document.getElementById("errorEmail").textContent = "Please enter a valid email address.";
            hasError = true;
        }

        if (subject === "") {
            document.getElementById("errorSubject").textContent = "Please enter a subject.";
            hasError = true;
        }

        if (message === "") {
            document.getElementById("errorMessage").textContent = "Please enter a message.";
            hasError = true;
        }

        if (!hasError) {
            window.location.href = "Task22.html";
        }
    });
});
