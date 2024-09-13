//Listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const fatherNameElement = document.getElementById("fatherName") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experinceElement = document.getElementById("experince") as HTMLInputElement;
    const skillElement = document.getElementById("skill") as HTMLInputElement;
    
    
    //url genrate
     const usernameElement =document.getElementById("username") as HTMLInputElement;

     //** 
    if (usernameElement && nameElement && fatherNameElement && emailElement && emailElement && phoneElement && educationElement && experinceElement && skillElement && usernameElement) {

        const name = nameElement.value;
        const fatherName = fatherNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experince = experinceElement.value;
        const skill = skillElement.value;
        
        //**
         const username = usernameElement.value;
         const uniquePath = `resumes/${username.replace(/\s+/g,"")}_cv.html`
         


        //Create resume out put
        const resumeOutput = `
     <h2>Resume</h2>
     <p><strong>Name:</strong><span id ="edit-name"  class-"editable> ${name} </span> </p>
     <p><strong>Father Name :</strong><span id ="edit-fatherName"  class-"editable> ${fatherName} </span> </p>
     <p><strong>Email Address :</strong><span id ="edit-email"  class-"editable> ${email} </span> </p>
     <p><strong>Contact Number :</strong><span id ="edit-phone"  class-"editable> ${phone} </span> </p>

     <h3>Eduation</h3>
     <p  id ="edit-education"  class-"editable">${education}</p>

     <h3>Experience</h3>
     <p  id ="edit-experience"  class-"editable">${experince}</p>

     <h3>Skill</h3>
     <p  id ="edit-skill"  class-"editable">${skill} </p>
      `;

      //**
       const downloadLink = document.createElement("a")
       downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput)
       downloadLink.download = uniquePath;
       downloadLink.textContent = "Down Your Resume";
        
       
       
       //display the resume in the output container
       //resume out put 

        const resumeOutputElement = document.getElementById("resumeOutput")
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
      
            // create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            //add Downloads PDF button
            const downloadbutton = document.createElement("button");
            downloadbutton.textContent = ""



            //** 
            resumeOutputElement.appendChild(downloadLink)
            resumeOutputElement.style.display ="block"
           
        } else {
            console.error(`the resume output elements are missing`)
        }
 }
});


function makeEditable(){
    const editableElements = document.querySelectorAll(`.editable`);
    editableElements.forEach(element => {
        const currentElement = element as HTMLElement;
        const currentvalue =currentElement.textContent || "";

        //replace content
        if (currentElement.tagName === "p" || currentElement.tagName === "span") {
            const input = document.createElement("input")
            input.type ="text"
            input.value = currentvalue
            input.classList.add("editing-input")



input.addEventListener("blur", function (){
    currentElement.textContent = input.value;
    currentElement.style.display = "inline"
    input.remove()
})






            
            
            currentElement.style.display = "none"
            currentElement.parentNode?.insertBefore(input,currentElement)
      
        }    })
}



