
const myBtn = document.querySelectorAll('.resume-btn');
//=========================

myBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const resumeDetail = document.querySelectorAll('.resume-detail');

        myBtn.forEach(btn => {
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        resumeDetail.forEach(details => {
            details.classList.remove('active');
        });
        resumeDetail[index].classList.add('active');

    });
});

let index = 0;  // Declare index as 'let' so that it can be updated

const arrowRight = document.querySelector('.fa-arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .fa-arrow-left');

// Function to update the image slider position based on the current index
const activePortfolio = () => {
    const imgSlider = document.querySelector('.img-slide');
    const PortfolioDetails = document.querySelectorAll('.portfolio-detail');

    PortfolioDetails.forEach(details => {
        details.classList.remove('active');
    });
    PortfolioDetails[index].classList.add('active');

    imgSlider.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
};

// Arrow Right Click Event
arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

// Arrow Left Click Event
arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
const navLink = document.querySelectorAll('.header .nav a');
const logoLink = document.querySelectorAll('.logo');
const section = document.querySelectorAll('section');
// onlick Menua 
let menuaIcon = document.querySelector('#menua-icon');
let navbar = document.querySelector('ul');
menuaIcon.addEventListener('click',() => {
    menuaIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
});



const activepage = () => {
    const header = document.querySelector('.header');
    const barsBox = document.querySelector('.bars-box');
    // console.log(barsBox);

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLink.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    section.forEach(sec => {
        sec.classList.remove('active');
    });

    menuaIcon.classList.remove('fa-x');
    navbar.classList.remove('active');

}

navLink.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activepage();
            link.classList.add('active');

            setTimeout(() => {
                section[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!link[0].classList.contains('active')) {
        activepage();
        navLink[0].classList.add('active');
        setTimeout(() => {
            section[0].classList.add('active');
        }, 1100);
    }
});

