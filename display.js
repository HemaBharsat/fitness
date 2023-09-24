// Inside display.js
document.addEventListener("DOMContentLoaded", function() {
    const dataBody = document.getElementById("dataBody");

    // Retrieve the stored form data from local storage
    const formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

    formDataArray.forEach((formData, index) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${formData.fullname}</td>
            <td>${formData.email}</td>
            <td>${formData.mobile}</td>
            <td>${formData.date}</td>
            <td>${formData.gender}</td>
            <td>${formData.membership}</td>
            <td><button class="delete-button" data-index="${index}">Delete</button></td>
        `;
        dataBody.appendChild(newRow);
    });

    // Add event listener to delete buttons
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener("click", handleDeleteEntry);
    });
});

function handleDeleteEntry(event) {
    const index = parseInt(event.target.getAttribute("data-index"));
    const formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

    if (index >= 0 && index < formDataArray.length) {
        formDataArray.splice(index, 1);
        localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

        // Refresh the displayed data
        location.reload();
    }
}
