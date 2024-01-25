import React from 'react';
import cap from './keps_mera.jpg';
import hjalp from './hjälp_mera.webp';
import './BecomeCustomer.css';

const BecomeCustomer = () => {
  return (
    <div>
      <div className="image-container">
        <img src={cap} alt="cap" className="header-img" />
        <h3>Att bli kund</h3>
        <p>Efter den inledande kontakten så bokar vi ett personligt möte</p>
      </div>
      <div className="about-container">
        <p>Om du är intresserad av att bli kund hos oss så kontakta oss på telefon 040- 23 73 09 eller via mail, info@meraassistans.se. Du kan ta kontakt med oss om du har ett assistansbeslut, men även om du behöver hjälp med att ansöka om assistans.</p>
      </div>
      <div className="about-container">
        <h4>Ett första möte</h4>
        <p>Efter den inledande kontakten så bokar vi ett personligt möte, antingen hemma hos dig, eller på vårt kontor. Om du föredrar ett telefonsamtal går det också bra. Detta inledande möte sker helt utan förväntningar på dig som potentiell kund hos oss och du förbinder dig inte till något. Du får information om vår verksamhet och vårt arbetssätt, vilka arbetsuppgifter vi utför samt vilka förväntningar det finns på dig som eventuell kund. Vi diskuterar även vilka behov du har och din vardag ser ut.</p>
      </div>
      <div className="about-container">
        <h4>Om du har ett assistansbeslut</h4>
        <p>Om du vill gå vidare i processen bokar vi ett personligt möte och du får ett förslag från oss på upplägg av din assistans samt förslag på budget på de beviljade timmarna. Härefter får du tid att fundera på om du vill gå vidare och bli kund hos oss.
            <br></br><br></br>Om du beslutar dig för att anlita oss som din assistansanordnare, tar vi hand om alla praktiska uppgifter.</p>
      </div>
      <div className="about-container">
        <img src={hjalp} alt="hjalp" className="header-img" />
        <h4>Behöver du hjälp med att ansöka om assistans?</h4>
        <h4>Våra brukaransvariga medarbetare hjälper dig!</h4>
        <p>Om du behöver hjälp med att ansöka om assistans så kan vår brukaransvariga medarbetare hjälpa dig detta. Det kan handla om att ta kontakt med myndigheter, att förstå alla intyg, att formulera ansökan samt eventuell överklagan. Om du så önskar är brukaransvarig även med vid hembesök av din kommun och/eller Försäkringskassan. Så fort vi börjar arbeta med din ansökan ser vi dig som kund hos oss och för våra kunder ingår den juridiska servicen. Du betalar alltså inget för den, oavsett om du blir beviljad assistans eller inte.</p>
      </div>
      <div className="help-how">
        <div className="about-container">
            <h4>Hur går det till när vi hjälper dig att ansöka?</h4>
            <p>• Vid ett första möte träffas brukaransvarig och kund samt eventuella andra personer som han eller hon vill ska vara med. Under mötet använder vi oss av en mall med olika frågor som används som underlag när vi sedan skriver ansökan. Frågorna handlar till exempel om vilka behov du har och hur en typisk dag kan se ut.<br></br><br></br>
            • Vi kommer även be dig om ett underlag från läkare som intygar din funktionsnedsättning. Det kan även finnas andra intyg som kan vara till hjälp i ansökan, men det är olika från individ till individ.<br></br><br></br>
            • Härefter sammanställer vi den information vi har samlat in och tar kontakt med dig för att bestämma hur många timmar vi ska ansöka om.<br></br><br></br>
            • Efter att vi skickat in ansökan kommer en tid för hembesök skickas från Försäkringskassa/kommun tillsammans med ett följebrev. Om du vill träffas för att diskutera dessa frågor bokar vi in ett möte. Under hembesöket kan brukaransvarige om du så önskar vara med som ett stöd.<br></br><br></br>
            • Efter hembesöket kommer ett förslag på beslut komma, en så kallad kommunicering, från kommunen och/eller Försäkringskassan. Om du känner att du vill komplettera denna beroende på vad som föreslås, bokar vi in ett personligt möte eller via telefon. Härefter hjälper vår kundansansvarige dig med att formulera en kommunicering.<br></br><br></br>
            • När beslutet kommer så överväger vi tillsammans om vi ska begära omprövning av beslutet. Det kan handla om att du har blivit beviljad färre timmar än du ansökt om, eller att ansökan har avslagits helt.<br></br><br></br>
            • När det omprövade beslutet kommer så överväger vi tillsammans om en eventuell överklagan ska göras.</p>
        </div>
      </div>
    </div>
  );
};

export default BecomeCustomer;
