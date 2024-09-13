var _a;
//Listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var fatherNameElement = document.getElementById("fatherName");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experinceElement = document.getElementById("experince");
    var skillElement = document.getElementById("skill");
    if (profilePictureInput && nameElement && fatherNameElement && emailElement && emailElement && phoneElement && educationElement && experinceElement && skillElement) {
        var name_1 = nameElement.value;
        var fatherName = fatherNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experince = experinceElement.value;
        var skill = skillElement.value;
        //picture elements
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        //Create resume out put
        var resumeOutput = "\n     <h2>Resume</h2>\n     ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile Picture\" class\"profilePicture\"") : "", "\n     <p><strong>Name:</strong> ").concat(name_1, " </p>\n     <p><strong>Father Name :</strong> ").concat(fatherName, " </p>\n     <p><strong>Email Address :</strong> ").concat(email, " </p>\n     <p><strong>Contact Number :</strong> ").concat(phone, " </p>\n\n     <h3>Eduation</h3>\n     <p>").concat(education, "</p>\n\n     <h3>Experience</h3>\n     <p><").concat(experince, "</p>\n\n     <h3>Skill</h3>\n     <p>").concat(skill, " </p>\n      ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
});
