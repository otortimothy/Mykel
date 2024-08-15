
import { NavLink } from "react-router-dom";


const Navbar = () => {

      return (
        <div className="w-full z-10 top-0 left-0 fixed px-32 bg-violet-100 ">
          {/* <div className=" flex justify-between p-5 items-center">
            <img src="/public/Images/Logo.png" className=" align-middle"/>
              <ul className="flex justify-center gap-14 text-[18px] font-medium">
                <li className="hover:text-[#0E5AF2]"><a href="/"><span>Home</span></a></li>
                <li className="hover:text-[#0E5AF2]"><a href="About">About Us</a></li>
                <li className="hover:text-[#0E5AF2]"><a href="OurService">Our Services</a></li>
                <li className="hover:text-[#0E5AF2]"><a href="ContactUs">Contact Us</a></li>
              </ul>
              <button className="transition-all duration-700 bg-[#0E5AF2] text-white p-2 w-[129px] rounded-md hover:text-[#0E5AF2] hover:bg-white hover:border hover:border-[#0E5AF2]">Get A Quote</button>
          </div> */}
          <div className=" flex justify-between p-5 items-center">
              <img src="/public/Images/Logo.png" className=" align-middle"/>
                <nav className="flex space-x-[30px]">
                  <NavLink
                    to="/"
                    className= {({ isActive }) =>
                      isActive ? 'text-[#0E5AF2] text-[17px] font-semibold' : 'hover:text-[#0E5AF2] text-[17px] font-semibold'
                    
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? 'text-[#0E5AF2] text-[17px] font-semibold' : 'hover:text-[#0E5AF2] text-[17px] font-semibold'
                    }
                  >
                    About Us
                  </NavLink>

                  <NavLink
                    to="/OurService"
                    className={({ isActive }) =>
                      isActive ? 'text-[#0E5AF2] text-[17px] font-semibold' : 'hover:text-[#0E5AF2] text-[17px] font-semibold'
                    }
                  >
                    Our Service
                  </NavLink>

                  <NavLink
                    to="/ContactUs"
                    className={({ isActive }) =>
                      isActive ? 'text-[#0E5AF2] text-[17px] font-semibold' : 'hover:text-[#0E5AF2] text-[17px] font-semibold'
                    }
                  >
                    Contact
                  </NavLink>
                </nav>
              <button className="transition-all duration-700 bg-[#0E5AF2] text-white p-2 w-[129px] rounded-md hover:text-[#0E5AF2] hover:bg-white hover:border hover:border-[#0E5AF2]">Get A Quote</button>
          </div>
        </div>

  )
}
export default Navbar


