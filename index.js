function submitForm() {
    let name = document.forms["regForm"]["name"].value;
    let email = document.forms["regForm"]["email"].value;
    let website = document.forms["regForm"]["website"].value;
    let image = document.forms["regForm"]["image"].value;
    const img = document.createElement("img");
    const description = document.createElement("div");
    const enrollment = document.createElement("div");
    const container = document.getElementById("user");

    console.log(name)
    if (name == "") {
      nameInput = document.forms["regForm"]["name"]
      nameInput.style.border = "1px solid red";
      nameInput.className += "error"
    }
    if (email == "") {
      emailInput = document.forms["regForm"]["email"]
      emailInput.style.border = "1px solid red";
      emailInput.className += "error"

    }
    if (website == "") {
      websiteInput = document.forms["regForm"]["website"]
      websiteInput.style.border = "1px solid red";
      websiteInput.className += "error"

    }
    if (image == "") {
      imageInput = document.forms["regForm"]["image"]
      imageInput.style.border = "1px solid red";
      imageInput.className += "error"
    }
    else{
      nameInput.classList.remove("error") 
      emailInput.classList.remove("error")
      websiteInput.classList.remove("error") 
      imageInput.classList.remove("error")
    }

    if (name == "" || email == "" || website == "" || image == ""){
      return
    }

    img.src = image;
    img.style.width = "100px";
    img.style.height = "100px";
    enrollment.append(img);

    const nameText = document.createElement("h3");
    nameText.innerHTML = name;
    nameText.style.marginLeft = "0px"
    nameText.style.marginTop = "0px"
    nameText.style.marginBottom = "5px"

    container.marginBottom = "20px"
    img.marginBottom = "20px"

    const emailText = document.createElement("p");
    emailText.innerHTML = email;
    emailText.style.marginBottom = "5px"

    const websiteText = document.createElement("p");
    websiteText.innerHTML = website;
    websiteText.style.marginBottom = "5px"

    const radioButtons = document.querySelectorAll('input[name="gender"]');
    let gender;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        gender = radioButton.value;
          break;
      }
    }
    const genderText = document.createElement("p")
    genderText.style.marginBottom = "5px";
    genderText.innerHTML = gender;
    description.appendChild(nameText);
    description.appendChild(genderText);
    description.appendChild(emailText);
    description.appendChild(websiteText);

    const skills = document.createElement("p")
    skills.id = "skills";
    const skillBtns = document.querySelectorAll('input[name="skill"]');
    let count = 0;
    for (const skillBtn of skillBtns) {
      if (skillBtn.checked) {
        skills.append(skillBtn.value + " ");
        count += 1
        skillBtn.checked = false;
      }
    }
    if (count == 0){
      skills.append("None")
    }

    description.style.marginLeft = "50px";
    img.style.marginLeft = "10px";
    description.appendChild(skills)
    enrollment.appendChild(description)
    container.appendChild(enrollment)
    enrollment.style.display = "flex"
    enrollment.style.marginBottom = "20px"
    
    document.forms["regForm"]["name"].value = null;
    document.forms["regForm"]["email"].value = null;
    document.forms["regForm"]["website"].value = null;
    document.forms["regForm"]["image"].value = null;

}

function onClear(){
  document.forms["regForm"]["name"].value = null;
  document.forms["regForm"]["email"].value = null;
  document.forms["regForm"]["website"].value = null;
  document.forms["regForm"]["image"].value = null;

  const skillBtns = document.querySelectorAll('input[name="skill"]');
  for (const skillBtn of skillBtns) {
    if (skillBtn.checked) {
      skillBtn.checked = false;
    }
  }
}