import React from 'react';
import hand from './hand_mera_darker.jpg';
import checklist from './checklist_mera.jpg';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="image-container">
        <img src={hand} alt="hand" className="header-img" />
        <h3>Om oss</h3>
        <p>Vårt huvudintresse är att verka för ett tillgängligt samhälle</p>
      </div>
      <div className="about-container">
        <p>Vårt huvudintresse är att verka för ett tillgängligt samhälle för alla och vi arbetar för att göra det lättare för personer med funktionsnedsättningar att leva det liv som de har rätt till. Vår värdegrund bygger på respekt för alla människors lika värde.  Hos oss är alla välkomna och vi värdesätter mångfald. Våra brukare är mångkulturella och vår personal har kunskaper i flera språk. Vi är en etablerad arbetsgivare med kontor i Malmö och våra kunder finns främst i Skåne, men även på orter runtom i Sverige.</p>
      </div>
      <div className="about-container">
        <h4>Varför ska jag välja Mera Assistans?</h4>
        <p>Hos Mera Assistans innebär personlig assistans ökat självbestämmande och möjlighet till delaktighet i alla aspekter av samhället. Det är du och ditt liv som står i centrum och dina önskemål gällande utformandet av assistansen är centralt för vår verksamhet. <br></br><br></br>
Mera Assistans erbjuder dig juridisk rådgivning samt all administration, utbildning och fortbildning för dig som brukare och för dina assistenter samt unika försäkringar. Som arbetsgivare tycker vi att det är viktigt med goda arbetsvillkor för de personliga assistenterna. Vi har därför tecknat kollektivavtal med Kommunal genom Arbetsgivarorganisationen KFO. Vi erbjuder dina assistenter en bra lön då vi tror att det främjar långsiktighet i utformandet av den personliga assistansen. En annan aspekt gällande goda arbetsvillkor handlar om arbetsmiljö. Vi bedriver ett aktivt arbete för att utveckla arbetsmetoder och team kring dessa frågor vilket vi tror gynnar både assistenter och brukare. <br></br><br></br>
Tycker du att ett bra bemötande, kompetens, helhetsansvar och kvalitet är viktiga aspekter? Då är vi den assistansanordnare du söker.</p>
      </div>
      <div className="about-container">
        <h4>Vi erbjuder våra kunder</h4>
        <p>• Personlig service med förståelse för den enskildes livssituation<br></br><br></br>
            • Stöd vid kontakt med myndigheter<br></br><br></br>
            • Kontinuerlig kompetensutveckling<br></br><br></br>
            • Regelbunden information om dina rättigheter och naturligtvis all form av administration<br></br><br></br>
            • En personlig kontakt som gör sitt bästa för att du ska få den livskvalitet som du har rätt till</p>
        <img src={checklist} alt="checklist" className="header-img" />
      </div>
    </div>
  );
};

export default About;
