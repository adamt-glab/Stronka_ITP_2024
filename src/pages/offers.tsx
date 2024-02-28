import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.scss";

const sponsorsData = [
    {
        id: 1,
        name: 'Sponsor 1',
        jobOffers: [
            { id: 1, title: 'Oferta 1', description: 'Opis oferty 1' },
            { id: 2, title: 'Oferta 2', description: 'Opis oferty 2' },
        ]
    },
    {
        id: 2,
        name: 'Sponsor 2',
        jobOffers: [
            { id: 3, title: 'Oferta 3', description: 'Opis oferty 3' },
            { id: 4, title: 'Oferta 4', description: 'Opis oferty 4' },
        ]
    },
];


const OffersPage: React.FC<PageProps> = () => {
    const [selectedSponsor, setSelectedSponsor] = useState(null);
    const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);

    const handleSponsorClick = (sponsorId) => {
        setSelectedSponsor(sponsorId);
        setSelectedOfferIndex(0);
    };

    const handlePrevOffer = () => {
        setSelectedOfferIndex(prevIndex => {
            const maxIndex = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers.length - 1;
            return prevIndex === 0 ? maxIndex : prevIndex - 1;
        });
    };

    const handleNextOffer = () => {
        setSelectedOfferIndex(prevIndex => {
            const maxIndex = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers.length - 1;
            return prevIndex === maxIndex ? 0 : prevIndex + 1;
        });
    };
    return (
        <Layout>
            <h1>Offers Page</h1>
            <div className="sidebar">
                <h2>Sponsors</h2>
                <ul>
                    {sponsorsData.map(sponsor => (
                        <li key={sponsor.id} onClick={() => handleSponsorClick(sponsor.id)}>
                            {sponsor.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="job-offers-panel">
                <h2>Oferty pracy</h2>
                {selectedSponsor && (
                    <div>
                        <button onClick={handlePrevOffer}>{'<'}</button>
                        <div>
                            <h3>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].title}</h3>
                            <p>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].description}</p>
                        </div>
                        <button onClick={handleNextOffer}>{'>'}</button>
                    </div>
                )}
                {!selectedSponsor && <p>Wybierz Sponsora</p>}
            </div>
        </Layout>
    );
};

export default OffersPage;