function toggleDiv() {
    var div = document.getElementById("helpContent");
    var button = document.getElementById("toggleButton");
    if (div.style.display === "none") {
        div.style.display = "block";
        button.style.color = "grey"; // Change color when shown
    } else {
        div.style.display = "none";
        button.style.color = ""; // Reset color when hidden
    }
}

function toggleDivEnrollment() {
    var div = document.getElementById("Enrollment");
    var buttonTransaction = document.getElementById("toggleButtonTransaction");
    var buttonEnrollment = document.getElementById("toggleButtonEnrollment");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        buttonTransaction.style.color = "grey"; // Change color when shown
        buttonEnrollment.style.color = "grey"; // Change color when shown
    } else {
        div.style.display = "none";
        buttonTransaction.style.color = ""; // Reset color when hidden
        buttonEnrollment.style.color = "black"; // Reset color when hidden
    }
}

function toggleDivTermGrade() {
    var div = document.getElementById("Term-Grade-Content");
    var buttonReport = document.getElementById("toggleButtonReport");
    var buttonTermGrade = document.getElementById("toggleButtonTermGrade");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        buttonReport.style.color = "grey"; // Change color when shown
        buttonTermGrade.style.color = "grey"; // Change color when shown
    } else {
        div.style.display = "none";
        buttonReport.style.color = ""; // Reset color when hidden
        buttonTermGrade.style.color = "black"; // Reset color when hidden
    }
}

// Get the modal and enroll button
// Get the modals and buttons
var confirmationModal = document.getElementById("confirmationModal");
var successModal = document.getElementById("successModal");
var enrollBtn = document.getElementById("enrollBtn");
var confirmBtn = document.getElementById("confirmBtn");
var cancelBtn = document.getElementById("cancelBtn");
var closeBtns = document.getElementsByClassName("close");
var closeSuccessBtn = document.getElementById("closeSuccessBtn");

// Open the confirmation modal when the enroll button is clicked
enrollBtn.onclick = function() {
  confirmationModal.style.display = "block";
};

// Close the confirmation modal when the cancel button is clicked
cancelBtn.onclick = function() {
  confirmationModal.style.display = "none";
};

// Close the success modal when the close button is clicked
closeSuccessBtn.onclick = function() {
  successModal.style.display = "none";
};

// Close modals when the close (x) button is clicked
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
}

// Close the modals when clicking outside of them
window.onclick = function(event) {
  if (event.target == confirmationModal) {
    confirmationModal.style.display = "none";
  }
  if (event.target == successModal) {
    successModal.style.display = "none";
  }
};

// Show the success modal when the confirm button is clicked
confirmBtn.onclick = function() {
  confirmationModal.style.display = "none";
  successModal.style.display = "block";
};

function redirectToPrintPage() {
    window.location.href = "/print";
}