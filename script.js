// Inside script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("multitab-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            fullname: document.getElementById("fullname").value,
            email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
            date: document.getElementById("date").value,
            gender: document.getElementById("gender").value,
            membership: document.getElementById("membership").value,
        };

        // Retrieve existing data or initialize an empty array
        const formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

        // Add the new form data to the array
        formDataArray.push(formData);

        // Store the updated array back in local storage
        localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

        // Optionally, you can display a success message or do other actions here

        // Navigate to the next tab (if needed)
        navigateTab(1);
    });
});

// Function to navigate between tabs
function navigateTab(n) {
    const tabs = document.querySelectorAll('.tab');
    if (n === 1 && !validateTab(currentTab)) return false;
    tabs[currentTab].classList.add('hidden');
    currentTab += n;
    if (currentTab >= tabs.length) {
        // Submit the form on the last tab
        document.getElementById("multitab-form").submit();
        return false;
    }
    showTab(currentTab);
}

function validateTab(tabIndex) {
    // Validation logic for each tab (if needed)
    // Return true if the tab is valid, false otherwise
    return true;
}
