// Produced by Duong Trung Nguyen

import { AdminTourList } from "@/app/_components";

const AdminTripPage = ({ searchParams } : { searchParams: { page: number } }) => {

    return (
        <AdminTourList page={searchParams.page || 1}/>
    );
};
export default AdminTripPage;