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



        //get value from from
        const name = nameElement.value;
        const fatherName = fatherNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experince = experinceElement.value;
        const skill = skillElement.value;
        const user = usernameElement.value;
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
    

       //display the resume in the out put container
       //resume out put 

        const resumeOutputElement = document.getElementById("resumeOutput")
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");


            //create container for buttons
            const buttonsContainer = document.createElement("div");
             buttonsContainer.id = "buttonsContainer";
             resumeOutputElement.appendChild(buttonsContainer);
 
             //add Downloads PDF button
             const downloadButton = document.createElement("button");
             downloadButton.textContent = "Download as PDF";
             downloadButton.addEventListener("click",() => {
                window.print(); //open the print dialog,allowing the user to save as PDF,
            });
            buttonsContainer.appendChild(downloadButton);

            //add shareable link button
            const shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy Shareable Link";
            shareableLinkButton.addEventListener("click", async () => {
                try{
              const shareableLink =`https://yourdomain.com/resumes/${name.replace( /\s+/g ," "
              )}_cv.html`;

              //use clipboard API to copy the shareable link
              await navigator.clipboard.writeText(shareableLink);
              alert("Shareable link copied to clipboard");
            } catch(err){
                console.error("Fail to copy link: ",err);
                alert("Fail to copy link to clipboard.Please try again.");
            }
              });
              buttonsContainer.appendChild(shareableLinkButton);
            }
             else{
                console.error("Resume output container not found")
             } 
            }
            });
         

      