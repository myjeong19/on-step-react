import { ScheduleHeader, ScheduleList } from '@/components/schedule';
import { Outlet } from 'react-router';

export default function SchedulePage() {
  return (
    <>
      <div className="bg-gray-50 w-[350px] rounded-md h-full max-h-[776px] p-3">
        <ScheduleHeader />
        <ScheduleList />
      </div>

      <Outlet />
    </>
  );
}
