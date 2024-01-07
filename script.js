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

            showParagraph(elementID)
        } else {

            hideParagrap(elementID);
        };

        updateState(selectedParagraph, elementID);
    });
});



function showParagraph(a) {

    const faqSection = document.getElementsByClassName(a);
    faqSection[0].style.visibility = "visible";
    faqSection[0].style.position = "relative";
};

function hideParagrap(a) {

    const faqSection = document.getElementsByClassName(a);
    faqSection[0].style.visibility = "hidden";
    faqSection[0].style.position = "absolute";
};

function updateState(a, b){

    if(a == "hidden") {

        stateManagement[b] = "visible"
    } else {

        stateManagement[b] = "hidden"
    };
};