import { ServicesList, ServicesGroup } from '@/app/_components';

const HomePage = ({
    searchParams,
}: {
    searchParams: { page: number; destination: string };
}) => {
    return (
        <div className="container-fluid p-0 bg-light">
            <ServicesList
                destination={searchParams.destination}
                page={searchParams.page || 1}
            />
            <ServicesGroup />
        </div>
    );
};
export default HomePage;
