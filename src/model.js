import * as $ from "jquery";
import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { initListeners } from ".";
import { app } from "./firebaseConfig";
const auth = getAuth(app);



export function signUserUp(firstName, lastName, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        console.log("User created");
    })
    .catch((error) => {
        console.log(error);
    });

}

export function signUserOut() {
    signOut(auth)
    .then(() => {
        console.log("User signed out");
        $("#fName, #lName, #password").css("display", "none");
    })
    .catch((error) => {
        console.log("Error" + error);
    });
}

export function signUserIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        console.log("User signed in");
        $.get("pages/home.html", (data) => {
            $("#app").html(data);
        });
        
    })
    .catch((error) => {
        console.log(error);
        alert("incorrect email or password")
    });
}


function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID != "") {
        $.get(`pages/${ pageID }.html`, function
        (data) {
            $("#app").html(data);
            if (pageID == "signIn") {
                initListeners();
            }
        });
    } else {
        $.get(`pages/home.html`, function (data) {
            console.log("data " + data);
            $("#app").html(data);
        });
    }
}

export function intiURLListener() {
    $(window).on("hashchange", changeRoute);
    console.log("hi");
    changeRoute();
}

// export function intiURLListener() {
//     console.log("pageName", pageName);
//     if (pageName == "") {
//         $.get("pages/home.html", (data) => {
//             $("#app").html(data);
//         }).fail ((error) => {
//             console.log("error", error);
//             alert("Page Not Found");
//         });
//     } else {
//         $.get(`pages/${pageName}.html`, (data) => {
//             $("#app").html(data);
//         }).fail ((error) => {
//             console.log("error", error);
//             alert("Page Not Found");
//         });
//     }
// }

