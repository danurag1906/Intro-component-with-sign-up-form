const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    validateInputs();
});
const setError = (element, message)=>{
    const formcontrol = element.parentElement;
    const inputtag = formcontrol.querySelector(".input");
    const errordisplay = formcontrol.querySelector(".error");
    errordisplay.innerText = message;
    // errordisplay.classList.add(" error");
    inputtag.classList.add("focuserror");
    inputtag.classList.remove("success");
};
const setSuccess = (element)=>{
    const formcontrol = element.parentElement;
    const errodisplay = formcontrol.querySelector(".error");
    errodisplay.innerText = "";
    const inputtag = formcontrol.querySelector(".input");
    inputtag.classList.add("success");
    inputtag.classList.remove("focuserror");
};
const falseEmail = (element, message)=>{
    const formcontrol = element.parentElement;
    const inputtag = formcontrol.querySelector(".input");
    const errordisplay = formcontrol.querySelector(".error");
    errordisplay.innerText = message;
    inputtag.classList.add("focuserror");
    inputtag.classList.remove("succes");
};
const validateInputs = ()=>{
    const firstname = fname.value.trim();
    const lastname = lname.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //first name
    if (firstname === "") setError(fname, "First Name cannot be empty");
    else setSuccess(fname);
    //last name
    if (lastname === "") setError(lname, "Last Name cannot be empty");
    else setSuccess(lname);
    //email
    if (emailvalue === "") setError(email, "Email cannot be empty");
    else if (!emailvalue.match(validRegex)) falseEmail(email, "Looks like this is not an email");
    else setSuccess(email);
    // //password
    if (passwordvalue === "") setError(password, "password cannot be empty");
    else setSuccess(password);
    // //button
    if (firstname === "" || lastname === "" || emailvalue === "" || passwordvalue === "") {
        const buttonset = button;
        buttonset.classList.add("inactive");
    } else {
        const buttonset1 = button;
        buttonset1.classList.remove("inactive");
    }
};

//# sourceMappingURL=index.c36f364e.js.map
