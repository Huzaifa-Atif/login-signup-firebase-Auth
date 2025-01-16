import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getFirestore,
  setDoc,
  doc,
} from "./firebase.js";

const signup = async () => {
  const email = document.querySelector("#email").value.trim(); // Ensure no leading/trailing spaces
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  // Validation: Check if all fields are filled
  if (!email || !password || !username) {
    alert("Please enter all the fields."); // Alert for missing input
    return; // Stop further execution if validation fails
  }

  const auth = getAuth();
  const firestore = getFirestore();

  try {
    // Create the user with email and password
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    // Save the user data to Firestore
    await setDoc(doc(firestore, "users", user.uid), {
      username: username,
      email: email,
      password: password, // Not recommended to store plain passwords in Firestore
    });

    alert("Signup successful!");
    // Switch to login view
    document.querySelector(".signup-container").style.display = "none";
    document.querySelector(".login-container").style.display = "flex";
  } catch (error) {
    alert("Error during signup: " + error.message);
  }
};

// Function to display the login form
function showLogin() {
  document.querySelector(".signup-container").style.display = "none";
  document.querySelector(".login-container").style.display = "flex";
}

// Corrected signIn Function
const login = async () => {
  try {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    


    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const auth = getAuth(); // Initialize Auth

    // Sign in with Firebase Auth
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;

    alert("Logged in successfully!");

    // Store user ID in localStorage and redirect
    localStorage.setItem("loggedInUserUid", user.uid);
    // window.location.href = "dashboard.html"; // Uncomment to redirect to dashboard
  } catch (error) {
    console.error("Error logging in:", error.message);
    alert("Failed to log in: " + error.message);
  }

  if (email || password === ture) {
    window.location.href = "./dashboard.html";
    return;
  }
};

// Attach the signup and login functions to the window object
window.signup = signup;
window.login = login;
