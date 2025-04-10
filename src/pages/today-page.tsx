import { ScheduleList, ScheduleDetailContent, ScheduleDetailHeader } from '@/components/schedule';
import { ScheduleForm } from '@/components/schedule/schedule-form';
import { DateTimePicker } from '@/components/ui';

export default function TodayPage() {
  return (
    <>
      <div className="flex flex-col gap-2 min-w-[350px] w-full  h-full max-h-[850px]">
        <main className="bg-gray-50 rounded-md p-3 min-h-[776px] h-full">
          <ScheduleDetailHeader />
          <ScheduleDetailContent />
        </main>
      </div>

      <aside className="bg-gray-50 min-w-[350px] max-w-[400px] max-h-[850px] w-full rounded-md h-full p-3 overflow-hidden relative">
        <DateTimePicker date={new Date()} onDate={() => {}} type="today_viewer" />
        <hr />
        <ScheduleList />
        <ScheduleForm />
      </aside>
    </>
  );
}
