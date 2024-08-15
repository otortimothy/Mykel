import Footer from "./Footer"
import Navbar from "./Navbar"

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-32 space-y-[180px]">
            <div className="flex justify-center items-center gap-16">
                <div className="px-5 space-y-5">
                    <div className="flex items-center">
                      <div className="w-16 h-1 bg-blue-500 mr-4"></div>
                      <span className=" font-semibold text-blue-500">CONTACT US</span>
                    </div>
                    <div className=" text-[40px] font-extrabold">24/7 Service Assistance</div>
                      <p className=" font-light">Get in touch and let us know how we can help. If you want to tell us<br/>
                      something more substantial, please complete this form and we'll<br/>
                      get back to you as soon as we can.
                      </p>

                </div>
                <img src="/public/Images/graphic-designer-working-on-laptop-5531209-4623148 1.png"/>
            </div>

            <div className=" ">
                <img src="/public/Images/Frame 14.png" className=" w-full h-[480px] absolute"/>
                <div className="relative flex content-center py-32 gap-10 justify-center">

                    <div className=" bg-white p-5 h-[220px] w-[330px] rounded-md grid justify-center">
                      <div className="flex justify-center">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.9146 20C60.8935 20 69.5743 28.9359 69.5743 40.1696C69.5743 51.1486 60.8935 53.7018 49.9146 80C38.6807 53.7018 30 51.1486 30 40.1696C30 28.9357 38.9359 20 49.9146 20ZM49.9146 32.255C53.9999 32.255 57.5741 35.5743 57.5741 39.9144C57.5741 43.9997 53.9994 47.5739 49.9146 47.5739C45.5741 47.5739 42.2552 43.9993 42.2552 39.9144C42.2552 35.5739 45.5745 32.255 49.9146 32.255Z" fill="#0E5AF2"/>
                        </svg>
                      </div>

                      <div className="text-center space-y-2">
                        <span className="text-[20px] font-semibold">Office Address</span>
                        <p className="text-[14px]">60, Nelson Mandela Street, Off Kwame<br/>
                        Nkrumah Cresent, Asokoro, Abuja</p>
                      </div>

                    </div>



                    <div className=" bg-white p-5 h-[220px] w-[330px] rounded-md grid justify-center">
                      <div className="flex justify-center">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M74.7227 70.2382L75.9224 62.4782C76.1624 60.958 75.3622 59.6779 74.0023 59.198L63.6022 56.7182C62.8019 56.4782 61.8422 56.558 60.9622 57.0379L54.7222 60.7182C54.4024 60.8784 54.0821 60.9582 53.8421 60.798C51.2021 59.678 48.0821 57.918 45.1223 55.1981C42.1624 52.4783 40.1624 49.5179 38.8026 46.9581C38.6424 46.7182 38.6424 46.3181 38.8026 46.0781L41.9226 39.5178C42.3227 38.6378 42.4025 37.678 42.0827 36.8778L38.7227 26.7177C38.1624 25.3578 36.8026 24.7177 35.283 25.1178L27.6831 26.9577C25.523 27.518 23.9231 29.5977 24.0029 31.8377C24.4828 42.1574 29.6831 50.0777 29.6831 50.0777C32.5631 54.5575 36.0029 58.3177 39.283 61.3578L39.523 61.5978C42.8031 64.6379 46.8031 67.6776 51.6028 70.1581C51.6028 70.1581 59.3628 74.7184 70.4828 74.2379C72.4828 74.1581 74.4025 72.3981 74.7228 70.2385L74.7227 70.2382Z" fill="#0E5AF2"/>
                        </svg>
                      </div>

                      <div className="text-center space-y-2">
                        <span className="text-[20px] font-semibold">Call Us</span>
                        <p className="text-[14px]">+234 813 000 0000, +234 703 000 0000,<br/>
                          +234 813 000 0000
                        </p>
                      </div>

                    </div>



                    <div className=" bg-white p-5 h-[220px] w-[330px] rounded-md grid justify-center">
                      <div className="flex justify-center">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.9518 40.0884C47.8377 40.7617 48.8942 41.1162 50.006 41.1162C51.1178 41.1162 52.1743 40.7617 53.0532 40.0909L77.2823 21.8188C75.1962 20.7712 72.5824 21.0836 70.3059 21.0836H58.4507H30.9235C28.3543 21.0836 25.09 20.6343 22.729 21.8188L46.9518 40.0884Z" fill="#0E5AF2"/>
                        <path d="M55.3414 51.0836C52.0128 49.9298 44.9876 49.294 39.7915 54.2288C35.6369 58.1689 34.0732 64.3611 35.8978 69.6344C36.281 70.7373 38.4938 76.3448 44.5155 78.3336C45.9862 78.8211 47.3903 79 48.6662 79C50.2407 79 51.6161 78.7252 52.6724 78.4132C53.7289 78.0988 54.3291 76.9915 54.0166 75.935C53.7042 74.883 52.6146 74.274 51.5384 74.5909C50.1808 74.9962 48.0724 75.3087 45.7692 74.5488C41.5257 73.1468 39.9422 69.1228 39.6678 68.3279C38.3434 64.5074 39.4973 60.0029 42.5361 57.1193C47.3086 52.59 53.9775 54.827 54.0373 54.8491C56.646 55.7573 58.6309 57.3605 59.7824 59.4848C60.2387 60.3306 61.2461 62.5765 60.7681 65.1813C60.6307 65.9189 60.4448 66.9308 59.6761 67.7658C58.9162 68.5874 57.7471 69.2874 57.2463 69.0659C56.8632 68.8909 56.4623 68.1736 56.4667 67.1878C56.4667 67.1567 56.4514 67.1325 56.4489 67.1013C56.4489 67.0702 56.4623 67.046 56.4598 67.0148C56.3822 66.0671 56.5216 64.8065 56.8474 63.4733C57.0511 62.6581 57.3412 61.7549 57.7066 60.7824C58.0942 59.7502 57.5716 58.6033 56.5438 58.2132C55.6337 57.8746 54.6613 58.2642 54.1719 59.0615C52.8342 58.056 51.2394 57.4692 49.5897 57.4692C47.2534 57.4559 44.9852 58.5123 43.743 60.2135C42.1437 62.2399 41.7808 65.2456 42.7908 68.0579C43.657 70.4609 45.3951 72.1596 47.4018 72.5916C47.8002 72.687 48.2145 72.7335 48.6396 72.7335C50.2517 72.7335 52.0082 72.0602 53.5852 70.8821C54.1058 71.6593 54.7613 72.3084 55.5784 72.685C58.1477 73.87 60.8873 72.3153 62.6038 70.4723C64.1586 68.7826 64.5017 66.9065 64.6855 65.901C65.392 62.054 63.9435 58.8095 63.288 57.5914C61.6798 54.6139 58.8585 52.3042 55.3412 51.0836L55.3414 51.0836ZM48.2879 68.7065C47.6012 68.5602 46.9349 67.7939 46.5428 66.7112C46.0114 65.2297 46.1444 63.6127 46.9195 62.6229C47.3427 62.0425 48.2904 61.4601 49.4907 61.4582C50.7705 61.4913 52.042 62.2333 52.8216 63.4182C52.6135 64.4836 52.5092 65.4777 52.5047 66.3972C51.076 68.0974 49.2687 68.9481 48.2879 68.7064L48.2879 68.7065Z" fill="#0E5AF2"/>
                        <path d="M79.8362 24.0553L55.0603 42.7413C53.6208 43.8333 51.8228 44.4379 50.0064 44.4379C48.1901 44.4379 46.3921 43.8353 44.9481 42.7369L20.1761 24.056C19.4429 25.1346 19 26.419 19 27.8166V55.3235C19 59.044 22.0122 62.0561 25.7326 62.0561H32.1312C32.7847 58.2249 34.605 54.5661 37.5039 51.8194C41.745 47.7929 46.7217 46.949 50.1501 46.949C52.3451 46.949 54.5751 47.301 56.4309 47.9457C60.7318 49.4405 64.2048 52.3064 66.2089 56.0116C66.7645 57.0438 67.7503 59.2471 68.0736 62.0575H74.2768C77.9973 62.0575 81.0095 59.0454 81.0095 55.3249L81.0105 27.8167C81.0124 26.4191 80.5695 25.1349 79.8364 24.0561L79.8362 24.0553Z" fill="#0E5AF2"/>
                        </svg>
                      </div>

                      <div className="text-center space-y-2">
                        <span className="text-[20px] font-semibold">Send Us a Mail</span>
                        <p className="text-[14px]">ouremailaddress@gmail.com</p>
                      </div>

                    </div>


                </div>
              </div>

              <div className="grid justify-center ">
                  <div className="bg-white rounded-lg shadow-2xl p-5 w-[960px] h-[600px]">
                    <form className='p-16 grid '>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pb-[50px]">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Your name</label>
                          <div className="mt-1 relative rounded-md border">
                            <input
                              type="text"
                              name="name"
                              className="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 px-8 sm:text-sm border-gray-300 rounded-md"
                              placeholder="Enter first and last name"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none p-2">

                              <span className="text-gray-500 sm:text-sm">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8365 11.1735C14.2592 11.1735 16.2229 9.2099 16.2229 6.78718C16.2229 4.36445 14.2592 2.3999 11.8365 2.3999C9.41379 2.3999 7.44924 4.36445 7.44924 6.78718C7.44106 9.20172 9.39106 11.1654 11.8056 11.1735C11.8165 11.1735 11.8265 11.1735 11.8365 11.1735Z" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>

                              </span>

                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">Company name</label>
                          <div className="mt-1 relative rounded-md border">
                            <input
                              type="text"
                              name="company"
                              className="focus:ring-blue-500 focus:border-blue-500  block w-full p-3 px-10 sm:text-sm border-gray-300 rounded-md"
                              placeholder="Enter name of company"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9728 20.3681C8.7338 20.3681 5.9668 19.8781 5.9668 17.9161C5.9668 15.9541 8.7158 14.2461 11.9728 14.2461C15.2118 14.2461 17.9788 15.9381 17.9788 17.8991C17.9788 19.8601 15.2298 20.3681 11.9728 20.3681Z" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9731 11.4485C14.0991 11.4485 15.8231 9.72551 15.8231 7.59951C15.8231 5.47351 14.0991 3.74951 11.9731 3.74951C9.84706 3.74951 8.12306 5.47351 8.12306 7.59951C8.11706 9.71751 9.82706 11.4415 11.9461 11.4485H11.9731Z" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.3633 10.3915C19.6003 10.0605 20.5123 8.93254 20.5123 7.58954C20.5123 6.18854 19.5193 5.01854 18.1973 4.74854" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.9434 13.5444C20.6974 13.5444 22.1954 14.7334 22.1954 15.7954C22.1954 16.4204 21.6784 17.1014 20.8944 17.2854" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.58359 10.3915C4.34559 10.0605 3.43359 8.93254 3.43359 7.58954C3.43359 6.18854 4.42759 5.01854 5.74859 4.74854" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.002 13.5444C3.248 13.5444 1.75 14.7334 1.75 15.7954C1.75 16.4204 2.267 17.1014 3.052 17.2854" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>

                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">E-mail</label>
                          <div className="mt-1 relative rounded-md border">
                            <input
                              type="email"
                              name="email"
                              className="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 px-10 sm:text-sm border-gray-300 rounded-md"
                              placeholder="Enter your email"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.5435 9.01904C17.5435 9.01904 14.3334 12.8717 11.9856 12.8717C9.63869 12.8717 6.39258 9.01904 6.39258 9.01904" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45117 11.9688C2.45117 5.13075 4.83212 2.85205 11.975 2.85205C19.1178 2.85205 21.4988 5.13075 21.4988 11.9688C21.4988 18.8059 19.1178 21.0856 11.975 21.0856C4.83212 21.0856 2.45117 18.8059 2.45117 11.9688Z" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">Phone number</label>
                          <div className="mt-1 relative rounded-md border">
                            <input
                              type="text"
                              name="phone"
                              className="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 px-10 sm:text-sm border-gray-300 rounded-md"
                              placeholder="Enter your phone number"
                            />
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm ">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.2451 7.46611 11.3894 12.6113C16.5348 17.7554 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>

                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">Message or project details</label>
                          <div className=" mt-1 relative rounded-md border">
                            <textarea
                              name="message"
                              rows="4"
                              className="focus:ring-blue-500 focus:border-blue-500 block w-full px-10 sm:text-sm border-gray-300 rounded-md pt-2"
                              placeholder="Enter your message"
                            ></textarea>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm -mt-14">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3359 19.5078H19.7129" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.058 4.85877C14.714 3.85077 12.808 4.12277 11.8 5.46577C11.8 5.46577 6.78704 12.1438 5.04804 14.4608C3.30904 16.7788 4.95404 19.6508 4.95404 19.6508C4.95404 19.6508 8.19804 20.3968 9.91203 18.1118C11.627 15.8278 16.664 9.11677 16.664 9.11677C17.672 7.77377 17.401 5.86677 16.058 4.85877Z" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5039 7.21143L15.3679 10.8624" stroke="#74808C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>

                              </span>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="w-[321px] py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-[#0E5AF2] hover:bg-white hover:text-[#0E5AF2] hover:border hover:border-[#0E5AF2] transition-all duration-700"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div>
                  <Footer/>
                </div>

      </div>
    </div>
  )
}
export default ContactUs