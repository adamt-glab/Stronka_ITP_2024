import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.scss";
import styled, { keyframes } from "styled-components";
//@ts-ignore
import offerBackground from "../images/offers_elements/background.png";
//@ts-ignore
import movingGear from "../images/offers_elements/zebatka_ruchoma.png";

//@ts-ignore
import gearMoving from "../images/offers_elements/zebatka_ruchoma.png.png";
//@ts-ignore
import gearBackground from "../images/offers_elements/zebatki_tlo.png";

function importAll(r: any) {
    return r.keys().map(r);
}
const logos = importAll(
    require.context("../images/offers", false, /\.(png|jpe?g|svg)$/)
);

const sponsorsData = [
    {
        id: 1,
        name: 'IBM',
        img: 0,
        jobOffers: [
            {
                id: 1,
                company_name: 'IBM',
                position: 'Python Engineer - Programista Python',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Dobra znajomość i doświadczenie w programowaniu w języku Python.<br> Pasja do technologii i rozwoju oprogramowania.<br> Silne umiejętności techniczne i krytycznego myślenia.<br> Dobra współpraca i komunikacja - praca z zespołami z całego świata.<br> Silne umiejętności pracy zespołowej.<br> Entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania potencjalnych rozwiązań problemów.<br> Wykazywanie się umiejętnościami analitycznymi. ',
                duties: 'Zbieranie wymagań, projektowanie i przegląd techniczny, wspierające realizację celów biznesowych w projekcie. <br> Uczestniczenie we wdrażaniu zaawansowanych systemów oprogramowania z naciskiem na programowanie w języku Python, Java i React. <br> Udział w przeglądach kodu. Przeglądy obejmują innych inżynierów oprogramowania i są przeprowadzane w celu zapewnienia wysokiego poziomu jakości programowania oraz dzielenia się wiedzą z członkami zespołu. <br> Przestrzeganie praktyk inżynierii oprogramowania przy użyciu takich narzędzi i metodologii jak Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
            {
                id: 2,
                company_name: 'IBM',
                position: 'Python Engineer - Programista Python',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Dobra znajomość i doświadczenie w programowaniu w języku Python.<br> Pasja do technologii i rozwoju oprogramowania.<br> Silne umiejętności techniczne i krytycznego myślenia.<br> Dobra współpraca i komunikacja - praca z zespołami z całego świata.<br> Silne umiejętności pracy zespołowej.<br> Entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania potencjalnych rozwiązań problemów.<br> Wykazywanie się umiejętnościami analitycznymi. ',
                duties: 'Zbieranie wymagań, projektowanie i przegląd techniczny, wspierające realizację celów biznesowych w projekcie. <br> Uczestniczenie we wdrażaniu zaawansowanych systemów oprogramowania z naciskiem na programowanie w języku Python, Java i React. <br> Udział w przeglądach kodu. Przeglądy obejmują innych inżynierów oprogramowania i są przeprowadzane w celu zapewnienia wysokiego poziomu jakości programowania oraz dzielenia się wiedzą z członkami zespołu. <br> Przestrzeganie praktyk inżynierii oprogramowania przy użyciu takich narzędzi i metodologii jak Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
            {
                id: 3,
                company_name: 'IBM',
                position: 'Python Engineer - Programista Python',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Dobra znajomość i doświadczenie w programowaniu w języku Python.<br> Pasja do technologii i rozwoju oprogramowania.<br> Silne umiejętności techniczne i krytycznego myślenia.<br> Dobra współpraca i komunikacja - praca z zespołami z całego świata.<br> Silne umiejętności pracy zespołowej.<br> Entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania potencjalnych rozwiązań problemów.<br> Wykazywanie się umiejętnościami analitycznymi. ',
                duties: 'Zbieranie wymagań, projektowanie i przegląd techniczny, wspierające realizację celów biznesowych w projekcie. <br> Uczestniczenie we wdrażaniu zaawansowanych systemów oprogramowania z naciskiem na programowanie w języku Python, Java i React. <br> Udział w przeglądach kodu. Przeglądy obejmują innych inżynierów oprogramowania i są przeprowadzane w celu zapewnienia wysokiego poziomu jakości programowania oraz dzielenia się wiedzą z członkami zespołu. <br> Przestrzeganie praktyk inżynierii oprogramowania przy użyciu takich narzędzi i metodologii jak Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
        ]
    },
    {
        id: 2,
        name: 'MARS',
        img: 1,
        jobOffers: [
            {
                id: 4,
                company_name: 'MARS',
                position: 'Python Engineer - Programista Python',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Dobra znajomość i doświadczenie w programowaniu w języku Python.<br> Pasja do technologii i rozwoju oprogramowania.<br> Silne umiejętności techniczne i krytycznego myślenia.<br> Dobra współpraca i komunikacja - praca z zespołami z całego świata.<br> Silne umiejętności pracy zespołowej.<br> Entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania potencjalnych rozwiązań problemów.<br> Wykazywanie się umiejętnościami analitycznymi. ',
                duties: 'Zbieranie wymagań, projektowanie i przegląd techniczny, wspierające realizację celów biznesowych w projekcie. <br> Uczestniczenie we wdrażaniu zaawansowanych systemów oprogramowania z naciskiem na programowanie w języku Python, Java i React. <br> Udział w przeglądach kodu. Przeglądy obejmują innych inżynierów oprogramowania i są przeprowadzane w celu zapewnienia wysokiego poziomu jakości programowania oraz dzielenia się wiedzą z członkami zespołu. <br> Przestrzeganie praktyk inżynierii oprogramowania przy użyciu takich narzędzi i metodologii jak Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
            {
                id: 5,
                company_name: 'MARS',
                position: 'Python Engineer - Programista Python',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Dobra znajomość i doświadczenie w programowaniu w języku Python.<br> Pasja do technologii i rozwoju oprogramowania.<br> Silne umiejętności techniczne i krytycznego myślenia.<br> Dobra współpraca i komunikacja - praca z zespołami z całego świata.<br> Silne umiejętności pracy zespołowej.<br> Entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania potencjalnych rozwiązań problemów.<br> Wykazywanie się umiejętnościami analitycznymi. ',
                duties: 'Zbieranie wymagań, projektowanie i przegląd techniczny, wspierające realizację celów biznesowych w projekcie. <br> Uczestniczenie we wdrażaniu zaawansowanych systemów oprogramowania z naciskiem na programowanie w języku Python, Java i React. <br> Udział w przeglądach kodu. Przeglądy obejmują innych inżynierów oprogramowania i są przeprowadzane w celu zapewnienia wysokiego poziomu jakości programowania oraz dzielenia się wiedzą z członkami zespołu. <br> Przestrzeganie praktyk inżynierii oprogramowania przy użyciu takich narzędzi i metodologii jak Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
            {
                id: 6,
                company_name: 'MARS',
                position: 'Python Engineer - Programista Python',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Dobra znajomość i doświadczenie w programowaniu w języku Python.<br> Pasja do technologii i rozwoju oprogramowania.<br> Silne umiejętności techniczne i krytycznego myślenia.<br> Dobra współpraca i komunikacja - praca z zespołami z całego świata.<br> Silne umiejętności pracy zespołowej.<br> Entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania potencjalnych rozwiązań problemów.<br> Wykazywanie się umiejętnościami analitycznymi. ',
                duties: 'Zbieranie wymagań, projektowanie i przegląd techniczny, wspierające realizację celów biznesowych w projekcie. <br> Uczestniczenie we wdrażaniu zaawansowanych systemów oprogramowania z naciskiem na programowanie w języku Python, Java i React. <br> Udział w przeglądach kodu. Przeglądy obejmują innych inżynierów oprogramowania i są przeprowadzane w celu zapewnienia wysokiego poziomu jakości programowania oraz dzielenia się wiedzą z członkami zespołu. <br> Przestrzeganie praktyk inżynierii oprogramowania przy użyciu takich narzędzi i metodologii jak Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
        ]
    },
];

const OffersPage: React.FC<PageProps> = () => {
    const [selectedSponsor, setSelectedSponsor] = useState(1);
    const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    const handleSponsorClick = (sponsorId) => {
        setSelectedSponsor(sponsorId);
        setSelectedOfferIndex(0);
    };

    const handlePrevOffer = () => {
        setSelectedOfferIndex(prevIndex => {
            const maxIndex = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers.length - 1;
        setRotation(rotation + 360);

            return prevIndex === 0 ? maxIndex : prevIndex - 1;
        });
    };

    const handleNextOffer = () => {
        setSelectedOfferIndex(prevIndex => {
            const maxIndex = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers.length - 1;
        setRotation(rotation + 360);

            return prevIndex === maxIndex ? 0 : prevIndex + 1;
        });
    };
    const selectedOffer = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex];
    return (
        <Layout>
            <ParentDiv>
                <LeftDiv>
                    <GridContainer>
                        {sponsorsData.map(sponsor => (
                            <GridItem key={sponsor.id} onClick={() => handleSponsorClick(sponsor.id)}>
                                <SImage src={logos[sponsor.img].default} alt={sponsor.name} />
                            </GridItem>
                        ))}
                    </GridContainer>
                </LeftDiv>
                <RightDiv>
                    <Picture>
                        <source srcSet={offerBackground} media="(min-width: 769px)" />
                        <Img src={offerBackground} alt="last page" />
                    </Picture>
                    <JobOffersPanel>
                        {selectedSponsor && (
                            <JobOfferCard>
                                <JobOfferContent>
                                    <Field>
                                        <Title>Nazwa firmy:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].company_name}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Stanowisko:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].position}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Rodzaj pracy:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].type}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Forma zatrudnienia:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].lease}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Lokalizacja:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].location}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Wymiar:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].job}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Opis:</Title>
                                        <Content dangerouslySetInnerHTML={{ __html: selectedOffer.description }}></Content>
                                        {/* <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].description}</Content> */}
                                    </Field>
                                    <Field>
                                        <Title>Wymagania:</Title>
                                        <Content dangerouslySetInnerHTML={{ __html: selectedOffer.requirements }}></Content>
                                        {/* <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].requirements}</Content> */}
                                    </Field>
                                    <Field>
                                        <Title>Obowiązki:</Title>
                                        <Content dangerouslySetInnerHTML={{ __html: selectedOffer.duties }}></Content>
                                        {/* <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].duties}</Content> */}
                                    </Field>
                                    <Field>
                                        <Title>Wynagrodzenie:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].payment}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Kontakt:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].contact}</Content>
                                    </Field>
                                </JobOfferContent>
                            </JobOfferCard>
                        )}
                        {!selectedSponsor && <p>Wybierz Sponsora</p>}
                    </JobOffersPanel>
                    <ButtonContainer>
                        <PrevButton onClick={handlePrevOffer}>
                            <BtnImg src={movingGear} alt="Poprzedni" style={{ transform: `rotate(${rotation}deg)` }}/>
                        </PrevButton>
                        <NextButton onClick={handleNextOffer}>
                            <BtnImg src={movingGear} alt="Następny" style={{ transform: `rotate(${rotation}deg)` }}/>
                        </NextButton>
                    </ButtonContainer>
                </RightDiv>
            </ParentDiv>
        </Layout>
    );
};

