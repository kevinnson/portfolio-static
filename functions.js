function highlightTab(page) {
    document.querySelector(page).style.backgroundColor = "DarkCyan";
}

function initalizeLightBox() {
    // create the light box element and add it to the body
    // this will not be displayed by the css predefined
    var lb = document.createElement('div');
    lb.id = 'light-box';
    document.body.appendChild(lb);

    // add event listeners for all of the images in the gallery
    var images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', e => {
            // once clicked, the light box will appear

            // add the image chosen to the light box element
            var chosenImg = document.createElement('img');
            chosenImg.src = img.src;
            lb.appendChild(chosenImg);

            // opened as its own css predefined that will display the image
            lb.classList.add('opened');
        });
    });

    // reset the light box once user wants to exit
    lb.addEventListener('click', e => {
        // got to close down the light box since user selected light box and not the image
        if (e.target === e.currentTarget) {
            // need to remove image element from light box added
            lb.removeChild(lb.childNodes[0]);

            // light box doesn't have opened attribute anymore since it's going to close
            lb.classList.remove('opened');
        }
        // allows user to exit by clicking outside of the image aka the current target
        // target is the lightbox div itself, so not clicking will not exit
        else {
            return;
        }

    });
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function initializeScrollButton() {
    // create button element and add it to the body
    var sb = document.createElement('button');
    sb.id = 'scroll-button';
    sb.innerHTML = 'Back to Top'
    document.body.appendChild(sb);

    // add listener for button functionality
    sb.addEventListener('click', scrollToTop);

    // have the button to show once past quarter of page
    window.addEventListener('scroll', function() {
        // calculate quarter of the page
        // get the height of the window
        currHeight = window.innerHeight;
        quarter = currHeight / 4;

        // get the scroll position
        scrollPos = document.documentElement.scrollTop

        // if past a quarter, show the button
        if (scrollPos > quarter) {
            sb.classList.add('show');
        }

        // remove the button if not past a quarter of the page
        if (scrollPos <= quarter) {
            sb.classList.remove('show');
        }
    });
}
