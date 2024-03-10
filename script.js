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

document.querySelectorAll("img.icon").forEach(item => {

    item.addEventListener("click", event => {

        let elementID = parseInt(event.target.id).toString();
        console.log(elementID);

        if(event.target.className.includes("plus")) {

            let imgSource = document.getElementById(elementID + ".1");
            console.log(imgSource);
            imgSource.style.visibility = "hidden";
            imgSource.style.position = "absolute";

            let imgSource2 = document.getElementById(elementID + ".2");
            console.log(imgSource2);
            imgSource2.style.visibility = "visible";
            imgSource2.style.position = "relative";

            showParagraph(elementID);

        } else {

            let imgSource = document.getElementById(elementID + ".2");
            console.log(imgSource);
            imgSource.style.visibility = "hidden";
            imgSource.style.position = "absolute";

            let imgSource2 = document.getElementById(elementID + ".1");
            console.log(imgSource2);
            imgSource2.style.visibility = "visible";
            imgSource2.style.position = "relative";

            hideParagrap(elementID);
        };
    });
});



function showParagraph(a) {

    const faqSection = document.getElementsByClassName(a);
    console.log(faqSection);
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