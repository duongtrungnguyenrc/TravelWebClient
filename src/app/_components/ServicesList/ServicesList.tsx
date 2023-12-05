// Produced by Duong Trung Nguyen

'use client';

import './styles.scss';
import ServiceItem from '../ServiceItem/ServiceItem';
import { memo, useCallback, useEffect, useState } from 'react';
import { SkeletonServicesList } from '..';
import { Container, Grid, Pagination, Stack } from '@mui/material';
import { AllToursResponse } from '@/app/_types';
import { useRouter } from 'next/navigation';
import { tourServices } from '@/app/_services';
import ServiceFilter from '../ServiceFilter/ServiceFilter';
import { toast } from 'react-toastify';

const ServicesList = ({
    page,
    destination,
}: {
    page: number;
    destination?: string;
}) => {
    const [tourData, setTourData] = useState<AllToursResponse>();

    const router = useRouter();

    const fetchAllTours = async () => {
        const response = await tourServices.getAllTours(page, 21);

        if (response.status) {
            setTourData(response.data as AllToursResponse);
        } else {
            toast.error(response.message);
        }
    };

    const fetchToursByDestination = async (query: string) => {
        const response = await tourServices.search(page, 12, query);

        if (response.status) {
            setTourData(response.data as AllToursResponse);
        } else {
            toast.error(response.message);
        }
    };

    useEffect(() => {
        destination ? fetchToursByDestination(destination) : fetchAllTours();
    }, [page]);

    const handleChangePage = useCallback(
        (_event: React.ChangeEvent<unknown>, value: number) => {
            router.push(`/explore?page=${value}`, { scroll: false });
        },
        []
    );

    return (
        <Container
            style={{ paddingTop: '150px' }}
            maxWidth="xl"
            className="services-list-site">
            <Grid container direction="row" className="m-0">
                <Grid className="rounded position-relative col-lg-2 p-2" item>
                    <ServiceFilter
                        page={page}
                        limit={21}
                        onFilter={setTourData}
                    />
                </Grid>
                <Grid item className="col-lg-10 p-0">
                    {tourData ? (
                        tourData.pages !== 0 ? (
                            <Grid container className="services-list m-0 p-0">
                                {tourData.tours.map((tour) => {
                                    return (
                                        <Grid
                                            key={tour.id}
                                            item
                                            xs={12}
                                            md={6}
                                            lg={4}
                                            className="p-2">
                                            <ServiceItem service={tour} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        ) : (
                            'Không có tour nào được tìm thấy!'
                        )
                    ) : (
                        <SkeletonServicesList />
                    )}
                </Grid>
            </Grid>
            <Stack className="mt-5" direction="row" justifyContent="center">
                <Pagination
                    shape="rounded"
                    variant="outlined"
                    color="primary"
                    size="large"
                    count={tourData?.pages}
                    page={page}
                    onChange={handleChangePage}
                />
            </Stack>
        </Container>
    );
};
export default memo(ServicesList);
