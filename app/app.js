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

            $(".hero").css("display", "block");


            removeHero(currentHeroImage);
            currentHeroImage = btnId;
            // MODEL.getPageContent(contentID , addTourListeners);
        }
        else {

            $("nav")
            .removeClass("white-nav")
            .addClass("black-nav");

            $(".hero").css("display", "block");


            removeHero(currentHeroImage);
            currentHeroImage = btnId;
            MODEL.getPageContent(contentID);

        }


        $(".hero-content .page-name").html(btnId)
    
        MODEL.getPageContent(contentID , addTourListeners)
        console.log("click");
    });
}

function removeHero(currentHeroImage) {
    $(".hero").removeClass(`${currentHeroImage}-hero-image`);
    $(".hero").css("display" , "none");
}

function addHomeListeners(){
    let currentHeroImage = "home";

    $("#app .promo-tours .promo .isreal .blue-button a").click(function(e) {
        console.log("israel");
        removeHero(currentHeroImage);
        MODEL.getPageContent("israelContent");


        $("nav")
            .removeClass("white-nav")
            .addClass("black-nav");
    })
    $("#app .promo-tours .promo .usa .blue-button a").click(function(e) {
        console.log("usa");
        removeHero(currentHeroImage);
        MODEL.getPageContent("usaContent");

        $("nav")
            .removeClass("white-nav")
            .addClass("black-nav");

    })

    $("#app .promo-tours .promo .aust .blue-button a").click(function(e) {
        console.log("australia");
        removeHero(currentHeroImage);
        MODEL.getPageContent("austContent");

        $("nav")
            .removeClass("white-nav")
            .addClass("black-nav");

    })
}
function addTourListeners(){
    $("#app .promo-tours .promo .isreal .text .blue-button a").click(function(e) {
        console.log("israel");
        MODEL.getPageContent("israelContent");

    })

    $("#app .promo-tours .promo .usa .text .blue-button a").click(function(e) {
        console.log("usa");
        MODEL.getPageContent("usaContent");

    })

    $("#app .promo-tours .promo .aust .text .blue-button a").click(function(e) {
        console.log("australia");
        MODEL.getPageContent("ausContent");

    })

    $("#app .promo-tours .promo .newzealand .text .blue-button a").click(function(e) {
        console.log("newzealand");
        MODEL.getPageContent("nzContent");

    })

    $("#app .promo-tours .promo .france .text .blue-button a").click(function(e) {
        console.log("france");
        MODEL.getPageContent("franceContent");

    })

    $("#app .promo-tours .promo .egypt .text .blue-button a").click(function(e) {
        console.log("egypt");
        MODEL.getPageContent("egyptContent");

    })

    $("#app .promo-tours .promo .japan .text .blue-button a").click(function(e) {
        console.log("japan");
        MODEL.getPageContent("japanContent");

    })

    $("#app .promo-tours .promo .canada .text .blue-button a").click(function(e) {
        console.log("canada");
        MODEL.getPageContent("canaContent");

    })
    
    $("#app .promo-tours .promo .uae .text .blue-button a").click(function(e) {
        console.log("uae");
        MODEL.getPageContent("uaeContent");

    })
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent" , addHomeListeners , addTourListeners , removeHero);
    // $("#app").addClass("homePadding")
});