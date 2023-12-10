'use client';

import { useEffect, useState } from 'react';
import './styles.scss';
import { PopularDestinationResponse } from '@/app/_types';
import { tourServices } from '@/app/_services';
import Link from 'next/link';

const PopularDestination = () => {
    const [destinations, setDestinations] = useState<PopularDestinationResponse[]>([]);

    useEffect(() => {
        const fetchPopularDestinations = async () => {
            const response = await tourServices.getPopularDestinations();

            if (response.status) {
                setDestinations(response.data as PopularDestinationResponse[]);
            }
        };

        fetchPopularDestinations();
    }, []);
    return (
        <section className="container-fluid">
            <div className="container p-0 pb-3 d-flex flex-column">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
                        Địa điểm
                    </h6>
                    <h1 style={{ fontFamily: 'Lora', fontWeight: '900' }}>Khám phá các địa điểm hot</h1>
                </div>
                <div className="row gap-0">
                    {destinations.map((destination) => {
                        return (
                            <div className="col-12 col-lg-4 col-md-6 mb-4">
                                <div className="destination-item position-relative overflow-hidden">
                                    <img className="img-fluid" src={destination.img} alt="" />
                                    <Link className="destination-overlay text-white text-decoration-none" href={`/explore?destination=${destination.name}`}>
                                        <h5 className="text-white">{destination.name}</h5>
                                        <span>{destination.orderQuantity} lượt thăm quan</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default PopularDestination;
