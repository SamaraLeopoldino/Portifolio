const sr = ScollReveal({
    distance: '35px',
    duration: 2400,
    reset: ture
});

sr.reveal('.logo',{delay:210, origin: 'left'});  
sr.reveal('.navlist',{delay:210, origin: 'top'});
sr.reveal('.top-btnn',{delay:210, origin: 'right'});

sr.reveal('.main-content',{delay:510, origin: 'top'});
sr.reveal('.main-content h1',{delay:610, origin: 'left'})
sr.reveal('.main-content p',{delay:710, origin: 'right'})
sr.reveal('.social',{delay:810, origin: 'left'})
sr.reveal('.main.btnn',{delay:910, origin: 'top'})

sr.reveal('.bottom',{delay:1010, origin: 'bottom'})
