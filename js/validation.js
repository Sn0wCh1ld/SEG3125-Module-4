var requiredFields = [
    {
        name: "fullname",
        english: "Full Name"
    },
    {
        name: "email",
        english: "Email Address"
    },
    {
        name: "phone",
        english: "Phone Number"
    },
    {
        name: "cardnumber",
        english: "Credit Card Number"
    },
    {
        name: "cvv",
        english: "CVV"
    },
    {
        name: "postalcode",
        english: "Postal Code"
    }
]


function validateBookAppointment() {
    var userEntry;

    // check for text field emptiness
    for (var fieldIndex in requiredFields) {
        var field = requiredFields[fieldIndex];
        userEntry = document.forms["appointment"][field.name].value;
        if (userEntry == "") {
            alert(field.english + " is required");
            return false;
        }
    }

    // check email address for @ and domain extension
    var field = requiredFields[1];
    userEntry = document.forms["appointment"][field.name].value;
    if (userEntry.indexOf('@') < 0 || userEntry.indexOf('.') < 0) {
        alert("Email address is invalid");
        return false;
    }

    // check that phone number only contains 10 characters
    var field = requiredFields[2];
    userEntry = document.forms["appointment"][field.name].value;
    if (userEntry.length != 10) {
        alert("Phone Number is invalid");
        return false;
    }

    // check that card number only contains 16 characters
    var field = requiredFields[3];
    userEntry = document.forms["appointment"][field.name].value;
    if (userEntry.length != 16) {
        alert("Credit Card Number is invalid");
        return false;
    }

    // check that cvv only contains 3 characters
    var field = requiredFields[4];
    userEntry = document.forms["appointment"][field.name].value;
    if (userEntry.length != 3) {
        alert("CVV is invalid");
        return false;
    }

    return true;
}