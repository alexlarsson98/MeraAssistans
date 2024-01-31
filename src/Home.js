import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import header from './mera_header_image.jpg';
import headerMobile from './mera_header_image_mobile.jpg';
import hug from './hug_mera.jpg';
import fountain from './mera_vattenfall - Copy.jpg';
import './Home.css';

const Home = () => {
  const [currentHeaderImage, setCurrentHeaderImage] = useState(header);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // 768px is a common breakpoint for mobile devices
        setCurrentHeaderImage(headerMobile);
      } else {
        setCurrentHeaderImage(header);
      }
    };
    handleResize();
  window.addEventListener('resize', handleResize);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        } else {
          entry.target.classList.remove('slide-in');
        }
      });
    }, { threshold: 0.5 });

    const imageContainers = document.querySelectorAll('.image-container');
    const textContainers = document.querySelectorAll('.text-container');

    imageContainers.forEach(container => observer.observe(container));
    textContainers.forEach(container => observer.observe(container));

    return () => {
      imageContainers.forEach(container => observer.unobserve(container));
      textContainers.forEach(container => observer.unobserve(container));
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="header-container">
      <img src={currentHeaderImage} alt="Header" className="header-image" />
        <div className="header-content">
          <h3>Personlig assistans för<br></br>personliga människor</h3>
          <Link to="/att-bli-kund" className="button-link">Ansök om assistans!</Link>
        </div>
      </div>
      <div className="container">
        <div className="text-container">
          <h3>Varför ska jag välja Mera Assistans?</h3>
          <p>Hos Mera Assistans innebär personlig assistans ökat självbestämmande och möjlighet till delaktighet i alla aspekter av samhället. Det är du och ditt liv som står i centrum och dina önskemål gällande utformandet av assistansen är centralt för vår verksamhet. </p>
          <p>Mera Assistans erbjuder dig juridisk rådgivning samt all administration, utbildning och fortbildning för dig som brukare och för dina assistenter samt unika försäkringar. Som arbetsgivare tycker vi att det är viktigt med goda arbetsvillkor för de personliga assistenterna. Vi har därför tecknat kollektivavtal med Kommunal genom Arbetsgivarorganisationen KFO. Vi erbjuder dina assistenter en bra lön då vi tror att det främjar långsiktighet i utformandet av den personliga assistansen. En annan aspekt gällande goda arbetsvillkor handlar om arbetsmiljö. Vi bedriver ett aktivt arbete för att utveckla arbetsmetoder och team kring dessa frågor vilket vi tror gynnar både assistenter och brukare.</p>
          <p>Tycker du att ett bra bemötande, kompetens, helhetsansvar och kvalitet är viktiga aspekter? Då är vi den assistansanordnare du söker.</p>
        </div>
        <div className="image-container">
          <img src={hug} alt="Hug" />
        </div>
      </div>
      <div className="container">
        <div className="text-container">
          <h3>Vi erbjuder våra kunder</h3>
          <h4>PERSONLIG SERVICE</h4>
          <p>Personlig service med förståelse för den enskildes livssituation.</p>
          <h4>KOMPETENSUTVECKLING</h4>
          <p>Kontinuerlig kompetensutveckling.</p>
          <h4>ADMINISTRATION</h4>
          <p>Regelbunden information om dina rättigheter och naturligtvis all form av administration.</p>
          <h4>STÖD</h4>
          <p>Stöd vid kontakt med myndigheter.</p>
          <h4>PERSONLIGT STÖD</h4>
          <p>Ett personligt stöd till dig som ingår i verksamheten.</p>
          <h4>PERSONLIG KONTAKT</h4>
          <p>En personlig kontakt som gör sitt bästa för att du ska få den livskvalitet som du har rätt till.</p>
        </div>
        <div className="image-container">
          <img src={fountain} alt="fountain" />
        </div>
      </div>
      <div className="container">
        <div className="text-container">
          <h3>Har du några frågor?</h3>
        </div>
        <div className="text-container">
          <Link to="/kontakt" className="button-link">Kontakta oss!</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
