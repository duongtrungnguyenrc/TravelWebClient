'use client'

import { AdminTourList } from "@/app/_components";
import { RootState } from "@/app/_context/store";
import { tourServices } from "@/app/_services";
import { AllToursResponse } from "@/app/_types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminTripPage = ({ searchParams } : { searchParams: { page: number } }) => {
    const currentUser = useSelector((state) => (state as RootState).user)
    const [ data, setData ] = useState<AllToursResponse | null>(null);

    useEffect(() => {
        const fetchTours = async () => {
            
            const response = await tourServices.adminGetAll(searchParams?.page || 1, 20, currentUser.accessToken);
            if(response.status) {
                setData(response.data as AllToursResponse);
            }
        }

        fetchTours();
    }, [ searchParams.page ]);

    return (
        <AdminTourList pages={data?.pages || 1} tours={data?.tours || []}/>
    );
};
export default AdminTripPage;