// Styled components

const GridContainer = styled.div`
  margin-top:1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px; /* Adjust gap between grid items */
`;

const GridItem = styled.div`
`;

const SImage = styled.img`
  cursor: pointer;
  display: block;
  align-self:center;
  width: 20vw;
  height: 15vh;
  aspect-ratio: 3/2;
  object-fit: contain;
  box-sizing: border-box;
  border: 0.2rem solid;
  border-radius: 3.5rem;
  border-color: #e5821a;
  background-color: #fffffa;
`;

const ParentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 3rem;
  aspect-ratio: 1;
  position: relative;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const LeftDiv = styled.div`
  padding: 0 0.5rem 0 0.5rem;
  border: 0.2rem solid;
  border-radius: 3.5rem;
  border-color: #e5821a;
  margin-left: 6%;
  min-width: auto; /* Reset min-width */
  display: inline-block;
  width: 20%;
  height: 66%;
  @media screen and (max-width: 769px) {
    width: 94%;
    height: 20%;
    margin-left: 0;
    margin-right: 0;
    position: relative;
  }
`;

const RightDiv = styled.div`
  margin-right: 6%;
  margin-left: 3%;
  width: 80%;
  display:flex;
  height: 66%;
  position: relative;
  @media screen and (max-width: 769px) {
    margin-left: 9%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 88%;
  }
`;

