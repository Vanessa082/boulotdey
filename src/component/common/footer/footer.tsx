export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-10">
      {/* <div className="max-w-6xl mx-auto px-6"> */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="">
            <h1 className="text-3xl font-bold">BoulotDey</h1>
            <p className="text-sm">Connecting job seekers and employers.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Employers</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-secondary"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-secondary"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-secondary"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white pt-4">
          <p className="text-sm">© {new Date().getFullYear()} BoulotDey. All rights reserved.</p>
        </div>
      {/* </div> */}
    </footer>

  )
}