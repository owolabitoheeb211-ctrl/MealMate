// ======================================
// MealMate Configuration File
// ======================================

const CONFIG = {

    // Backend API Base URL
    API_URL: "https://mealmate-backend-ejay.onrender.com",

    // Authentication Endpoints
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    PROFILE: "/api/auth/profile",
    FORGOT_PASSWORD: "/api/auth/forgot-password",
    RESET_PASSWORD: "/api/auth/reset-password",

    // Vendors
    VENDORS: "/api/vendors",

    // Kitchens
    KITCHENS: "/api/kitchens",

    // Meals
    MEALS: "/api/meals",
    POPULAR_MEALS: "/api/meals/popular",
    RECOMMENDED_MEALS: "/api/meals/recommended",
    CATEGORIES: "/api/meals/categories",

    // Orders
    ORDERS: "/api/orders",

    // Payments
    PAYMENTS: "/api/payments",

    // App Information
    APP_NAME: "MealMate",
    VERSION: "1.0.0"

};


// ======================================
// Helper Function
// ======================================

function getToken() {
    return localStorage.getItem("token");
}