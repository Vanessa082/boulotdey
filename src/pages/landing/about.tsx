export default function About() {
  return (
    <section className="bg-[#edf4ff] py-10 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-6">About BoulotDey</h2>
        <p className="text-lg text-gray-600 mb-6">
          At <span className="font-semibold">BoulotDey</span>, we are committed
          to connecting job seekers and employers across Cameroon’s{" "}
          <em>petite métier</em> sector, offering a safe, reliable, and
          community-driven platform. Whether you're a{" "}
          <span className="font-semibold">tailor, mason, hairdresser</span>, or
          seeking other informal job opportunities, we believe that every trade
          deserves recognition and respect.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="btn btn-primary bg-primary text-white hover:bg-primary">
            Post a Job
          </button>
          <button className="btn btn-outline text-primary border-primary hover:bg-primary hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-black">
            Our Impact in Numbers
          </h3>
          <p className="text-gray-600">
            Connecting professionals to opportunities and changing lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-3xl font-bold text-primary">50K+</h4>
            <p className="text-gray-600">Job Seekers Connected</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-3xl font-bold text-primary">10K+</h4>
            <p className="text-gray-600">Employers Engaged</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-3xl font-bold text-primary">5K+</h4>
            <p className="text-gray-600">Verified Profiles</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-black">Our Core Values</h3>
        <ul className="text-gray-600 space-y-4">
          <li>
            <strong>Trust:</strong> Verified profiles and job listings ensure
            security for all users.
          </li>
          <li>
            <strong>Community:</strong> Connecting people and building networks
            that strengthen local economies.
          </li>
          <li>
            <strong>Opportunity:</strong> Providing life-changing job
            opportunities to the people of Cameroon.
          </li>
        </ul>
      </div>
    </section>
  );
}
