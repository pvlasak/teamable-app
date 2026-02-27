<template>
        <div id="display-view">
            <h1> User profile </h1>
            <img :src="image">

            <span> Name: </span><b id="name"> {{ name }}</b>
            <hr/>
            
            <span> Email: </span><b id="email"> {{ email }} </b>
            <hr/> 

            <span> Interesets: </span><b id="interests"> {{ interests }} </b>
            <hr/>  
            <button @click="handleEditProfile"> Edit Profile </button>
        </div>

        <div id="edit-view">
            <h1> User profile </h1>
            <img src="image">

            <span> Name: </span>
            <input type="text" id="input-name" :placeholder="name" /> 
            <hr/>
            
            <span> Email: </span>
            <input type="text" id="input-email" :placeholder="email" />
            <hr/> 

            <span> Interesets: </span> 
            <input type="text" id="input-interests" :placeholder= "interests"/>
            <hr/>  
            <button @click="handleUpdateProfile"> Update Profile </button>            
         </div>
</template>

<script>
import image from "./images.jpeg"
export default {
    name: 'App',
    data() {
        return {
            image: image,
            name: "Anna Smith",
            email: "anna.smith@example.com",
            interests: "coding"
        }
    },
    methods: {
        handleEditProfile() {
            var name=document.getElementById("name").textContent
            var inputName=document.getElementById("input-name")
            inputName.value=name

            var email=document.getElementById("email").textContent
            var inputEmail=document.getElementById("input-email")
            inputEmail.value=email

            var interests=document.getElementById("interests").textContent
            var inputInterests=document.getElementById("input-interests")
            inputInterests.value=interests
                        
            document.getElementById("edit-view").style.display="block";
            document.getElementById("display-view").style.display="none"
        },
        handleUpdateProfile() {
            var updated_name = document.getElementById("input-name").value
            var name=document.getElementById("name")
            name.textContent = updated_name

            var updated_email = document.getElementById("input-email").value
            var email=document.getElementById("email")
            email.textContent = updated_email

            var updated_interests = document.getElementById("input-interests").value
            var interests=document.getElementById("interests")
            interests.textContent = updated_interests
            document.getElementById("edit-view").style.display="none";
            document.getElementById("display-view").style.display="block"
        }
    }
}
</script>

<style>
img {
    width: 250px;
    display: block;
    margin-bottom: 40px;
}

div {
    margin: 40px auto;
    width: 80%;
}

hr {
    width: 400px;
    margin: 25px 0; 
}

button {
    width: 160px;
    font-size: 15px;
    height: 45px;
    border-radius: 5px;
}

button:hover {
    cursor: pointer;
}

input {
    width: 200px;
    font-size: 15px;
    padding: 10px;
}

#edit-view {
    display: none;
}

.datepicker {
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>