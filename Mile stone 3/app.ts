//Listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


    //type assertion
    const profilePictureInput =document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const fatherNameElement = document.getElementById("fatherName") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experinceElement = document.getElementById("experince") as HTMLInputElement;
    const skillElement = document.getElementById("skill") as HTMLInputElement;


    if (profilePictureInput && nameElement && fatherNameElement && emailElement && emailElement && phoneElement && educationElement && experinceElement && skillElement) {

        const name = nameElement.value;
        const fatherName = fatherNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experince = experinceElement.value;
        const skill = skillElement.value;

//picture elements
const profilePicturefile = profilePictureInput.files?.[0]
const profilePictureURL =  profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";

        //Create resume out put
        const resumeOutput = `
     <h2>Resume</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile Picture" class"profilePicture"` : ""}
     <p><strong>Name:</strong> ${name} </p>
     <p><strong>Father Name :</strong> ${fatherName} </p>
     <p><strong>Email Address :</strong> ${email} </p>
     <p><strong>Contact Number :</strong> ${phone} </p>

     <h3>Eduation</h3>
     <p>${education}</p>

     <h3>Experience</h3>
     <p><${experince}</p>

     <h3>Skill</h3>
     <p>${skill} </p>
      `;


        const resumeOutputElement = document.getElementById("resumeOutput")
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
        } else {
            console.error(`the resume output elements are missing`)
        }
 }
})

