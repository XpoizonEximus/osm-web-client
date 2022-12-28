export const ROLES = {
  User: 2001,
  Voluntar: 1984,
  Admin: 5150,
};

export const PATH = {
  index: "/",
  proiecte: { index: "proiecte/" },
  evenimente: { index: "evenimente/" },
  shop: { index: "shop/" },
  resurse: {
    index: "resurse/",
    regulamente: { index: "regulamente/" },
    ghiduri: { index: "ghiduri/" },
    rapoarte: { index: "rapoarte/" },
    legaturiExterne: { index: "links/" },
    calculatorMedie: { index: "calculator-medie/" },
    amfiteatreSali: { index: "amfiteatre-sali/" },
    faq: { index: "faq/" },
  },
  echipa: {
    index: "echipa/",
    cd: "cd",
    reprezentanti: "reprezentanti",
    coordonatori: "coordonatori",
  },
  parteneri: { index: "parteneri-sponsori/" },
  contact: { index: "contact/" },
  politicaConfidentialitate: { index: "politica-confidentialitate/" },
};

export const LINKS = {
  old: "https://osmcluj.ro/",
  umf: "http://www.umfcluj.ro/",
  emsys: "https://infostud.umfcluj.ro/INFOSTUD/faces/Login.xhtml",
  cereri:
    "https://digital.umfcluj.ro/jobrouter/index.php?cmd=PublicStart&ps=78fce30258b09d55905bdaace01fe779&username=webuser&fbclid=IwAR3jx8vROfTJp7EdYSkT6iTQU4q_4Xh1J1p0MXEOerkYB1Va0M-4b-wX_xE",
  media: {
    facebook: "https://www.facebook.com/OSMCluj",
    instagram: "https://www.instagram.com/osm_cluj",
    youtube: "https://www.youtube.com/c/OSMClujNapoca",
  },
};

export const API = {
  version: "1.0",
  get index() {
    return `https://api.osmcluj.ro/v${this.version}/microservice_main/bin/bread/api`;
  },
  get contact() {
    const base = this.index;
    return {
      get index() {
        return `${base}/contact`;
      },
      get form() {
        return {
          index: `${this.index}/?q=email`,
          params: {
            nume: "sender_name_full",
            email: "sender_email_address",
            titlu: "email_subject",
            continut: "email_content",
          },
        };
      },
      get data() {
        return `${this.index}/?q=vpe`;
      },
    };
  },
  get evenimente() {
    return `${this.index}/events/?q=all`;
  },
  get faq() {
    const base = this.index;
    return {
      get index() {
        return `${base}/faqs`;
      },
      get all() {
        return `${this.index}/?q=all`;
      },
      get search() {
        return `${this.index}/?q=srch&srch=`;
      },
    };
  },
  get calculatorMedie() {
    const base = this.index;
    return {
      get index() {
        return `${base}/grades`;
      },
      get specializari() {
        return { index: `${this.index}/?q=0` };
      },
      get ani() {
        return {
          index: `${this.index}/?q=1`,
          params: {
            specializare: "id",
          },
        };
      },
      get materii() {
        return {
          index: `${this.index}/?q=2`,
          params: {
            an: "id",
          },
        };
      },
      get medie() {
        return {
          index: `${this.index}/?q=3`,
          params: {
            an: "id",
            note: "grades", //string cu nr_de_note caractere 1-9, 0 pt 10 sau _ pt lipsa, altfel eroare 418
          },
        };
      },
    };
  },
  get regulamente() {
    return `${this.index}/guidelines/?q=flag&flag=regulation`;
  },
  get ghiduri() {
    return `${this.index}/guidelines/?q=flag&flag=guideline`;
  },
  get rapoarte() {
    return `${this.index}/guidelines/?q=flag&flag=report`;
  },
  get amfiteatre() {
    const base = this.index;
    return {
      get index() {
        return `${base}/halls`;
      },
      get all() {
        return `${this.index}/?q=all`;
      },
      get search() {
        return `${this.index}/?q=srch&srch=`;
      },
      get one() {
        return `${this.index}/?q=one&id=`;
      },
    };
  },
  get echipa() {
    const base = this.index;
    return {
      get index() {
        return `${base}/members`;
      },
      get cd() {
        return `${this.index}/?q=branch&branch=chiefs`;
      },
      get reprezentanti() {
        return `${this.index}/?q=branch&branch=reprezs`;
      },
      get coordonatori() {
        return `${this.index}/?q=branch&branch=proj_coords`;
      },
    };
  },
  get proiecte() {
    const base = this.index;
    return {
      get index() {
        return `${base}/projects`;
      },
      get all() {
        return `${this.index}/?q=all`;
      },
      get search() {
        return `${this.index}/?q=srch&srch=`;
      },
      get one() {
        return `${this.index}/?q=one&id=`;
      },
      get random() {
        return `${this.index}/?q=six`;
      },
    };
  },
  get parteneri() {
    return `${this.index}/sponsors/?q=all`;
  },
  get links() {
    return `${this.index}/guidelines/?q=flag&flag=guideline`;
  },
};
