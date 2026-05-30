import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className="bg-yellow-50 min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-5">

        <div>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Find The Perfect Tutor For Your Learning Journey
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Book online tutoring sessions easily and improve your skills with experienced mentors.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to='/tutors'
              className="bg-yellow-400 px-6 py-3 rounded-xl font-semibold"
            >
              Explore Tutors
            </Link>

            <Link
              to='/addTutor'
              className="border border-black px-6 py-3 rounded-xl"
            >
              Become Tutor
            </Link>

          </div>

        </div>

        <div>
          <img
            className="rounded-3xl"
            src='https://i.ibb.co/Y0s3Y7f/teacher.jpg'
            alt='hero'
          />
        </div>

      </div>

    </div>
  )
}

export default Hero