import { Card, CardContent } from '@/components/ui/card'
import { Newspaper } from 'lucide-react'


const DashboardCard = () => {
    return ( 
        <Card className='bg-[#eee] dark:bg-[#111] p-4 pb-0'>
            <CardContent>
                <h3 className='text-3xl text-center mb-4 font-bold text-[#ff4500'>Post</h3>
            </CardContent>
        </Card>
     )
}
 
export default DashboardCard