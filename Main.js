const API_BASE_URL = "https://mealmate-backend-ejay.onrender.com";
const token = localStorage.getItem('cook_auth_token');

// Reusable API function for ALL pages
async function apiRequest(endpoint, method = "GET", body = null){
  try{
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` })
      }
    };
    if(body) options.body = JSON.stringify(body);

    const res = await fetch(`${API_BASE_URL}${endpoint}`, options);
    return await res.json();
  }catch(err){
    console.error("API Error:", err);
    return { success: false, message: "Network error" };
  }
}

// =============================
// FORGOT PASSWORD
// =============================

const forgotPasswordLink = document.getElementById("forgotPasswordLink");

if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", async function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        if (!email) {
            alert("Please enter your email address first.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || "Password reset link has been sent to your email.");
            } else {
                alert(data.message || "Unable to send reset link.");
            }

        } catch (error) {
            console.error(error);
            alert("Network error. Please try again.");
        }
    });
}