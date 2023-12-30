import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DashboardPage from '@/Layouts/DashboardPage';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}>
            <DashboardPage user={auth.user} />
        </AuthenticatedLayout>
    );
}
