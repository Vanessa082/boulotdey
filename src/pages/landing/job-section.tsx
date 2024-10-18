import JobList from "../jobboard/job-board-page/job-list/job-list";

export default function JobSection() {
  return (
    <section className="w-full flex flex-col justify-between items-center gap-4">
      <h1 className="text-3xl font-bold py-2">
        New Job Opportuinities In Cameroon
      </h1>
      <JobList />
    </section>
  );
}
