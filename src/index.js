import * as $ from "jquery";
import { signUserUp, signUserOut, signUserIn, intiURLListener } from "./model";

export function initListeners() {
    $("#submit").on("click", () => {
        console.log("button clicked");
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        let password = $("#password").val();
        signUserUp(firstName, lastName, email, password);
        $("#fName, #lName, #password").css("display", "block");

    });

    $("#sign-out").on("click", () => {
        signUserOut();
    });

    $("#siSubmit").on("click", () => {
        let siEmail = $("#siEmail").val();
        let siPassword = $("#siPassword").val();
        let terms = $("#terms").val();
        let pfoc = $("#pfoc").val();
        let fName = $("#fName").val();
        let lName = $("#lName").val();
        let lNameFoc = $("#fNameFoc").val();
        let fNameFoc = $("#lNameFoc").val();

        signUserIn(siEmail, siPassword, terms, pfoc, fName, lName, fNameFoc, lNameFoc);
        $("#siPassword").css("display", "block");
        $("#terms").css("display", "block");
        $("#pfoc").css("display", "block");
        $("#fName").css("display", "block");
        $("#lName").css("display", "block");
        $("#lNameFoc").css("display", "block");
        $("#fNameFoc").css("display", "block");
    });

    $("#clickBox").on("click", () => {
        let checkBox = $("#checkBox").val();
        $("#checkBox").css("display", "block");
        $("#clickBox").css("display", "none");
    });

    $("#checkBox").on("click", () => {
        let checkBox = $("#checkBox").val();
        $("#checkBox").css("display", "none");
        $("#clickBox").css("display", "block");
    });

    $("input").on("focus", function () {
        $(this).next(".focused").addClass("visible");
    });
    
    $("input").on("blur", function () {
        if (!$(this).val()) {
            // Only reset if input is empty
            $(this).next(".focused").removeClass("visible");
        }
    });
}







// function initAccountListener () {
//     changeRoute();
// }



$(document).ready(function () {
    intiURLListener(); 
    // initListeners();

    // initAccountListener();
    // initSite();
});