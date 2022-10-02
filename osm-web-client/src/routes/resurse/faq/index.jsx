import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

import banner from "../../../assets/photos/faq-banner.jpg";
import SearchBar from "../../../components/searchBar";
import Header from "../../../layouts/header";

import { PATH } from "../../../const/const";

function FaqPage() {
  window.scrollTo(0, 0);
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
                Carta UMFCarta UMF reprezintă „Constituția” UMF și conține
                principalele reguli și modul de organizare și funcționare a
                Universității. Carta în versiune actualizată este{" "}
                <a href="http://www.umfcluj.ro/images/fisiere/regulamente/2021/CARTA%20-%20flipbook.pdf ">
                  aici
                </a>
                .
              </div>
              <div className="question">
                Care este programul la secretariat și unde este?
              </div>
              <div className="answer">
                Luni-joi de la 11 la 15. Puteți găsi adresa secretariatului
                anului vostru precum și datele de contact ale secretarului de an{" "}
                <a href="http://www.umfcluj.ro/facmed-ro/decanat-mg-ro/secretariat-mg-ro">
                  aici
                </a>
              </div>
              <div className="question">
                Care este programul la registratură și unde este?
              </div>
              <div className="answer">
                Luni-vineri de la 8 la 15. Registratura e la Decanat, pe Pasteur
                4. Vedeți pagina{" "}
                <Link
                  to={"/".concat(
                    PATH.resurse.amfiteatreSali,
                    PATH.resurse.amfiteatreSali.registratura
                  )}
                >
                  aceasta
                </Link>{" "}
                pentru instrucțiuni detaliate. <br />
              </div>
              <div className="question">
                Care este programul la biroul de taxe și casierie și unde sunt?
              </div>
              <div className="answer">
                Biroul de taxe are program luni-vineri de la 8 la 14:30 iar
                casieria asemenea dar aceasta din urmă este închisă în ultima zi
                lucrătoare a fiecărei luni. Cele două sunt față în față la
                parter la Decanat. Pentru instrucțiuni detaliate pentru a ajunge
                acolo, click{" "}
                <Link
                  to={"/".concat(
                    PATH.resurse.amfiteatreSali.index,
                    PATH.resurse.amfiteatreSali.registratura.index
                  )}
                >
                  aici
                </Link>
                .
              </div>
              <div className="question">
                Care este programul la cabinetul medical și unde este?
              </div>
              <div className="answer">
                Cabinetul medical s-a mutat în căminul 7, cabinetul de pe Babeş
                fiind în renovare. Programul este luni- vineri 8-18. Telefonul
                este 0374 834 954. Mailul este cabinetmedical@umfcluj.ro.
              </div>
              <div className="question">
                Unde găsesc cererea X și unde o depun?
              </div>
              <div className="answer">
                La formulare tipizate pe{" "}
                <a href="http://www.umfcluj.ro/informatii-ro/formulare-ro/category/5-formulare-studenti-masteranzi-doctoranzi-rezidenti">
                  site
                </a>{" "}
                sunt toate cererile, inclusiv una generală de completat cu ce
                orice doriți. Ele se adresează în scris doamnei decan și se
                depun la secretariat. Cel puțin unele secretare (vorbiți cu
                colegii să vedeți dacă se aplică și anului vostru) acceptă
                cererile, inclusiv online, trimise pe mail sau pe Teams, chiar
                și cu semnătură electronică (pe PDF, nu neapărat oficială
                cumpărată). Asta include adeverința de student.
              </div>
              <div className="question">
                Cât costă X? Care sunt taxele la Y? Cât costă un cămin?
              </div>
              <div className="answer">
                Taxele pentru anul universitar 2022-2023, taxele de cămin și
                alte documente utile se pot găsi{" "}
                <a href="http://www.umfcluj.ro/informatii-ro/uzcurent-ro">
                  aici
                </a>{" "}
                e documentul cu toate costurile și taxele. Pentru rapiditate
                menționăm că pentru recuperările de lucrări practice ori stagii,
                taxa e 30 lei/ora, iar cererea de reexaminare (mărire/restanță
                R2) e 100 de lei.
              </div>
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
                La cursuri prezența trebuie să fie de minim 70% (deci la un curs
                de 2 ore/săpt, timp de 14 săptămâni – un semestru aveți voie 4
                absențe). La lucrări practice ori stagii nu avem voie nicio
                absență nerecuperată. De-asemenea, nu se pot recupera mai mult
                de 20% din lucrări/stagii; absentarea de la mai mult de atât,
                chit că se face cu recuperare, implică reluarea materiei.
              </div>
              <div className="question">Cum pot recupera absențele?</div>
              <div className="answer">
                Absențele la cursuri nu se pot recupera, conform regulamentului.
                vostruLucrările ori stagiile se pot recupera la final de
                semestru în sesiuni speciale de recuperare. Există opțiunea de a
                recupera o lucrare cu altă grupă, în aceeași săptămână, dar doar
                dacă catedra este de acord (nu este obligatoriu să fie de
                acord). De asemenea, nu se pot recupera un număr infinit de
                absențe - absența de la mai mult de 20% din LP-uri/stagii, fie
                ele motivate sau nu, recuperate sau nu, implică repetarea
                materiei. Atașăm un paragraf din regulament:
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
                I). sau deja printate pe masa din fața registraturii, în hol.
                Odată cu finalizarea motivării aceasta va trebui ridicată de la
                secretarul de an.
              </div>
              <div className="question">
                Cum se plătește o absență? Ce absențe nu se plătesc?
              </div>
              <div className="answer">
                Dacă aveți o absență nemotivată la o lucrare practică ori stagiu
                și nu ați putut recupera în aceeași săptămână (sau nu permite
                disciplina acest lucru), va trebui să vă interesați în legătură
                cu sesiunea de recuperare care va fi cel mai probabil la final
                de semestru. Va trebui să mergeți la disciplină (cel mai sigur
                la secretariat)i la ei să-ți dea o di pentru a primi o
                dispoziție de plată, care trebuie dusă la casierie și achitată.
                Vezi Vedeți casierie și taxe la secțiunea I. <br />
                <br />
                Sunt scutite de plată absențele cauzate de: politraumatisme,
                fracturi, boli infecto-contagioase, internări în clinicile
                universitare din Cluj-Napoca, situațiile familiale deosebite
                (analizate de decan pe baza unei audiențe solicitate de
                student).
              </div>
              <div className="question">Câte restanțe pot avea?</div>
              <div className="answer">
                În teorie, nelimitate, dar dacă nu le luați nici în R2, trebuie
                luat în calcul faptul că promovarea anului se poate face doar
                dacă acumulați minim 50 din cele 60 de credite credite în anii
                MG I și II și toate creditele în toți ceilalți ani de la MG
                (deci nu trebuie să fiți integraliști pentru a trece anul).
                Deci, de exemplu, dacă în anul 1 nu treceți o materie de 6
                credite și alta de 5 credite, veți intra în an complementar.
              </div>
              <div className="question">Ce este anul complementar?</div>
              <div className="answer">
                Este un an de repetenție ce prelungește durata totală a
                studiilor, în care un student poate fi înmatriculat de maximum 3
                ori (dacă se depășește această limită, se aplică
                exmatricularea). În acest an, studentul este obligat să facă
                doar materiile nepromovate, din nou. Mai multe detalii în{" "}
                <a href="http://www.umfcluj.ro/images/fisiere/documente_publice/2022/regulamente/regulamente/Regulamentul_de_activitate_didactica_in_ciclul_de_studii_de_licenta.pdf">
                  regulament, capitolul XI
                </a>
                .
              </div>
              <div className="question">
                Câte măriri pot da și cum funcționează?
              </div>
              <div className="answer">
                Se pot da maxim 2 măriri pe an, deci maxim 12 pe întreaga
                facultate. Nota primită la mărire rămâne finală, indiferent dacă
                e mai mică sau mai mare. Măririle se pot da și în R1, și în R2,
                iar pentru cost, vedeți taxele din secțiunea I. Studentul
                trebuie să fie integralist pe sesiunea dinaintea celei în care
                se dorește reexaminarea (mărirea); astfel dacă doriți să dați o
                mărire în R1, trebuie să fiți integraliști. Dacă aveți o
                restanță, trebuie să o luați în R1 ca doar apoi să puteți da
                mărirea în R2. Dacă nu luați o restanță în R1 și trebuie să o
                dați în R2, implicit nu veți putea da nicio mărire în acel an
                universitar. <br />
                <br />
                Pentru a da o mărire, va trebui să achitați taxa de reexaminare
                (mai întâi mergeți la birou taxe pentru dispoziția de plată,
                apoi vis-a-vis la casierie ca să plătiți și să aveți chitanța).
                Cu chitanța originală veți merge la examen deodată cu cei care
                dau restanță. O copie a chitanței se depune la secretariat
                alături de o cerere de reexaminare semnată de catedră (cu
                <i>
                  „să-mi aprobați susținerea examenului în vederea îmbunătățirii
                  notei”
                </i>
                ), înainte de examen.
              </div>
              <div className="question">Cum dau o restanță în R2?</div>
              <div className="answer">
                Până acum era de-ajuns să plătiți (vedeți mai sus procedura
                pentru mărire, care e asemănătoare aici, fiind tot o
                reexaminare) și să mergeți cu chitanța la examen, dar acum se
                cere și o cerere de susținere examen semnată de catedră și
                depusă la secretariat alături de o copie după chitanță.
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
                Unde găsesc planul de învățământ pe anul meu universitar?
              </div>
              <div className="answer">
                Pe{" "}
                <a href="https://docs.google.com/document/d/1DDYejbfeXTRW3YjbkDezYXyXajzXiHejNGdw62f-KXk/edit?usp=sharing">
                  această
                </a>{" "}
                pagină. Găsiți materiile, numărul de ore de curs și LP/stagiu pe
                fiecare semestru și numărul de credite pentru fiecare.
              </div>
              <div className="question">Cum îmi calculez media mediilor?</div>
              <div className="answer">
                Media mediilor e cea care se ia în considerare la toate
                clasamentele. Aveți{" "}
                <Link to={PATH.resurse.calculatorMedie.index}>aici</Link>{" "}
                calculatoarele pentru medie, individualizate pentru fiecare an.
              </div>
              <div className="question">
                Ce medie de bursă/buget/cămin a fost în anul X?
              </div>
              <div className="answer">
                Puteți vedea acest lucru tot în calculatorul acesta atunci când
                accesați calculatorul specializării și anului vostru.
              </div>
              <div className="question">Câte locuri la buget sunt?</div>
              <div className="answer">
                Fiecare an are un alt număr de locuri la buget și taxă.
                Întrebați secretarul de an sau un reprezentant.
              </div>
              <div className="question">
                Dacă nu sunt integralist, ajung la taxă?
              </div>
              <div className="answer">
                Din păcate, da. Puteți avea și media 10, dar dacă o materie nu e
                trecută, sunteți trecuți instant la coada clasamentului, după
                integraliști. Deci teoretic puteți prinde locul la buget dacă
                aveți una din cele mai mari medii dintre ne-integraliști, și
                sunt mai mulți ne-integraliști decât locuri la taxă, dar în
                practică acest lucru nu are șanse mari să se întâmple.
              </div>
              <div className="question">
                Câte burse de merit sunt și cât valorează?
              </div>
              <div className="answer">
                Depinde de la an la an și nu se poate ști în avans câte vor fi
                deoarece asta depinde de bugetul alocat și de numărul de burse
                sociale acordate. Media 10 ia bursă A de 750 lei, mediile
                9,50-10 iau bursă B 700 lei, medile 9-9,50 iau bursă C 650 de
                lei, mediile 8,50-9 iau bursă D 600 lei, iar mediile sub 8.5 iau
                bursă E 590 de lei. Desigur, asta dacă sunt printre acei oameni
                cu bursă; dacă cea mai mare medie din an este, de exemplu, 8,40,
                toate bursele vor fi de tip E.
              </div>
              <div className="question">
                Cum aplic pentru bursa de performanță sau bursa socială?
              </div>
              <div className="answer">
                Trebuie să stați cu ochii pe anunțurile UMF la început de an
                universitar. Aplicațiile în aceste 2 cazuri se pot depune doar
                în primele 20 de zile de facultate. Bursa socială e 580 de lei
                iar cea de performanță de 900 de lei. Pentru mai multe detalii,
                vedeți{" "}
                <a href="http://www.umfcluj.ro/images/fisiere/documente_publice/2022/regulamente/regulamente/REGULAMENT_PRIVIND_ACORDAREA_BURSELOR_STUDEN%C8%9AE%C8%98TI_%C8%98I_METODOLOGIA_ACORD%C4%82RII.pdf">
                  regulamentul de burse
                </a>
                .
              </div>
              <div className="question">
                Pot lua bursă de merit dacă nu sunt integralist?
              </div>
              <div className="answer">
                Din păcate, nu, și trebuie nici să nu aveți credite restante de
                anul trecut, chiar dacă le promovați.
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
                Nu stau la cămin pentru că nu am făcut precazarea, dar aș dori
                să stau acum din diverse motive, ce fac? Sau doresc să renunț la
                locul meu deși am completat precazarea, ce fac?
              </div>
              <div className="answer">
                Trebuie să mergeți la biroul Serviciului Social Administrativ,
                în clădirea rectoratului de pe Babeș 8, la parter, camera 12 și
                să vorbiți acolo cu dl șef de serviciu Lazea.
              </div>
              <div className="question">
                Pot fi cazat la cămin dacă nu sunt integralist?
              </div>
              <div className="answer">
                Din păcate, trebuie să fiți integraliști. Singura excepție sunt
                cei orfani de ambii părinți și cei proveniți din casele de copii
                sau centrele de plasament familial.
              </div>
              <div className="question">Cum îmi fac permis de bibliotecă?</div>
              <div className="answer">
                Toate detaliile,{" "}
                <a href="http://www.umfcluj.ro/component/k2/item/772-accesul-la-biblioteca">
                  aici
                </a>
                . Plus diverse alte inforații{" "}
                <a href="http://www.umfcluj.ro/educatie-ro/reurseedu-ro/biblioteca-ro">
                  aici
                </a>
                .
              </div>
              <div className="question">Unde e sala de sport OSM?</div>
              <div className="answer">
                În campusul Hașdeu, în căminul H7 lângă intrare. Urmăriți pagina
                de FB a OSM pentru updateuri despre sală.
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
                Pe siteul nostru, pe care vă aflați acum.
              </div>
              <div className="question">
                Cine este președintele OSM și ce face? Dar ceilalți membrii?
              </div>
              <div className="answer">
                Președintele OSM este în mod curent Vlad Lazar și aparte de a
                conduce și reprezenta legal Organizația, el reprezintă toți
                studenții Facultății de Medicină în consiliul de administrație
                al UMF-ului. Pentru o listă completă a conducerii OSM –
                Consiliul Director – și a reprezentanților de an și a
                coordonatorilor de proiecte, accesați{" "}
                <Link to={PATH.echipa}>această</Link> pagină.
              </div>
              <div className="question">
                Ce este Consiliul Facultății? Dar Senatul Universității?
              </div>
              <div className="answer">
                Cele două sunt forumurile de conducere ale Facultății, respectiv
                Universității (un fel de parlamente). Întâlnirile lor sunt
                lunare și la ele participă ambii reprezentanți de an (sau unicul
                reprezentant de an pentru anul II MG) în Consiliu, respectiv
                doar reprezentantul de an care câștigă mai multe voturi în
                Senat. Ei au drept de vot la diversele teme de pe ordinea de zi,
                în general complet birocratice.
              </div>
              <div className="question">
                Unde pot găsi o listă cu cercurile studențești?
              </div>
              <div className="answer">
                Chiar{" "}
                <a href="http://www.medicina.umfcluj.ro/cercetare-med-ro/cerc-stud-med-ro">
                  aici
                </a>{" "}
                Dacă vreți să vă înscrieți, va trebui în general să-ă căutați
                cercul pe FB ca să luați legătura cu coordonatorul.
              </div>
            </div>
          </div>
        </section>
        <section id="erasmus-congrese-conferinte">
          <div className="content">
            <h3 className="title">ERASMUS, congrese, conferințe</h3>
            <div className="grid-container">
              <div className="question">
                Cum funcționează ERASMUS? Dar cel de vară?
              </div>
              <div className="answer">
                Aveți <Link to={PATH.resurse.ghiduri.index}>aici</Link> un ghid
                complet despre ambele.
              </div>
              <div className="question">
                Pot deconta cheltuielile de X ca să merg la
                conferința/congresul/stagiul Y?
              </div>
              <div className="answer">
                Pentru decontul deplasărilor externe (din fonduri UMF special
                alocate) aveți aici regulamentul cu instrucțiuni. Pentru
                decontul deplasărilor interne (din fonduri OSM), trebuie să
                înaintați o cerere (scrieți voi detaliile și datele voastre)
                Președintelui OSM pe admin@osmcluj.ro.
              </div>
            </div>
          </div>
        </section>
        <section id="diverse">
          <div className="content">
            <h3 className="title">Diverse</h3>
            <div className="grid-container">
              <div className="question">Cum funcționează practica de vară?</div>
              <div className="answer">
                Aveți <Link to={PATH.resurse.ghiduri.index}>aici</Link>{" "}
                ghidurile de practică de vară pentru anul vostru.
              </div>
              <div className="question">
                Când, cum, cu cine trebuie să îmi scriu licența?
              </div>
              <div className="answer">
                Aveți <Link to={PATH.resurse.ghiduri.index}>aici</Link> ghidul
                pentru procesul administrativ și birocratic de scriere și
                depunere a licenței.
              </div>
              <div className="question">
                Se pune sportul/pregătirea tezei de licență la medie?
              </div>
              <div className="answer">
                Da, se pune cu nota pe care o obțineți. Creditele acestor două
                materii sunt, însă, credite suplimentare. Credite suplimentare
                oferă și pedagogia (cunoscut ca modul pedagogic, chiar dacă nu e
                un modul pedagogic atestat, oficial), dar nu are notă cu care să
                influențeze media.
              </div>
              <div className="question">Cum se numea aplicația UMF-ului?</div>
              <div className="answer">
                InfoUtil UMF Cluj. Folosiți-o, este chiar folositoare!
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FaqPage;
