$(document).ready(function() {
    
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });


        $(window).on('load scroll',function(){
            $('.fa-bars').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');

            if($(window).scrollTop() > 30){
                $('.header').css({'background': 'linear-gradient(to right, #6C5CE7, #000)',
                'box-shadow': '0 .2rem .5rem rgba(0, 0, 0, .4)'});
            }else{
                $('.header').css({'background':'none','box-shadow':'none'});
            }
        });
    
    // owl carousel script
    $('.carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $('.accordion-header').click(function() {
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    })

    const translations = {
        en: {
          Home: "Home",
          About: "About",
          Services: "Services",
          Work: "Our Work",
          Team: "Team",
          Contact: "Contact",
          FAQ: "FAQ",
          French: "French",
          English: "English",
          Spanish: "Spanish",
          Banner: "SYNTHAX",
          Slogan: "You have the idea, We have the team to make it happen for you",
          Heading: "About Us",
          Titre: "We Create Websites and Web Applications that build your business",
          Entreprise: "SYNTHAX is a dynamic IT company specialized in providing advanced technological solutions. We are passionate about IT and committed to helping our customers achieve their goals through customized and innovative solutions.",
          Why: "Why Us",
          Voir: "More",
          Serve: "Our Services",
          Development: "Mobile Application Development",
          Development1: "Mobile application development refers to the process of creating software applications specifically designed for use on mobile devices such as smartphones and tablets. Mobile apps aredeveloped for specific platforms such as iOS (for Apple devices such as iPhone and iPad) and Android (for devices running the Android operating system).",
          Development2: "Web development is the process of creating, building, and maintaining websites and web applications. It encompasses a wide range of tasks and technical skills needed to design and implement interactive and functional websites.",
          Web: "Web Development",
          Maintenance: "Website Maintenance",
          Depannage: "Repair",
          Design: "Design",
          Management: "Management",
          Teamates: "OUR TEAM",
          Message: "MESSAGE US"
        },
        fr: {
          Home: "Accueil",
          About: "À Propos",
          Services: "Services",
          Work: "Nos Travaux",
          Team: "Equipe",
          Contact: "Contact",
          FAQ: "FAQ",
          French: "Français",
          English: "Anglais",
          Spanish: "Espagnol",
          Banner: "SYNTHAX",
          Slogan: "Vous avez l'idée, Nous avons l'équipe pour la réaliser pour vous",
          Heading: "Concernant SYNTHAX",
          Titre: "Nous Créeons des Sites et Applications Web qui construisent votre business",
          Entreprise: "SYNTHAX est une entreprise informatique dynamique spécialisée dans la fourniture de solutions technologiques avancées.Nous sommes passionnés par l'informatique et déterminés à aider nos clients à atteindre leurs objectifs grâce à des solutions personnalisées et innovantes.",
          Why: "Pourquoi choisir SYNTHAX ?",
          Voir: "Voir Plus",
          Serve: "NOS SERVICES",
          Development: "Développement d'application Mobile",
          Development1: "Le développement d'application mobile fait référence au processus de création d'applications logicielles spécifiquement conçues pour être utilisées sur des appareils mobiles tels que les smartphones et les tablettes. Les applications mobiles sont développées pour des plateformes spécifiques telles qu'iOS (pour les appareils Apple tels que l'iPhone et l'iPad) et Android (pour les appareils fonctionnant sur le système d'exploitation Android).",
          Development2: "Le développement web est le processus de création, de construction et de maintenance de sites web et d'applications web. Il englobe un large éventail de tâches et de compétences techniques nécessaires pour concevoir et mettre en œuvre des sites web interactifs et fonctionnels.",
          Web: "Développement Web",
          Maintenance: "Maintenance de Site Web",
          Depannage: "Dépannage",
          Design: "Design",
          Management: "Gestion",
          Teamates: "NOTRE EQUIPE",
          Message: "CONTACTEZ-NOUS"
        }
      };
      
      function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
          const key = element.getAttribute('data-translate');
          element.textContent = translations[lang][key];
        });
      }
      
      const langButtons = document.querySelectorAll('.lang-button');
      const dropItems = document.querySelectorAll('.drop li:not(.lang-button)');
      
      langButtons.forEach(button => {
        button.addEventListener('click', function() {
          const lang = this.getAttribute('data-lang');
          changeLanguage(lang);
        });
      });
      
      dropItems.forEach(item => {
        item.addEventListener('click', function() {
          const lang = this.querySelector('a').getAttribute('data-lang');
          changeLanguage(lang);
        });
      });

      var btnVoirPlus = document.querySelector('.btn');
      var popup = document.getElementById('popup');
      var closeBtn = document.querySelector('.close');
      
      btnVoirPlus.addEventListener('click', function() {
        popup.style.display = 'block';
      });
      
      closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
      });
      
      
      
      
});