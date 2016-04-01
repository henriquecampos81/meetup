module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Sebrae Meetup",
      description: "Palestras sobre desenvolvimento de software",
      date: "2016",
      // If your event is free, just comment this line
      //price: "R$0,00",
      venue: "Sebrae MG - Sala 7",
      address: "Av. Barão Homem de Melo, 329 - Sala 7",
      city: "Belo Horizonte",
      state: "Minas Gerais"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    // callToAction: {
    //     text: "Register now!",
    //     link: "http://eventick.com.br"
    // },

    // // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
    },

    // The entire schedule
    schedule: [
      {
        name: "Daniel Lopes",
        photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAOGAAAAJGRhZjI4NWU4LWNjZmUtNDY4MC1hYTlhLTIyOWFlMGFkOTczNA.jpg",
        bio: "Formado em Ciência da Computação, especialista em Design de Interação",
        company: "Sebrae MG, COTEMIG, UFMG",
        link: {
          href: "https://www.linkedin.com/in/dlopess",
          text: "linkedin"
        },
        presentation: {
          title: "Design Sprint",
          description: "Apresentação e discussão para buscar formas de adaptar e customizar o design sprint para o contexto atual",
          time: "15/04/2016  - 14h00"
        }
      },
      {
        name: "Jansen Felipe",
        photo: "https://avatars2.githubusercontent.com/u/3134214?v=3&s=400",
        bio: "Formado em Sistemas de Informação, especializando em Design de Interação",
        company: "Sebrae MG, supliu, Casa Deguste",
        link: {
          href: "https://twitter.com/jansenfelipe",
          text: "@jansenfelipe"
        },
        presentation: {
          title: "Optical Mark Recognition",
          description: "Uma explicação dos conceitos do OMR, como definir um mapa JSON e aplicação prática em projetos",
          time: "16/05/2016  - 14h00"
        }
      },
      {
        name: "Celeste Magela Campos da Silva",
        photo: "https://avatars0.githubusercontent.com/u/6642848?v=3&s=460",
        bio: "Formada em Ciência da Computação, especialista em Engenharia de Software",
        company: "Sebrae MG",
        link: {
          href: "https://twitter.com/CelesteMagela",
          text: "@CelesteMagela"
        },
        presentation: {
          title: "Voice Actions",
          description: "Aplicação de Voice Actions e sua utilização no android",
          time: "14/06/2016  - 14h00"
        }
      },
      {
        name: "Diego Gurgel",
        photo: "https://avatars0.githubusercontent.com/u/2058439?v=3&s=460",
        bio: "Formado em Sistemas de Informação, especialista em Desenvolvimento de Aplicações Web, especializando em Design de Interação",
        company: "Sebrae MG, IFTM",
        link: {
          href: "https://twitter.com/d_gurgel",
          text: "@d_gurgel"
        },
        presentation: {
          title: "Service Worker API",
          description: "Aplicações web offline - Como usar Service Worker hoje quando a conexão o dispositivo não está disponível ou está muito baixa",
          time: "15/07/2016  - 14h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
      return this.site.url;
    }
  }
};