 
export const introBackgroundConfig = {
    particles: "particles",
    image: "image",
    video: "video",
};


export const socialIcons = [
    {
      title: "Twitter",
      icon: "fab fa-twitter",
      href: "https://twitter.com/harnishdesign/",
      className: "social-icons-twitter",
    },
    {
      title: "Facebook",
      icon: "fab fa-facebook-f",
      href: "http://www.facebook.com/harnishdesign/",
      className: "social-icons-facebook",
    },
    {
      title: "Linkedin",
      icon: "fab fa-linkedin-in",
      href: "http://www.linkedin.com/",
      className: "social-icons-linkedin",
    },
    {
      title: "Dribbble",
      icon: "fab fa-dribbble",
      href: "http://www.dribbble.com/harnishdesign/",
      className: "social-icons-dribbble",
    },
    {
      title: "GitHub",
      icon: "fab fa-github",
      href: "http://www.github.com/",
      className: "social-icons-github",
    },
  ];

  export const appliedConfig = {
    // apply Intro from :  particles
    appliedIntro: introBackgroundConfig.particles,
    
    //For development purposes
    particlesOn: true,
  
    // applied initial Dark Theme template
    isDarkTheme: false,
  
    themeColor: "yellow"
  };

  export const lineParticles = {
    fullScreen: {enable: false,},
    background: {color: {value: "#111418",}, },
    fpsLimit: 120,
    interactivity:    {events: {onClick: {enable: true, mode: "push",}, onHover: {enable: true, mode: "repulse",},},
                      modes: {push: {quantity: 2,},repulse: {distance: 50, duration: 0.4,},},},
    particles:        {color: {value: "#ffffff",},
                      links: {color: "#ffffff",distance: 150,enable: true,opacity: 0.4,width: 1,},
                      move: {direction: "none",enable: true, outModes: {default: "bounce",}, random: false, speed: 3, straight: false,},
                      number: {density: {enable: true,},value: 15,},
                      opacity: {value: 0.4,},
                      shape: {type: "circle",},
                      size: {value: { min: 1, max: 5 },},},
    detectRetina: true,
  }