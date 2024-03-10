let stateManagement = {
    
    1: "hidden",
    2: "hidden",
    3: "hidden",
    4: "hidden"
}


document.querySelectorAll("h2").forEach(item => {

    item.addEventListener("click", event => {

        const elementID =  event.target.id;
        const selectedParagraph = stateManagement[elementID];

        if(selectedParagraph == "hidden") {

            showParagraph(elementID);
        } else {

            hideParagrap(elementID);
        };

        updateState(selectedParagraph, elementID);
    });
});

document.querySelectorAll("img.icon").forEach(item => {

    item.addEventListener("click", event => {

        const elementID = parseInt(event.target.id).toString();
        const selectedParagraph = stateManagement[elementID];

        if(selectedParagraph == "hidden") {

            showParagraph(elementID);
        } else {

            hideParagrap(elementID);
        };

        updateState(selectedParagraph, elementID);
 
    });
});


function showParagraph(elementID) {

    const faqSection = document.getElementsByClassName(elementID);
    faqSection[0].style.visibility = "visible";
    faqSection[0].style.position = "relative";

    let imgSource = document.getElementById(elementID + ".1");
    imgSource.style.visibility = "hidden";
    imgSource.style.position = "absolute";

    let imgSource2 = document.getElementById(elementID + ".2");
    imgSource2.style.visibility = "visible";
    imgSource2.style.position = "relative";



};

function hideParagrap(elementID) {

    const faqSection = document.getElementsByClassName(elementID);
    faqSection[0].style.visibility = "hidden";
    faqSection[0].style.position = "absolute";

    let imgSource = document.getElementById(elementID + ".2");
    imgSource.style.visibility = "hidden";
    imgSource.style.position = "absolute";

    let imgSource2 = document.getElementById(elementID + ".1");
    imgSource2.style.visibility = "visible";
    imgSource2.style.position = "relative";
};

function updateState(a, b){

    if(a == "hidden") {

        stateManagement[b] = "visible"
    } else {

        stateManagement[b] = "hidden"
    };
};