import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const sponsorsData = [
    {
        id: 1,
        name: 'Sponsor 1',
        jobOffers: [
            { id: 1, title: 'Job 1', description: 'Description for Job 1' },
            { id: 2, title: 'Job 2', description: 'Description for Job 2' },
            // Add more job offers for Sponsor 1
        ]
    },
    {
        id: 2,
        name: 'Sponsor 2',
        jobOffers: [
            { id: 3, title: 'Job 3', description: 'Description for Job 3' },
            { id: 4, title: 'Job 4', description: 'Description for Job 4' },
            // Add more job offers for Sponsor 2
        ]
    },
    // Add more sponsors
];


const OffersPage: React.FC<PageProps> = () => {
    const [selectedSponsor, setSelectedSponsor] = useState(null);
    const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);

    const handleSponsorClick = (sponsorId) => {
        setSelectedSponsor(sponsorId);
        setSelectedOfferIndex(0); // Reset to first offer when changing sponsor
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
                <h2>Job Offers</h2>
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
                {!selectedSponsor && <p>Please select a sponsor to see job offers</p>}
            </div>
        </Layout>
    );
};

export default OffersPage;