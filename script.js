//tab switching script
function showTab(tab, clickedTab){
     const ongoing = document.getElementById('ongoing-page');
     const completed = document.getElementById('completed-page');

     if(tab === 'ongoing'){
          ongoing.style.display = 'block';
          completed.style.display = 'none';
     }
     else{
          ongoing.style.display = 'none';
          completed.style.display = 'block';
     }

     document.querySelectorAll('.tab-link').forEach(link => {
          link.classList.remove('active-tab');
     });

     clickedTab.classList.add('active-tab');
}

function getDefaultsByRole(role) {
     if (role === "staff") {
          return {
               name: "Alex Brown",
               email: "demo@yorku.ca",
               username: "alex123",
          };
     } else if (role === "admin") {
          return {
               name: "Jordan Lee",
               email: "demo@yorku.ca",
               username: "jordan123",
          };
     } else {
          return {
               name: "Hana Smith",
               email: "demo@yorku.ca",
               username: "hana123",
          };
     }
}

function updateNavbar(role) {
     const navLinks = document.getElementById("roleNav");

     if (role === "staff") {
     navLinks.innerHTML = `
          <li class="nav-item">
          <a class="nav-link" href="staff-dashboard.html">Dashboard</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" href="account-info.html">Account</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="login.html">Logout</a>
          </li>
     `;
     } else if (role === "admin") {
     navLinks.innerHTML = `
          <li class="nav-item">
          <a class="nav-link" href="admin-dashboard.html">Dashboard</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" href="account-info.html">Account</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="login.html">Logout</a>
          </li>
     `;
     } else {
     navLinks.innerHTML = `
          <li class="nav-item">
          <a class="nav-link" href="my-requests.html">My Requests</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="submit-request.html">Submit Request</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="login.html">Logout</a>
          </li>
     `;
     }
}

function updateProfileCircle(name) {
     const circle = document.getElementById("profileCircle");
     const parts = name.trim().split(" ");
     let initials = "";

     if (parts.length >= 2) {
     initials = parts[0][0] + parts[1][0];
     } else if (parts.length === 1 && parts[0].length > 0) {
     initials = parts[0][0];
     } else {
     initials = "U";
     }

     circle.innerText = initials.toUpperCase();
}

window.onload = function () {
     const role = localStorage.getItem("userRole") || "user";
     const defaults = getDefaultsByRole(role);

     const name = localStorage.getItem("userName") || defaults.name;
     const email = localStorage.getItem("userEmail") || defaults.email;
     const username = defaults.username;

     document.getElementById("displayName").innerText = name;
     document.getElementById("displayEmail").innerText = email;
     document.getElementById("nameInput").value = name;
     document.getElementById("emailInput").value = email;
     document.getElementById("usernameInput").value = username;
     document.getElementById("roleSelect").value = role;

     updateProfileCircle(name);
     updateNavbar(role);
};

function handleUpdate(event) {
     event.preventDefault();

     const name = document.getElementById("nameInput").value;
     const email = document.getElementById("emailInput").value;
     const role = document.getElementById("roleSelect").value;

     localStorage.setItem("userName", name);
     localStorage.setItem("userEmail", email);
     localStorage.setItem("userRole", role);

     document.getElementById("displayName").innerText = name;
     document.getElementById("displayEmail").innerText = email;

     updateProfileCircle(name);
     updateNavbar(role);

     document.getElementById("successMsg").style.display = "block";
}

function handleSubmit(e) {
     e.preventDefault();

     const request = document.getElementById("requestInput").value;
     // Add your form submission logic here
}