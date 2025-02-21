
import { PageContainer, PageHeader, DataTable } from 'eworldes-ui-toolkit';;
import { rows, columns } from "./gridData";
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const location = useLocation();
    function CustomPageHeader() {
        return <PageHeader pathname={location.pathname} />;
    }
    return (
        <PageContainer
            maxWidth={false}
            slots={{
                header: CustomPageHeader,
            }}>
            <DataTable rows={rows} columns={columns} />
        </PageContainer>
    )
}