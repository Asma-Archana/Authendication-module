document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordLink = document.getElementById("forgot-password");
    const forgotPasswordModal = document.getElementById("forgot-password-modal");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    // Show Forgot Password Modal
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", (event) => {
            event.preventDefault();
            forgotPasswordModal.style.display = "flex";
        });
    }

    // Handle Forgot Password Form Submission
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const resetEmail = document.getElementById("reset-email").value;
            alert(`Reset code sent to ${resetEmail}`);
            forgotPasswordModal.style.display = "none";
        });
    }

    // Close modal on clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = "none";
        }
    });
});

// Dummy functions for social login (You can replace these with actual implementations)
function googleLogin() {
    alert("Redirecting to Google login...");
}

function facebookLogin() {
    alert("Redirecting to Facebook login...");
}
