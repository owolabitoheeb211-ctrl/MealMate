const token = localStorage.getItem('cook_auth_token');
console.log("Token:", token);

fetch(`${API_BASE_URL}/api/auth/profile`, {
  headers: { "Authorization": `Bearer ${token}` }
})
.then(res => res.json())
.then(data => console.log("My Profile:", data))
.catch(err => console.error(err))

const token = localStorage.getItem('cook_auth_token');
fetch('${API_BASE_URL}/api/auth/profile', {
    headers: {"Authorization": Bearer ${token}' }
})