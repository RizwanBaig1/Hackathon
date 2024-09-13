var _a;
//Listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var fatherNameElement = document.getElementById("fatherName");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experinceElement = document.getElementById("experince");
    var skillElement = document.getElementById("skill");
    if (nameElement && fatherNameElement && emailElement && emailElement && phoneElement && educationElement && experinceElement && skillElement) {
        var name_1 = nameElement.value;
        var fatherName = fatherNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experince = experinceElement.value;
        var skill = skillElement.value;
        //Create resume out put
        var resumeOutput = "\n     <h2>Resume</h2>\n     <p><strong>Name:</strong><span id =\"edit-name\"  class-\"editable> ".concat(name_1, " </span> </p>\n     <p><strong>Father Name :</strong><span id =\"edit-fatherName\"  class-\"editable> ").concat(fatherName, " </span> </p>\n     <p><strong>Email Address :</strong><span id =\"edit-email\"  class-\"editable> ").concat(email, " </span> </p>\n     <p><strong>Contact Number :</strong><span id =\"edit-phone\"  class-\"editable> ").concat(phone, " </span> </p>\n\n     <h3>Eduation</h3>\n     <p  id =\"edit-education\"  class-\"editable\">").concat(education, "</p>\n\n     <h3>Experience</h3>\n     <p  id =\"edit-experience\"  class-\"editable\">").concat(experince, "</p>\n\n     <h3>Skill</h3>\n     <p  id =\"edit-skill\"  class-\"editable\">").concat(skill, " </p>\n      ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        var _a;
        var currentElement = element;
        var currentvalue = currentElement.textContent || "";
        //replace content
        if (currentElement.tagName === "p" || currentElement.tagName === "span") {
            var input_1 = document.createElement("input");
            input_1.type = "text";
            input_1.value = currentvalue;
            input_1.classList.add("editing-input");
            input_1.addEventListener("blur", function () {
                currentElement.textContent = input_1.value;
                currentElement.style.display = "inline";
                input_1.remove();
            });
            currentElement.style.display = "none";
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
        }
    });
}
