import * as MODEL from "../model/model.js";


// import {getName as MODEL} from "../model/model.js";


function init () {
    let currentHeroImage = "home";

    // MODEL();

    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentID = btnId + "Content"; 

        if(btnId == "home"){
            $(".hero").css("display", "block");

            $(".hero")
            .removeClass(`${currentHeroImage}-hero-image`)
            .addClass(`${btnId}-hero-image`);

            $("nav")
            .removeClass("black-nav")
            .addClass("white-nav");

            currentHeroImage = btnId; 
            MODEL.getPageContent(contentID , addHomeListeners);
        }
        else if(btnId == "tours"){
            $("nav")
            .removeClass("white-nav")
            .addClass("black-nav");

            removeHero (currentHeroImage);
            currentHeroImage = btnId;
            MODEL.getPageContent(contentID , addTourListeners);
        }
        else {

            $("nav")
            .removeClass("white-nav")
            .addClass("black-nav");

            removeHero(currentHeroImage);
            currentHeroImage = btnId;
            MODEL.getPageContent(contentID);

        }


        $(".hero-content .page-name").html(btnId)
    
        MODEL.getPageContent(contentID , addTourListeners)
        console.log("click");
    });
    $("blue-button a").click(function (e) {
        let btnId = this.id;
        let contentID = btnId + "Content"; 
        MODEL.getPageContent(contentID);
    });
}

function removeHero(currentHeroImage) {
    $(".hero").removeClass(`${currentHeroImage}-hero-image`);
    $(".hero").css("display" , "none");
}

function addHomeListeners(){
    $("#app .promo-tours .promo .isreal .blue-button a").click(function(e) {
        // console.log("israel")
        // if(btnId =="israel"){
        //     MODEL.getPageContent(contentID);
        // }
    })
    $("#app .promo-tours .promo .usa .blue-button a").click(function(e) {
        console.log("usa");
    })
    $("#app .promo-tours .promo .aust .blue-button a").click(function(e) {
        console.log("australia");
    })
}
function addTourListeners(){
    $("#app .promo-tours .promo .isreal .text .blue-button a").click(function(e) {
        console.log("israel");
    })
    $("#app .promo-tours .promo .usa .text .blue-button a").click(function(e) {
        console.log("usa");
    })
    $("#app .promo-tours .promo .aust .text .blue-button a").click(function(e) {
        console.log("australia");
    })
    $("#app .promo-tours .promo .newzealand .text .blue-button a").click(function(e) {
        console.log("newzealand");
    })
    $("#app .promo-tours .promo .france .text .blue-button a").click(function(e) {
        console.log("france");
    })
    $("#app .promo-tours .promo .egypt .text .blue-button a").click(function(e) {
        console.log("egypt");
    })
    $("#app .promo-tours .promo .japan .text .blue-button a").click(function(e) {
        console.log("japan");
    })
    $("#app .promo-tours .promo .canada .text .blue-button a").click(function(e) {
        console.log("canada");
    })
    $("#app .promo-tours .promo .uae .text .blue-button a").click(function(e) {
        console.log("uae");
    })
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent" , addHomeListeners , addTourListeners);
    // $("#app").addClass("homePadding")
});