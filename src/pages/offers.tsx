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

    const handleSponsorClick = (sponsorId) => {
        setSelectedSponsor(sponsorId);
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
                    <ul>
                        {sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers.map(jobOffer => (
                            <li key={jobOffer.id}>
                                <h3>{jobOffer.title}</h3>
                                <p>{jobOffer.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
                {!selectedSponsor && <p>Please select a sponsor to see job offers</p>}
            </div>
        </Layout>
    );
};

export default OffersPage;