// app/admin/page.tsx


import { headers } from 'next/headers';
import AdminPanel from '@/components/AdminPanel';

export default function AdminPage() {
    const headersList = headers();
    const host = headersList.get('host') || '';
    const isLocalhost = host.includes('localhost');
    const isAdminAccessEnabled = process.env.ACCESS_ADMIN === 'true';
    const isAuthorized = isLocalhost && isAdminAccessEnabled;

    if (!isAuthorized) {
        return <div>Unauthorized</div>;
    }

    return <AdminPanel />;
}