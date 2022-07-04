<script setup lang="ts">
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="landing">
            <h1>Turtle Shuffle</h1>
            <h2>Your music companion</h2>
            <p>Just paste a Youtube music you like, we will do some magic.</p>
            <span>
                <input type="text" name="url" id="url" >
                <button id="getSong">Magic 🌈</button>
            </span>
        </section>
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
    margin: 0;
    padding: 0;
}

header nav {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

header nav ul {
    display: flex;
    list-style: none;
}

header nav ul li a {
    display: block;
    color: #fff;
    margin-right: 45px;
    text-decoration: none;
    font-size: 24px;
    cursor: pointer;
}

header nav ul li a::after {
    content: "";
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    display: block;
    border-radius: 100px;
    background: #fff;
    transition: width 0.2s ease-in-out;
}

header nav ul li a:hover::after {
    width: 100%;
}

body {
    background-image: linear-gradient(to left, #3061a1, #4966bb, #6d68d0, #9766e0, #c45ee9);
    font-family: Montserrat;
}

body h1,
body h2,
body p {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-align: center;
}

body h1 {
    font-size: clamp(2.5rem, 15vw, 150px);
    margin-top: 200px;
}

body h2 {
    font-size: clamp(1.5rem, 5vw, 80px);
}

body p {
    font-size: clamp(1rem, 5vw, 48px);
    margin-top: 125px;
}

body input {
    width: calc(100% - 80px);
    height: 92px;
    border-radius: 100px;
    border: none;
    padding: 0 40px;
    font-size: 41px;
    margin: 40px auto;
}

body input:active,
body input:focus {
    border: 0;
}

body input span {
    position: relative;
    display: block;
    max-width: 1487px;
    margin: 32px auto;
}

body input span::after {
    content: "Magic 🌈";
    position: absolute;
    top: 9px;
    left: auto;
    bottom: 0px;
    right: 9px;
    width: 313.28px;
    height: 75px;
    font-size: 38px;
    line-height: 46px;
    background-image: linear-gradient(89.63deg, rgba(119, 178, 255, 0.36) 0.65%, #A687FF 100.06%);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

body{
    background-image: linear-gradient(to left, #3061a1, #4966bb, #6d68d0, #9766e0, #c45ee9); 
}
h1,h2,p{
    color: #ffffff;
    font-family: Montserrat;
    margin: 0;
    padding: 0;
    text-align: center;
}
h1{
    font-size: clamp(2.5rem,15vw,150px);
    margin-top: 200px;
}
h2{
    font-size: clamp(1.5rem,5vw,80px);
}

p{
    font-size: clamp(1rem,5vw,48px);
    margin-top: 125px;
}
input{
    border-radius: 100px;
    
    width: calc(100% - 80px);
    height: 92px;
    display: block;
    border: none;
    padding: 0 41px;
    font-size: 41px;
    margin: 40px auto;
}
input:active,input:focus{
    border: 0px;
    /* opacity: 0.5; */
}

span{
    position: relative;
    display: block;
    max-width: 1487px;
    margin: 32px auto;
}
button{
    font-size: 38px;
    line-height: 46px;

    color: #FFFFFF;
    position: absolute;
    top: 9px;
    left: auto;
    bottom: 0px;
    right: 9px;
    width: 313.28px;
    height: 75px;
    
    background-image: linear-gradient(89.63deg, rgba(119, 178, 255, 0.36) 0.65%, #A687FF 100.06%);
    border-radius: 100px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
