import React from 'react';
import group from './group_mera.jpg';
import './ToBeCustomer.css';

const ToBeCustomer = () => {
  return (
    <div>
      <div className="image-container-to-be-customer">
        <img src={group} alt="group" className="header-img" />
        <h3>Att vara kund</h3>
        <p>Tillsammans gör vi skillnad</p>
      </div>
      <div className="about-container-s">
        <p>Det är inte alltid så lätt att få assistansen att fungera bra. Det är många detaljer som är viktiga. Assistenterna är olika. Någon lägger ner sin själ i arbetet, någon vill att tiden ska gå så fort som möjligt, någon vill gärna bestämma allt, även över dig och ditt liv ibland. Andra är mycket känsliga och har ett stort mått av empati. Du behöver kanske någon att diskutera din egen roll med. Ofta uppstår i vardagssituationer sådant som man måste fundera över. Du behöver då ett så bra stöd som möjligt så du får kontroll över så många situationer och detaljer som möjligt. För att uppnå detta behöver du ha regelbunden kontakt med din assistansanordnare för att se till att allt fungerar - utifrån din unika situation och dina önskemål.</p>
      </div>
      <div className="about-container-s">
        <h3>Anhöriga som anställda</h3>
        <p>Vi har hittills haft många anhöriga som anställda. Detta ofta kombinerat med någon eller några utomstående anställda. Det finns många som helst av allt vill ha en anhörig som personlig assistent, och vår erfarenhet är att dessa gör ett fantastiskt arbete. Anhöriga kan även kombinera detta arbete med andra arbeten, om situationen tillåter det.</p>
      </div>
      <div className="about-container-s">
        <h3>Personligt stöd till dig som ingår i verksamheten</h3>
        <p>För alla som ingår i just vår verksamhet erbjuder vi personligt stöd och rådgivning. Vi vill ge våra kunder ett så stort stöd som vi bara kan. Det kan röra sig om allt från att fylla i diverse blanketter till överklagande upp till högsta instans. Vi kan också föra talan som ombud i olika frågor om du själv inte orkar eller kan driva ditt eget ärende. Vi har en mycket stor vana att driva dessa frågor. Som kund hos oss kan du även få hjälp med andra ansökningar såsom utökning av assistanstimmar, bilstöd, bostadsanpassning, hjälpmedel samt andra ansökningar som kan bli aktuella. I vår service ingår även kontinuerlig information om befintlig lagstiftning samt nya lagar och dess tillämpning.
            <br></br><br></br>Vårt mål är att alla brukare och assistenter som önskar, ska ha tillgång till ett nätverk för att utbyta erfarenheter och känna stöd från personer i liknande situation. Mera Assistans anordnar därför olika träffar, utbildningar och seminarier för våra brukare och anställda.</p>
      </div>
      <div className="about-container-s">
        <h3>Administration</h3>
        <p>Vi sköter all administration såsom schemaläggning, tidrapportering, lönehantering, budget, redovisning av använda timmar samt anmälan om ändrade förhållanden och dokumentation. Mera Assistans anlitar en auktoriserad redovisningsekonom hos Beviso ekonomibyrå AB (www.beviso.se) som hanterar löneutbetalning, fakturering, budgetering med mera.
            <br></br><br></br>För dig som brukare finns möjligheten att påverka hur stor del av din assistansersättning som ska fördelas på utbildning, arbetsmiljö, löner, med mera.</p>
      </div>
      <div className="about-container-s">
        <h3>Brukaren bestämmer vem som ska anställas</h3>
        <p>Det är brukaren som har det avgörande inflytandet över vem som ska anställas som assistent hos henne eller honom. Vi kan hjälpa till med rekryteringen och ordna ett personligt möte för att se om personkemin stämmer. Om du som brukare själv har någon som du vill anställa hjälper vi till med praktiska detaljer kring detta.</p>
      </div>
    </div>
  );
};

export default ToBeCustomer;
