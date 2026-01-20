import { UserCard } from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        {/* <div className="flex gap-4 justify-between flex-wrap"> */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="p-6 bg-lama-sky">
          <h1 className="text-2xl font-bold text-lamaPurple">
            Tailwind 적용 테스트
          </h1>
          <button className="mt-4 px-4 py-2 rounded bg-lamaYellow">버튼</button>
        </div>
      </div>
    </div>
  );
}
