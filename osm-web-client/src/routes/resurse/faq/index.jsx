import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

import banner from "../../../assets/photos/faq-banner.jpg";
import SearchBar from "../../../components/searchBar";
import Header from "../../../layouts/header";

import secretariatMaps3d from "../../../assets/photos/secretariat-maps3d.png";
import registraturaMaps3d from "../../../assets/photos/registratura-maps3d.png";

function FaqPage() {
  return (
    <div id="faq">
      <Header img={banner} top={100}>
        <h2 className="title">Întrebări frecvente</h2>
        <p>
          Folosește bara de mai jos pentru a căuta prin lista de întrebări și
          răspunsuri.
        </p>
        <br />
        <div className="search-container">
          <SearchBar placeholder="Caută întrebări și răspunsuri..." />
        </div>
        <br />
      </Header>
      <div className="main">
        <section id="birocratia">
          <div className="content">
            <h3 className="title">Birocrația UMF</h3>
            <div className="grid-container">
              <div className="question">Unde găsesc carta UMF și ce este?</div>
              <div className="answer">
                Carta UMF e documentul de legi al UMF-ului unde găsiți răspunsul
                la multe lucruri mai in-depth: burse, proceduri, reguli,
                penalizări etc. Carta updated este <Link href="/">aici</Link>.
              </div>
              <div className="question">
                Care este programul la secretariat și unde este?
              </div>
              <div className="answer">
                Luni-joi de la 11 la 15. Secretariatul e în clădirea nouă de pe
                Marinescu 34-38, parter. <br />
                <img src={secretariatMaps3d} alt="secretariatMaps3d" />
              </div>
              <div className="question">
                Care este programul la registratură și unde este?
              </div>
              <div className="answer">
                Luni-vineri de la 8 la 15. Registratura e la parter în clădirea
                cu decanatele, cea modernă din curtea UMF. <br />
                <img src={registraturaMaps3d} alt="registraturaMaps3d" />
              </div>
              <div className="question">
                Care este programul la biroul de taxe și casierie și unde sunt?
              </div>
              <div className="answer">
                Biroul de taxe are program luni-vineri de la 8 la 14:30 iar
                casieria asemenea dar este închisă în ultima zi lucrătoare a
                fiecărei luni. Cele două sunt față în față la parter în clădirea
                cu decanatele, cea
              </div>
              <div className="question">
                Care este programul la cabinetul medical și unde este?
              </div>
              <div className="answer">
                Cabinetul medical s-a mutat în căminul 7 Haşdeu, cabinetul de pe
                Babeş fiind în renovare. Programul este luni- vineri 8-18.
                Telefonul este 0374 834 954. Mailul este
                cabinetmedical@umfcluj.ro.
              </div>
              <div className="question">Ce fac dacă fac COVID?</div>
              <div className="answer">
                Dacă faci COVID, trebuie să stai în izolare 5 zile dacă ești
                vaccinat sau 7 dacă ești nevaccinat. Ia legătura cu cabinetul -
                unde va trebui să duci o dovadă, deci fii sigur că ai un test
                oficial, nu doar unul rapid făcut singur - și trimite-le dovada
                pe mail. Va trebui să mergi la ei după adeverință când ieși din
                izolare. Pentru motivarea absențelor, vezi la secțiunea cu
                absențe. <br />
                De asemenea, dacă stai la cămin, ia legătura cu administratorul
                căminului și vezi ce spune: dacă să rămâi în camera ta, în altă
                cameră din cămin, la alt cămin sau la hotelul UMF-ului.
              </div>
              <div className="question">Ce fac dacă sunt contact direct?</div>
              <div className="answer">
                Va trebui să stai în carantină 5 zile dacă ești vaccinat, 10
                zile nevaccinat. Vezi punctul de mai sus dacă stai la cămin.
              </div>
              <div className="question">
                Unde găsesc cererea X și unde o depun?
              </div>
              <div className="answer">
                La{" "}
                <a href="http://www.umfcluj.ro/informatii-ro/formulare-ro/category/5-formulare-studenti-masteranzi-doctoranzi-rezidenti">
                  formulare tipizate
                </a>{" "}
                pe site-ul UMF sunt toate cererile, inclusiv una generală de
                completat cu ce vreți. Ele se adresează în scris doamnei decan
                și se depun la secretariat, inclusiv online, trimise doamnei
                secretare pe mail sau pe Teams, chiar și cu semnătură
                electronică (pe PDF, nu neapărat oficială cumpărată). Asta
                include adeverința de student.
              </div>
              <div className="question">
                Cât costă X? Care sunt taxele la Y?
              </div>
              <div className="answer">
                <a href="http://www.umfcluj.ro/informatii-ro/avizier-ro/item/7090-taxe-de-%C8%99colarizare-an-universitar-2021-2022">
                  Aici
                </a>{" "}
                e documentul cu toate costurile și taxele.
              </div>
              <div className="question">Cum se numea aplicația UMF-ului?</div>
              <div className="answer">InfoUtil UMF Cluj.</div>
            </div>
          </div>
        </section>
        <hr />
        <section id="absente-mariri-restante-recuperari">
          <div className="content">
            <h3 className="title">Absențe, măriri, restanțe, recuperări</h3>
            <div className="grid-container">
              <div className="question">Câte absențe am voie?</div>
              <div className="answer">
                În pură teorie, avem voie 30% absențe la curs (deci la un curs
                de 2 ore/săpt, timp de 14 săpt, tot semestrul adică, avem voie 4
                absențe). La LP-uri nu avem voie nicio absență nerecuperată.
              </div>
              <div className="question">Cum pot recupera absențele?</div>
              <div className="answer">
                La curs, nu prea există recuperare de absențe, cum nu prea
                există nici listă de prezență, deci nici prea multe probleme.
                Problema este la LP-uri, unde recuperarea se face în teorie doar
                în sesiunile de recuperare, dar se poate face și cu altă grupă,
                în aceeași săptămână, cu acordul cadrului didactic. Asta este un
                fel de mica înțelegere, deci dacă un cadru vă refuză acest
                lucru, nu aveți ce face deoarece nu este dreptul vostru. De
                asemenea, nu se pot recupera un număr infinit de absențe - în
                teorie, absența de la mai mult de 20% din LP-uri, fie ele
                motivate sau nu, recuperate sau nu, implică <i>repetarea</i>{" "}
                materiei. Următorul paragraf este din carta UMF:
                <p>
                  <i>
                    Motivarea absenţelor înregistrate la discipline se face de
                    către conducerea facultăţii, pe baza actelor justificative
                    şi a cererii individuale înregistrată la secretariatul
                    facultăţii.{" "}
                    <b>
                      Aceste acte trebuie depuse la decanat în termen de cel
                      mult 10 (zece) zile lucrătoare de la reluarea activităţii
                      didactice de către student.
                    </b>
                    Motivările nedepuse la decanat în timpul sus menţionat nu
                    sunt luate în considerare, iar absenţele aferente sunt
                    considerate nemotivate.{" "}
                    <b>
                      Pentru motivarea absenţelor medicale care însumează mai
                      mult de 14 zile consecutive este necesară prezentarea unui
                      bilet de ieşire din spital sau a unei adeverinţe vizată de
                      un şef de secție spitalicească. Motivările medicale
                      eliberate de alte instituţii decât Cabinetul medical al
                      U.M.F. sunt vizate de către Cabinetul medical U.M.F
                      înainte de depunerea la decanat.
                    </b>{" "}
                    Pe baza actelor justificative, decanatul va elibera o
                    adeverință ce va servi la motivarea absențelor la
                    discipline. Atenție!{" "}
                    <b>
                      Un student are voie să recupereze la o disciplină până la
                      20% din activităţile didactice practice. Absenţele într-un
                      cuantum mai mare de 20% din activităţile practice impun
                      reluarea în întregime a studiilor la materia în cauză.
                    </b>
                  </i>
                </p>{" "}
                Deci pentru motivarea absenței, trebuie dusă motivarea medicală
                de la doctorul vostru mai întâi la cabinetul UMF, iar cu foaia
                primită de la ei, la <b>registratură</b> alături de o cerere de
                motivare a absențelor, care se găsește pe site (vedeți secțiunea
                I). Când va fi gata motivarea, vă va da mesaj secretara să
                veniți după ea.
                <br />
                Atenție - absențele motivate nu se plătesc la recuperare, pe
                când cele nemotivate, da.
              </div>
              <div className="question">Cum se plătește absența?</div>
              <div className="answer">
                Dacă ai o absență nemotivată la un LP și nu ai apucat sau nu ți
                s-a permis să recuperezi în aceeași săptămână, va trebui să vezi
                când organizează catedra sesiunea de recuperare. Va trebui să
                mergi la ei să-ți dea o dispoziție de plată, care trebuie dusă
                la casierie și achitată. Vezi casierie și taxe la secțiunea I.
              </div>
              <div className="question">Câte restanțe pot avea?</div>
              <div className="answer">
                În teorie, nelimitate, dar dacă nu le iei nici în R2, trebuie
                luat în calcul faptul că promovarea anului se poate face doar
                dacă acumulezi minim 50 din cele 60 de credite. Deci, de
                exemplu, dacă nu treci nicicum biochimia și anatomia acest an,
                intri în an complementar.
              </div>
              <div className="question">
                Câte măriri pot da și cum funcționează?
              </div>
              <div className="answer">
                Se pot da maxim 2 măriri pe an, deci maxim 12 pe întreaga
                facultate. Nota primită la mărire rămâne finală, indiferent dacă
                e mai mică sau mai mare. Măririle se pot da și în R1, și în R2,
                iar pentru cost, vezi taxele din secțiunea I.
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="materii-examene-note-buget-bursă">
          <div className="content">
            <h3 className="title">Materii, examene, note, buget, bursă</h3>
            <div className="grid-container">
              <div className="question">
                Unde găsesc bibliografia la materia X?
              </div>
              <div className="answer">
                Vezi{" "}
                <a href="https://docs.google.com/document/d/1DDYejbfeXTRW3YjbkDezYXyXajzXiHejNGdw62f-KXk/edit?usp=sharing">
                  documentul
                </a>{" "}
                unde vă ținem la curent cu ce știm despre fiecare materie în
                parte.
              </div>
              <div className="question">
                Unde găsesc cartea, cursul, LP-ul X?
              </div>
              <div className="answer">
                Pe drive-urile fiecărui an/serie. Contactează reprezentantul tău
                pentru a-ți permite accesul.
              </div>
              <div className="question">
                Câte credite, cursuri, LP-uri are materia X?
              </div>
              <div className="answer">
                Este un tabel pus în documentul cu linkuri utile, dar găsiți
                pentru toți anii și{" "}
                <a href="http://www.umfcluj.ro/images/fisiere/med_docs/2021/formatiuni/2/Medicina%202021-2022%20final.pdf">
                  aici
                </a>
                .
              </div>
              <div className="question">Când, unde, cum dăm examenul X?</div>
              <div className="answer">
                Vezi{" "}
                <a href="https://docs.google.com/document/d/1DDYejbfeXTRW3YjbkDezYXyXajzXiHejNGdw62f-KXk/edit?usp=sharing">
                  documentul
                </a>{" "}
                unde vă ținem la curent cu ce știm despre fiecare materie în
                parte.
              </div>
              <div className="question">
                Se face lista mediilor? Ce note s-au luat? Cum stau?
              </div>
              <div className="answer">
                Se va face la final de semestru. Contactează reprezentantul tău
                pentru a-ți permite accesul.
              </div>
              <div className="question">Cum îmi calculez media mediilor?</div>
              <div className="answer">
                <a href="https://osmcluj.ro/portfolio-items/calculator-medii-mg2/">
                  Aici
                </a>{" "}
                este calculatorul de medii. Calculatorul calculează media ținând
                cont doar de materiile introduse.
              </div>
              <div className="question">
                Ce medie de bursă/buget/cămin a fost în anul X?
              </div>
              <div className="answer">
                În linkul de mai sus sunt niște medii de acum 2-3 ani. Anul
                trecut, în 2021, media de bursă pentru anul 2 a fost 9.35.
              </div>
              <div className="question">Câte locuri la buget sunt?</div>
              <div className="answer">
                La admitere sunt 320 de locuri la buget, 60 la taxă.
              </div>
              <div className="question">
                Dacă nu sunt integralist, ajung la taxă?
              </div>
              <div className="answer">
                Din păcate, da. Puteți avea și media 10, dar dacă o materie nu e
                trecută, sunteți trecuți instant la coada clasamentului, după
                integraliști. Deci teoretic puteți prinde buget dacă aveți una
                din cele mai mari medii dintre ne-integraliști, și sunt peste 60
                de ne-integraliști, dar asta nu prea este practic posibil.
              </div>
              <div className="question">
                Câte burse de merit sunt și cât valorează?
              </div>
              <div className="answer">
                Anual sunt între 50-60 de burse în mod normal, dar noi am avut
                64 anul trecut, poate fiindcă suntem așa mulți. Media 10 ia
                bursă A de 750 lei, mediile 9.50-10 iau bursă B 700 lei, medile
                9-9.50 iau bursă C 650 de lei, mediile 8.50-9 iau bursă D 600
                lei, iar mediile sub 8.5 iau bursă E 590 de lei. Desigur, asta
                dacă sunt printre cei 50-65 de oameni cu bursă.
              </div>
              <div className="question">
                Cum aplic pentru bursa de performanță sau bursa socială?
              </div>
              <div className="answer">
                Trebuie să stați cu ochii pe anunțurile UMF la început de an
                universitar. Aplicațiile în aceste 2 cazuri se pot depune doar
                în primele 20 de zile de facultate. Bursa socială e 580 de lei
                iar cea de performanță de 900 de lei. Pentru mai multe detalii,
                vedeți carta (secțiunea I).
              </div>
              <div className="question">
                Pot lua bursă de merit dacă nu sunt integralist?
              </div>
              <div className="answer">
                Din păcate, nu, și trebuie nici să nu ai credite restante de
                anul trecut, chiar dacă le promovezi.
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="camine-biblioteca-sala">
          <div className="content">
            <h3 className="title">Cămine, bibliotecă, sală</h3>
            <div className="grid-container">
              <div className="question">
                Stau la cămin și am o problemă, ce fac?
              </div>
              <div className="answer">
                Ia legătura cu șeful de palier, șeful de cămin, sau
                doamna/domnul administrator de cămin.
              </div>
              <div className="question">
                E mijlocul semestrului, nu stau la cămin, dar aș dori să stau
                acum din diverse motive, ce fac?
              </div>
              <div className="answer">
                Iei legătura cu vicepreședintele pe interne al OSM, Ștefania
                Verdeș.
              </div>
              <div className="question">
                Pot fi cazat la cămin dacă nu sunt integralist?
              </div>
              <div className="answer">
                Din păcate, trebuie să fii integralist. Singura excepție sunt
                cei orfani de ambii părinți și cei proveniți din casele de copii
                sau centrele de plasament familial.
              </div>
              <div className="question">Cum îmi fac permis de bibliotecă?</div>
              <div className="answer">
                Toate detaliile,{" "}
                <a href="http://www.umfcluj.ro/component/k2/item/772-accesul-la-biblioteca">
                  aici
                </a>
                . Plus diverse,{" "}
                <a href="http://www.umfcluj.ro/educatie-ro/reurseedu-ro/biblioteca-ro">
                  informații
                </a>
                .
              </div>
              <div className="question">Unde e sala de sport OSM?</div>
              <div className="answer">
                În campusul Hașdeu. Urmăriți pagina de FB a OSM pentru updateuri
                despre sală, deoarece nu e constant deschisă.
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="osm-cercuri-proiecte-voluntariate">
          <div className="content">
            <h3 className="title">OSM, cercuri, proiecte, voluntariate</h3>
            <div className="grid-container">
              <div className="question">Unde găsesc informații despre OSM?</div>
              <div className="answer">
                Pe site-ul nostru pe care tocmai te afli,{" "}
                <Link to="/">osmcluj.ro</Link>.
              </div>
              <div className="question">
                Cine este președintele OSM și ce face?
              </div>
              <div className="answer">
                Președintele OSM este în mod curent Andrei Ilie și pe lângă
                multe altele, el ne reprezintă pe noi toți, de la anul I la VI,
                în consiliul de administrație (un fel de guvern) al UMF-ului.
              </div>
              <div className="question">
                Ce este Consiliul Facultății? Dar Senatul Universității?
              </div>
              <div className="answer">
                Cele două sunt forumurile de conducere ale Facultății, respectiv
                Universității (un fel de parlamente). Întâlnirile lor sunt
                lunare și la ele participă ambii șefi de an (sunt 2 șefi de an
                din anul III încolo) în Consiliu, respectiv doar șeful de an
                care câștigă mai multe voturi în Senat. Ei au drept de vot la
                diversele teme de pe ordinea de zi, în general complet
                birocratice.
              </div>
              <div className="question">
                Unde pot găsi o listă cu cercurile studențești?
              </div>
              <div className="answer">
                Chiar{" "}
                <a href="http://www.medicina.umfcluj.ro/cercetare-med-ro/cerc-stud-med-ro">
                  aici
                </a>{" "}
                Dacă vreți să vă înscrieți, va trebui să-l căutați pe FB ca să
                luați legătura cu coordonatorul.
              </div>
              <div className="question">
                Unde pot găsi o listă cu proiectele și voluntariatele OSM?
              </div>
              <div className="answer">
                Pe siteul nostru <Link to="/">aici</Link>, dar mai degrabă la
                început de an, când are loc târgul de proiecte și se fac
                recrutări. Nu uitați să fiți atenți pe grupuri în caz că se mai
                distribuie diverse proiecte sau voluntariate.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FaqPage;
