function handleEditProfile() {
    var name=document.getElementById("name").textContent
    var inputName=document.getElementById("input-name")
    inputName.value=name

    var email=document.getElementById("email").textContent
    var inputEmail=document.getElementById("input-email")
    inputEmail.value=email

    var interests=document.getElementById("interests").textContent
    var inputInterests=document.getElementById("input-interests")
    inputInterests.value=interests
    
    var datepicker=new Datepicker('#birthday')
    
    document.getElementById("edit-view").style.display="block";
    document.getElementById("display-view").style.display="none"
}

function handleUpdateProfile() {
    var updated_name = document.getElementById("input-name").value
    var name=document.getElementById("name")
    name.textContent = updated_name

    var updated_email = document.getElementById("input-email").value
    var email=document.getElementById("email")
    if (validator.isEmail(updated_email)) {
        email.textContent = updated_email
    } else {
        alert("this is wrong email format")
    }
    var updated_interests = document.getElementById("input-interests").value
    var interests=document.getElementById("interests")
    interests.textContent = updated_interests
    document.getElementById("edit-view").style.display="none";
    document.getElementById("display-view").style.display="block"
}