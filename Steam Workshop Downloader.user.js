// ==UserScript==
// @name         Steam Workshop Downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A steam workshop downloader using steamworkshop.download
// @author       Afterro
// @match        https://steamcommunity.com/sharedfiles/filedetails/?id=*
// @icon         https://store.steampowered.com/favicon.ico
// @grant        none
// ==/UserScript==

function CreateButton() {
    let downloadSection = document.getElementById("SubscribeItemBtn").parentElement.parentElement;

    let buttonDiv = document.createElement("div");

    let buttonA = document.createElement("a");
    buttonA.id = "DownloadButton";
    buttonA.className = "btn_green_white_innerfade btn_border_2px btn_medium"

    let buttonSpan = document.createElement("span");
    buttonSpan.style.paddingLeft = "15px";
    buttonSpan.className = "subscribeText";

    let spanDiv = document.createElement("div");
    spanDiv.className = "subscribeOption subscribe selected";
    spanDiv.innerHTML = "Pobierz";

    buttonSpan.appendChild(spanDiv);
    buttonA.appendChild(buttonSpan);
    buttonDiv.appendChild(buttonA)
    downloadSection.appendChild(buttonDiv);
    buttonA.addEventListener("click", OnDownloadClick)
}

function OnDownloadClick() {
    console.log("Trying to open download page...")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var itemId = urlParams.get("id")
    window.open('http://steamworkshop.download/download/view/' + itemId);
}

CreateButton();