const Picture = styled.picture`
    position: relative;
    display: block;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BtnImg = styled.img`
  width: 100%;
  aspect-ratio:1;
  display: block;
  height: auto;
  transition: transform 2s ease;
`;

const JobOffersPanel = styled.div`
  top: 7%;
  bottom: 7%;
  left: 18%;
  right: 18%;
  overflow: auto; /* Allow the panel to become scrollable */
  max-height: 90%;
  position: absolute;
`;

const JobOfferCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const JobOfferContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between; /* Align title to left and content to right */
  margin-bottom: 10px;
  
`;

const Title = styled.div`
  font-weight: bold;
  flex: 1; /* Ensure title takes minimum space */
  @media screen and (max-width: 769px) {
    font-size: 0.7rem;
  }
`;

const Content = styled.div`
  color: #110B11;
  flex: 2; /* Ensure content takes more space */
  @media screen and (max-width: 769px) {
    font-size: 0.7rem;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PrevButton = styled.button`
  position: absolute;
  cursor: pointer;
  left: 0%;
  width: 10%;
  background:none;
  border: none;
  box-shadow: none;
  @media screen and (max-width: 769px) {
    width: 18%;
    left: -9%;
  }
`;

const NextButton = styled.button`
  position: absolute;
  background:none;
  cursor: pointer;
  right: 0%;
  width: 10%;
  border: none;
  box-shadow: none;
  @media screen and (max-width: 769px) {
    width: 18%;
    right: -9%;
  }
`;

export default OffersPage;