document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
        event.preventDefault();

        // Type assertions
        const nameElement = document.getElementById('name') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const phoneElement = document.getElementById('phone') as HTMLInputElement;
        const educationElement = document.getElementById('education') as HTMLTextAreaElement;
        const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
        const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
        const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement;

        // Resume output
        if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
            const name = nameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const education = educationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;

            const profilePictureUrl = profilePictureElement.files?.[0] ? URL.createObjectURL(profilePictureElement.files[0]) : '';

            const resumeOutput = `
                <h2>Resume</h2>
                ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;"/>` : ''}
                <p class="editable" id="editableName"><strong>Name:</strong> ${name}</p>
                <p class="editable" id="editableEmail"><strong>Email:</strong> ${email}</p>
                <p class="editable" id="editablePhone"><strong>Phone Number:</strong> ${phone}</p>
                <p class="editable" id="editableEducation"><strong>Education:</strong> ${education}</p>
                <p class="editable" id="editableExperience"><strong>Experience:</strong> ${experience}</p>
                <p class="editable" id="editableSkills"><strong>Skills:</strong> ${skills}</p>
            `;

            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;

                // Add click event listeners for editable sections
                document.querySelectorAll('.editable').forEach(element => {
                    element.addEventListener('click', () => {
                        const currentContent = (element as HTMLElement).innerHTML;
                        const newContent = prompt('Edit content:', currentContent.replace(/<[^>]+>/g, '').trim());
                        if (newContent !== null) {
                            (element as HTMLElement).innerHTML = newContent;
                        }
                    });
                });
            } else {
                console.error("The resume output element is missing.");
            }
        } else {
            console.log("One or more form elements are missing.");
        }
    });
});

