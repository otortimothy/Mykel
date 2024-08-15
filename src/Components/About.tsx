import Footer from "./Footer"
import Navbar from "./Navbar"


const About = () => {
  return (
    <div>
      <Navbar/>

      <div className=" space-y-32 pt-32">

            <div className="px-32 flex justify-center items-center gap-16">
                <div className="px-5 space-y-5">
                    <div className="flex items-center">
                      <div className="w-16 h-1 bg-[#0E5AF2] mr-4"></div>
                      <span className=" font-semibold text-[#0E5AF2]">ABOUT US</span>
                    </div>
                    <div className=" text-[40px] font-extrabold">Who We Are</div>
                      <p className=" font-light">We are a solution-driven Information Technology
                            consulting firm<br/>seeking innovative ways to overcome the
                            business challenges<br/>faced by various industries in
                            Nigeria..<br/>
                            We are committed to delivering superior customer service through<br/>
                            best practice and outsourcing that meets our clients’ needs,<br/>
                            minimize risks and maximize return on investment.
                      </p>

                </div>
                <img src="/public/Images/graphic-designer-working-on-laptop-5531209-4623148 1.png"/>
            </div>

              <div className=" ">
                <img src="/public/Images/Frame 14.png" className=" w-full h-[552px] absolute"/>
                <div className="relative flex content-center p-32 gap-10">

                  <div className="px-5 space-y-5">
                      <div className="flex items-center">
                        <div className="w-16 h-1 bg-[#0E5AF2] mr-4"></div>
                        <span className=" font-semibold text-[#0E5AF2]">OUR VALUE</span>
                      </div>
                      <div className=" text-[40px] font-extrabold">Delivering Superior<br/>Customer Service</div>
                        <p className=" font-light">We are a solution-driven Information Technology
                              consulting firm<br/>seeking innovative ways to overcome the
                              business challenges<br/>faced by various industries in
                              Nigeria.
                        </p>
                  </div>


                    <div className="flex gap-[27px]">
                      <div className="hover:bg-[#0E5AF2] hover:text-white p-5 space-y-3 bg-white text-black rounded-xl w-[280px] transition-all duration-700">
                          <div className=" grid justify-center">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="white"/>
                            <path d="M12.1428 30.2948H11.0714V37.304H12.1428V30.2948Z" fill="black"/>
                            <path d="M12.1428 38.3824H11.0714V39.9999H12.1428V38.3824Z" fill="black"/>
                            <path d="M14.2858 27.0598H13.2144V32.4515H14.2858V27.0598Z" fill="black"/>
                            <path d="M14.2858 33.5298H13.2144V35.1474H14.2858V33.5298Z" fill="black"/>
                            <path d="M38.9287 30.2948H37.8573V37.304H38.9287V30.2948Z" fill="black"/>
                            <path d="M38.9287 38.3824H37.8573V39.9999H38.9287V38.3824Z" fill="black"/>
                            <path d="M36.7854 27.0598H35.714V32.4515H36.7854V27.0598Z" fill="black"/>
                            <path d="M36.7854 33.5298H35.714V35.1474H36.7854V33.5298Z" fill="black"/>
                            <path d="M12.6784 22.7465H13.7498V21.6681H12.6784V20.5898H11.6069V21.6681H10.5355V22.7465H11.6069V23.8248H12.6784V22.7465Z" fill="black"/>
                            <path d="M36.7857 13.5806H37.8571V12.5023H36.7857V11.424H35.7142V12.5023H34.6428V13.5806H35.7142V14.659H36.7857V13.5806Z" fill="black"/>
                            <path d="M15.3571 17.894H13.75V18.9723H15.3571V17.894Z" fill="black"/>
                            <path d="M11.6071 16.2764H10V17.3547H11.6071V16.2764Z" fill="black"/>
                            <path d="M14.2856 13.5805H12.6785V14.6589H14.2856V13.5805Z" fill="black"/>
                            <path d="M36.25 17.894H34.6428V18.9723H36.25V17.894Z" fill="black"/>
                            <path d="M38.3927 21.129H36.7855V22.2073H38.3927V21.129Z" fill="black"/>
                            <path d="M40 17.894H38.3928V18.9723H40V17.894Z" fill="black"/>
                            <path d="M19.6431 17.3547H17.5002V27.5075L19.6431 25.5468V17.3547Z" fill="#0E5AF2"/>
                            <path d="M19.6431 15.3289C19.6463 14.204 19.2684 13.1116 18.5717 12.2319C17.875 13.1116 17.4971 14.204 17.5003 15.3289V16.2764H19.6431V15.3289Z" fill="#0E5AF2"/>
                            <path d="M17.9042 31.3732L17.1389 34.069H20.0042L19.2388 31.3732H17.9042Z" fill="#0E5AF2"/>
                            <path d="M19.2248 35.1473H17.9185L17.5981 36.4369C17.4476 37.0391 17.4584 37.6707 17.6294 38.2674C17.8004 38.864 18.1255 39.4044 18.5716 39.8334C19.0177 39.4044 19.3428 38.864 19.5138 38.2674C19.6848 37.6707 19.6956 37.0391 19.5451 36.4369L19.2248 35.1473Z" fill="#0E5AF2"/>
                            <path d="M21.843 33.2316C21.8056 33.1569 21.7861 33.0744 21.786 32.9907V31.3732H20.3534L21.1187 34.069H22.2585L21.8426 33.2318L21.843 33.2316Z" fill="#0E5AF2"/>
                            <path d="M32.5001 17.3547H30.3573V25.5468L32.5001 27.5075V17.3547Z" fill="#0E5AF2"/>
                            <path d="M32.5002 15.3289C32.5033 14.204 32.1254 13.1116 31.4287 12.2319C30.7321 13.1116 30.3541 14.204 30.3573 15.3289V16.2764H32.5002V15.3289Z" fill="#0E5AF2"/>
                            <path d="M21.7858 18.4331C21.7858 18.3601 21.8005 18.2878 21.8291 18.2207L23.0142 15.4376C23.1807 15.0465 23.4577 14.7131 23.8107 14.4789C24.1637 14.2446 24.5772 14.1197 25 14.1197C25.4229 14.1197 25.8364 14.2446 26.1894 14.4789C26.5424 14.7131 26.8193 15.0465 26.9859 15.4376L28.171 18.2207C28.1996 18.2878 28.2143 18.3601 28.2143 18.4331V23.5863L29.2857 24.5666V20.073C29.285 18.1896 28.9048 16.326 28.1682 14.5946C27.4316 12.8633 26.3538 11.3003 25 10C23.6463 11.3003 22.5685 12.8633 21.8319 14.5946C21.0952 16.326 20.7151 18.1896 20.7144 20.073V24.5666L21.7858 23.5863V18.4331Z" fill="#0E5AF2"/>
                            <path d="M25 15.1981C24.7868 15.1979 24.5783 15.2608 24.4003 15.3789C24.2223 15.497 24.0828 15.6651 23.9989 15.8624L23.8226 16.2764H26.1774L26.0011 15.8624C25.9173 15.6651 25.7777 15.497 25.5997 15.3789C25.4217 15.2608 25.2132 15.1979 25 15.1981Z" fill="#0E5AF2"/>
                            <path d="M26.6072 17.3547H23.3635L22.8572 18.5437V23.8247C22.8572 23.8999 22.8416 23.9742 22.8114 24.0429C22.7812 24.1116 22.7371 24.1732 22.6818 24.2237L16.9644 29.455V30.2948H21.7858V28.6773H22.8572V32.4514H24.4643V30.2948H25.5357V32.4514H27.1429V18.5437L26.6366 17.3547H26.6072ZM25.5357 19.5114H24.4643C24.3222 19.5114 24.186 19.4546 24.0855 19.3535C23.985 19.2524 23.9286 19.1152 23.9286 18.9722C23.9286 18.8292 23.985 18.6921 24.0855 18.591C24.186 18.4898 24.3222 18.433 24.4643 18.433H25.5357C25.6778 18.433 25.8141 18.4898 25.9145 18.591C26.015 18.6921 26.0714 18.8292 26.0714 18.9722C26.0714 19.1152 26.015 19.2524 25.9145 19.3535C25.8141 19.4546 25.6778 19.5114 25.5357 19.5114Z" fill="#0E5AF2"/>
                            <path d="M32.0751 35.1473H30.7688L30.4485 36.4369C30.2979 37.0391 30.3087 37.6707 30.4798 38.2674C30.6508 38.864 30.9759 39.4044 31.422 39.8334C31.868 39.4044 32.1931 38.864 32.3641 38.2674C32.5351 37.6707 32.5459 37.0391 32.3954 36.4369L32.0751 35.1473Z" fill="#0E5AF2"/>
                            <path d="M30.7613 31.3732L29.996 34.069H32.8612L32.0959 31.3732H30.7613Z" fill="#0E5AF2"/>
                            <path d="M28.2144 32.9907C28.2144 33.0744 28.1949 33.1569 28.1574 33.2316L28.1579 33.2318L27.7419 34.069H28.8817L29.647 31.3732H28.2144V32.9907Z" fill="#0E5AF2"/>
                            <path d="M28.2144 25.0436V30.2948H33.0358V29.455L28.2144 25.0436Z" fill="#0E5AF2"/>
                            <path d="M25.6667 35.6865H25.5358V37.304H24.4643V35.6865H24.332L24.1055 36.4796C23.9401 37.0672 23.9354 37.6887 24.0919 38.2787C24.2483 38.8687 24.56 39.4052 24.9942 39.8318C25.4289 39.4065 25.7417 38.8713 25.8996 38.2823C26.0576 37.6932 26.0549 37.0723 25.8918 36.4847L25.6667 35.6865Z" fill="#0E5AF2"/>
                            <path d="M25.5359 34.6082H26.2762L26.812 33.5298H25.5359V34.6082Z" fill="#0E5AF2"/>
                            <path d="M24.4645 33.5298H23.1885L23.7242 34.6082H24.4645V33.5298Z" fill="#0E5AF2"/>
                            </svg>
                          </div>
                        <div>
                          <div className="text-center font-semibold text-[20px]">Our Mission</div>
                          <p className="text-center text-[14px]">To deliver the most
                            reliable solution to <br/>
                            help our clients improve IT efficiency <br/>
                            and business profitability.
                          </p>
                        </div>
                      </div>

                      <div className="hover:bg-[#0E5AF2] hover:text-white p-5 space-y-3 bg-white text-black rounded-xl w-[280px] transition-all duration-700">
                        <div className=" grid justify-center">
                          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="white"/>
                            <path d="M35.1615 25C35.1615 22.9903 34.5655 21.0257 33.449 19.3547C32.3324 17.6837 30.7455 16.3813 28.8887 15.6122C27.032 14.8431 24.9889 14.6419 23.0178 15.034C21.0467 15.426 19.2361 16.3938 17.815 17.8149C16.394 19.236 15.4262 21.0465 15.0341 23.0176C14.642 24.9887 14.8433 27.0318 15.6124 28.8886C16.3814 30.7453 17.6838 32.3323 19.3549 33.4488C21.0259 34.5654 22.9904 35.1613 25.0002 35.1613C27.6951 35.1613 30.2797 34.0907 32.1853 32.1851C34.0909 30.2795 35.1615 27.695 35.1615 25ZM25.0002 34.1936C23.1819 34.1936 21.4044 33.6544 19.8925 32.6442C18.3806 31.634 17.2023 30.1981 16.5064 28.5182C15.8106 26.8383 15.6285 24.9898 15.9833 23.2064C16.338 21.4231 17.2136 19.7849 18.4993 18.4992C19.7851 17.2134 21.4232 16.3378 23.2066 15.9831C24.99 15.6284 26.8385 15.8104 28.5184 16.5063C30.1983 17.2021 31.6341 18.3805 32.6443 19.8923C33.6545 21.4042 34.1937 23.1817 34.1937 25C34.1937 27.4383 33.2251 29.7767 31.501 31.5008C29.7769 33.225 27.4384 34.1936 25.0002 34.1936Z" fill="#0E5AF2"/>
                            <path d="M39.5161 24.5161H39.0323C38.9116 20.9612 37.4455 17.5848 34.9304 15.0696C32.4152 12.5545 29.0388 11.0884 25.4839 10.9677V10.4839C25.4839 10.3555 25.4329 10.2325 25.3421 10.1417C25.2514 10.051 25.1283 10 25 10C24.8717 10 24.7486 10.051 24.6579 10.1417C24.5671 10.2325 24.5161 10.3555 24.5161 10.4839V10.9677C20.9612 11.0884 17.5848 12.5545 15.0696 15.0696C12.5545 17.5848 11.0884 20.9612 10.9677 24.5161H10.4839C10.3555 24.5161 10.2325 24.5671 10.1417 24.6579C10.051 24.7486 10 24.8717 10 25C10 25.1283 10.051 25.2514 10.1417 25.3421C10.2325 25.4329 10.3555 25.4839 10.4839 25.4839H10.9677C11.0884 29.0388 12.5545 32.4152 15.0696 34.9304C17.5848 37.4455 20.9612 38.9116 24.5161 39.0323V39.5161C24.5161 39.6445 24.5671 39.7675 24.6579 39.8583C24.7486 39.949 24.8717 40 25 40C25.1283 40 25.2514 39.949 25.3421 39.8583C25.4329 39.7675 25.4839 39.6445 25.4839 39.5161V39.0323C29.0388 38.9116 32.4152 37.4455 34.9304 34.9304C37.4455 32.4152 38.9116 29.0388 39.0323 25.4839H39.5161C39.6445 25.4839 39.7675 25.4329 39.8583 25.3421C39.949 25.2514 40 25.1283 40 25C40 24.8717 39.949 24.7486 39.8583 24.6579C39.7675 24.5671 39.6445 24.5161 39.5161 24.5161ZM25 36.129C24.8717 36.129 24.7486 36.18 24.6579 36.2708C24.5671 36.3615 24.5161 36.4846 24.5161 36.6129V37.0968C21.4744 36.9774 18.5895 35.7155 16.437 33.563C14.2845 31.4105 13.0226 28.5256 12.9032 25.4839H13.3871C13.5154 25.4839 13.6385 25.4329 13.7292 25.3421C13.82 25.2514 13.871 25.1283 13.871 25C13.871 24.8717 13.82 24.7486 13.7292 24.6579C13.6385 24.5671 13.5154 24.5161 13.3871 24.5161H12.9032C13.0226 21.4744 14.2845 18.5895 16.437 16.437C18.5895 14.2845 21.4744 13.0226 24.5161 12.9032V13.3871C24.5161 13.5154 24.5671 13.6385 24.6579 13.7292C24.7486 13.82 24.8717 13.871 25 13.871C25.1283 13.871 25.2514 13.82 25.3421 13.7292C25.4329 13.6385 25.4839 13.5154 25.4839 13.3871V12.9032C28.5256 13.0226 31.4105 14.2845 33.563 16.437C35.7155 18.5895 36.9774 21.4744 37.0968 24.5161H36.6129C36.4846 24.5161 36.3615 24.5671 36.2708 24.6579C36.18 24.7486 36.129 24.8717 36.129 25C36.129 25.1283 36.18 25.2514 36.2708 25.3421C36.3615 25.4329 36.4846 25.4839 36.6129 25.4839H37.0968C36.9774 28.5256 35.7155 31.4105 33.563 33.563C31.4105 35.7155 28.5256 36.9774 25.4839 37.0968V36.6129C25.4839 36.4846 25.4329 36.3615 25.3421 36.2708C25.2514 36.18 25.1283 36.129 25 36.129Z" fill="#0E5AF2"/>
                            <path d="M29.1125 20.1613C28.8609 20.1623 28.6127 20.2202 28.3867 20.3307V19.1936H21.6125V20.3307C21.3864 20.2202 21.1383 20.1623 20.8867 20.1613C20.4375 20.1613 20.0067 20.3397 19.6891 20.6573C19.3715 20.9749 19.1931 21.4057 19.1931 21.8549V22.5807C19.1931 23.3507 19.499 24.0891 20.0434 24.6336C20.5879 25.178 21.3264 25.4839 22.0963 25.4839C22.1333 25.4882 22.1707 25.4882 22.2076 25.4839C22.4718 25.8737 22.8144 26.2041 23.2135 26.454C23.6126 26.704 24.0594 26.8679 24.5254 26.9355C24.5221 26.9354 24.5189 26.9354 24.5157 26.9355V28.871H22.5802V31.2903H22.0963C21.968 31.2903 21.8449 31.3413 21.7542 31.4321C21.6634 31.5228 21.6125 31.6459 21.6125 31.7742C21.6125 31.9025 21.6634 32.0256 21.7542 32.1164C21.8449 32.2071 21.968 32.2581 22.0963 32.2581H27.9028C28.0311 32.2581 28.1542 32.2071 28.2449 32.1164C28.3357 32.0256 28.3867 31.9025 28.3867 31.7742C28.3867 31.6459 28.3357 31.5228 28.2449 31.4321C28.1542 31.3413 28.0311 31.2903 27.9028 31.2903H27.4189V28.871H25.4834V26.9355C25.4856 26.9227 25.4856 26.9096 25.4834 26.8968C25.9494 26.8292 26.3963 26.6653 26.7953 26.4153C27.1944 26.1654 27.537 25.835 27.8012 25.4452C27.8335 25.4619 27.8676 25.4749 27.9028 25.4839C28.6728 25.4839 29.4112 25.178 29.9557 24.6336C30.5001 24.0891 30.806 23.3507 30.806 22.5807V21.8549C30.806 21.4057 30.6276 20.9749 30.31 20.6573C29.9924 20.3397 29.5616 20.1613 29.1125 20.1613ZM21.6125 23.5484V24.4533C21.1972 24.346 20.8294 24.104 20.5666 23.765C20.3039 23.4261 20.1612 23.0095 20.1609 22.5807V21.8549C20.1609 21.6624 20.2373 21.4778 20.3734 21.3416C20.5096 21.2055 20.6942 21.1291 20.8867 21.1291C21.0792 21.1291 21.2638 21.2055 21.3999 21.3416C21.536 21.4778 21.6125 21.6624 21.6125 21.8549V23.5484ZM29.8383 22.5807C29.838 23.0095 29.6952 23.4261 29.4325 23.765C29.1697 24.104 28.8019 24.346 28.3867 24.4533V21.8549C28.3867 21.6624 28.4631 21.4778 28.5992 21.3416C28.7354 21.2055 28.92 21.1291 29.1125 21.1291C29.305 21.1291 29.4896 21.2055 29.6257 21.3416C29.7618 21.4778 29.8383 21.6624 29.8383 21.8549V22.5807Z" fill="black"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-center font-semibold text-[20px]">Our Mission</div>
                          <p className="text-center text-[14px]">To deliver the most
                            reliable solution to <br/>
                            help our clients improve IT efficiency <br/>
                            and business profitability.
                          </p>
                        </div>
                      </div>
                    </div>


                </div>
              </div>


              <div className="flex justify-center ">
                <img src="/public/Images/graphic-designer-with-creative-idea-5531212-4623141 1.png"/>
                <div>
                  <div className="px-5 space-y-5">
                        <div>
                          <div className="flex items-center">
                              <div className="w-16 h-1 bg-blue-500 mr-4"></div>
                              <span className=" font-semibold text-blue-500">OUR OFFER</span>
                            </div>
                            <div className=" text-[40px] font-extrabold">The Valur Of Our<br/>Service</div>
                              <p className=" font-light">We are a solution-driven Information Technology
                                    consulting firm<br/>seeking innovative ways to overcome the
                                    business challenges<br/>faced by various industries in
                                    Nigeria.
                              </p>
                        </div>

                        <div className="space-y-8">

                            <div className="flex gap-5">
                              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#0E5AF2" fill-opacity="0.16"/>
                                <path d="M34.3333 13H15.6667C14.1867 13 13 14.2 13 15.6667V34.3333C13 35.8 14.1867 37 15.6667 37H34.3333C35.8133 37 37 35.8 37 34.3333V15.6667C37 14.2 35.8133 13 34.3333 13ZM22.3333 31.6667L15.6667 25L17.5467 23.12L22.3333 27.8933L32.4533 17.7733L34.3333 19.6667L22.3333 31.6667Z" fill="#0E5AF2"/>
                              </svg>

                              <div>
                                <span className="text-[20px] font-semibold">Easy to use</span>
                                <p className="text-[14px]">We are a solution-driven Information Technology
                                  consulting firm seeking<br/>
                                  innovative ways to overcome the
                                  business challenges faced by various<br/>
                                  industries in Nigeria
                                </p>
                              </div>
                            </div>


                            <div className="flex gap-5">
                              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#0E5AF2" fill-opacity="0.16"/>
                                <path d="M34.3333 13H15.6667C14.1867 13 13 14.2 13 15.6667V34.3333C13 35.8 14.1867 37 15.6667 37H34.3333C35.8133 37 37 35.8 37 34.3333V15.6667C37 14.2 35.8133 13 34.3333 13ZM22.3333 31.6667L15.6667 25L17.5467 23.12L22.3333 27.8933L32.4533 17.7733L34.3333 19.6667L22.3333 31.6667Z" fill="#0E5AF2"/>
                              </svg>

                              <div>
                                <span className="text-[20px] font-semibold">Easy to use</span>
                                <p className="text-[14px]">We are a solution-driven Information Technology
                                  consulting firm seeking<br/>
                                  innovative ways to overcome the
                                  business challenges faced by various<br/>
                                  industries in Nigeria
                                </p>
                              </div>
                            </div>


                            <div className="flex gap-5">
                              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#0E5AF2" fill-opacity="0.16"/>
                                <path d="M34.3333 13H15.6667C14.1867 13 13 14.2 13 15.6667V34.3333C13 35.8 14.1867 37 15.6667 37H34.3333C35.8133 37 37 35.8 37 34.3333V15.6667C37 14.2 35.8133 13 34.3333 13ZM22.3333 31.6667L15.6667 25L17.5467 23.12L22.3333 27.8933L32.4533 17.7733L34.3333 19.6667L22.3333 31.6667Z" fill="#0E5AF2"/>
                              </svg>

                              <div>
                                <span className="text-[20px] font-semibold">Easy to use</span>
                                <p className="text-[14px]">We are a solution-driven Information Technology
                                  consulting firm seeking<br/>
                                  innovative ways to overcome the
                                  business challenges faced by various<br/>
                                  industries in Nigeria
                                </p>
                              </div>
                            </div>

                        </div>


                    </div>
                </div>
              </div>

              <div className="grid justify-center space-y-[50px]">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-1 bg-blue-500 mr-4"></div>
                    <span className=" font-semibold text-blue-500 ">OUR TEAM</span>
                  </div>
                  <div className=" text-[40px] font-extrabold text-center">Meet Our Awesome,<br/>Experts Techies</div>
                </div>

                <div className="flex gap-[30px]">
                      <div>
                        <img src="/public/Images/Rectangle 11.png"/>
                          <div className="grid text-center">
                          <span className="font-bold">Michael Stephen Otor</span>
                          <span className="text-[14px]">Founder & CEO</span>
                          </div>
                      </div>

                      <div>
                        <img src="/public/Images/Rectangle 11 (1).png"/>
                        <div className="grid text-center">
                          <span className="font-bold">Uche Sandra Chokamso</span>
                          <span className="text-[14px]">CTO</span>
                          </div>
                      </div>

                      <div>
                        <img src="/public/Images/Rectangle 11 (2).png"/>
                        <div className="grid text-center">
                          <span className="font-bold">Michael Stephen Otor</span>
                          <span className="text-[14px]">Founder & CEO</span>
                          </div>
                      </div>

                      <div>
                        <img src="/public/Images/Rectangle 11 (3).png"/>
                        <div className="grid text-center">
                          <span className="font-bold">Michael Stephen Otor</span>
                          <span className="text-[14px]">Founder & CEO</span>
                          </div>
                      </div>
                </div>
              </div>


              <div className="grid justify-center space-y-[50px] pt-24">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-1 bg-[#0E5AF2] mr-4"></div>
                    <span className=" font-semibold text-[#0E5AF2] ">CUSTOMERS REVIEWS</span>
                  </div>
                  <div className=" text-[40px] font-extrabold text-center">What Our Customers Say<br/>About Us</div>
                </div>

                <div className="flex gap-[30px]">
                      <div className="rounded-xl bg-[#EFF1F5] p-10 content-center h-[292px] space-y-5 hover:bg-white transition-all duration-700 hover:shadow-2xl">
                        <div className="flex justify-center">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex self-center">
                            <path d="M16.8599 14.3399V7.85994C16.8599 7.28707 17.0874 6.7376 17.4926 6.33264C17.8977 5.92751 18.447 5.69998 19.0199 5.69998H24.0599C24.6327 5.69998 25.1822 5.92749 25.5872 6.33264C25.9923 6.7376 26.2198 7.28707 26.2198 7.85994V17.2199C26.2198 18.4839 25.8872 19.7254 25.2552 20.8199C24.6234 21.9145 23.7144 22.8235 22.6198 23.4553C21.5253 24.0873 20.2838 24.4199 19.0198 24.4199C18.638 24.4199 18.2717 24.2683 18.0016 23.9982C17.7316 23.7282 17.5799 23.3619 17.5799 22.98C17.588 22.5973 17.745 22.2329 18.0174 21.964C18.2897 21.6952 18.6564 21.543 19.0391 21.54C20.1815 21.5349 21.2754 21.0776 22.0814 20.268C22.8874 19.4584 23.3398 18.3623 23.3398 17.2199V16.5001H19.0198C18.447 16.5001 17.8977 16.2724 17.4925 15.8674C17.0874 15.4623 16.8599 14.9128 16.8599 14.3399L16.8599 14.3399ZM6.05992 16.4999H10.3799V17.2199C10.3799 18.3623 9.92739 19.4583 9.12133 20.2679C8.3154 21.0776 7.22156 21.5349 6.07916 21.5399C5.69629 21.543 5.32985 21.6951 5.05745 21.964C4.7849 22.2329 4.62802 22.5973 4.61983 22.98C4.61983 23.3619 4.77167 23.7282 5.04171 23.9982C5.31174 24.2682 5.67805 24.4199 6.05991 24.4199C7.32368 24.4199 8.56538 24.0873 9.65991 23.4553C10.7544 22.8235 11.6633 21.9144 12.2953 20.8199C12.9273 19.7254 13.2599 18.4839 13.2599 17.2199V7.85991C13.2599 7.28704 13.0324 6.73757 12.6273 6.33261C12.2221 5.92748 11.6728 5.69995 11.1 5.69995H6.05995C5.48708 5.69995 4.93761 5.92746 4.53265 6.33261C4.12752 6.73757 3.89999 7.28704 3.89999 7.85991V14.3399C3.89999 14.9128 4.12751 15.4623 4.53265 15.8674C4.93762 16.2723 5.48708 16.5 6.05995 16.5L6.05992 16.4999Z" fill="#0E5AF2"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-[14px] text-center">
                            Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit. Diam pharetra varius mor<br/>
                            bi mattis ipsum semper mattis. Morbi ali<br/>
                            uam pellentesque arcu risus egestas.
                          </p>
                          <div className="grid justify-center text-center pt-5 space-y-2">
                            <span className="text-[18px] font-bold">Effiong David</span>
                            <span className="text-[#0E5AF2] text-[14px]">WebDev Customer</span>
                          </div>
                        </div>

                      </div>

                      <div className="rounded-xl bg-[#EFF1F5] p-10 content-center h-[292px] space-y-5 hover:bg-white transition-all duration-700 hover:shadow-2xl">
                        <div className="flex justify-center">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex self-center">
                            <path d="M16.8599 14.3399V7.85994C16.8599 7.28707 17.0874 6.7376 17.4926 6.33264C17.8977 5.92751 18.447 5.69998 19.0199 5.69998H24.0599C24.6327 5.69998 25.1822 5.92749 25.5872 6.33264C25.9923 6.7376 26.2198 7.28707 26.2198 7.85994V17.2199C26.2198 18.4839 25.8872 19.7254 25.2552 20.8199C24.6234 21.9145 23.7144 22.8235 22.6198 23.4553C21.5253 24.0873 20.2838 24.4199 19.0198 24.4199C18.638 24.4199 18.2717 24.2683 18.0016 23.9982C17.7316 23.7282 17.5799 23.3619 17.5799 22.98C17.588 22.5973 17.745 22.2329 18.0174 21.964C18.2897 21.6952 18.6564 21.543 19.0391 21.54C20.1815 21.5349 21.2754 21.0776 22.0814 20.268C22.8874 19.4584 23.3398 18.3623 23.3398 17.2199V16.5001H19.0198C18.447 16.5001 17.8977 16.2724 17.4925 15.8674C17.0874 15.4623 16.8599 14.9128 16.8599 14.3399L16.8599 14.3399ZM6.05992 16.4999H10.3799V17.2199C10.3799 18.3623 9.92739 19.4583 9.12133 20.2679C8.3154 21.0776 7.22156 21.5349 6.07916 21.5399C5.69629 21.543 5.32985 21.6951 5.05745 21.964C4.7849 22.2329 4.62802 22.5973 4.61983 22.98C4.61983 23.3619 4.77167 23.7282 5.04171 23.9982C5.31174 24.2682 5.67805 24.4199 6.05991 24.4199C7.32368 24.4199 8.56538 24.0873 9.65991 23.4553C10.7544 22.8235 11.6633 21.9144 12.2953 20.8199C12.9273 19.7254 13.2599 18.4839 13.2599 17.2199V7.85991C13.2599 7.28704 13.0324 6.73757 12.6273 6.33261C12.2221 5.92748 11.6728 5.69995 11.1 5.69995H6.05995C5.48708 5.69995 4.93761 5.92746 4.53265 6.33261C4.12752 6.73757 3.89999 7.28704 3.89999 7.85991V14.3399C3.89999 14.9128 4.12751 15.4623 4.53265 15.8674C4.93762 16.2723 5.48708 16.5 6.05995 16.5L6.05992 16.4999Z" fill="#0E5AF2"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-[14px] text-center">
                            Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit. Diam pharetra varius mor<br/>
                            bi mattis ipsum semper mattis. Morbi ali<br/>
                            uam pellentesque arcu risus egestas.
                          </p>
                          <div className="grid justify-center text-center pt-5 space-y-2">
                            <span className="text-[18px] font-bold">Ibrahim Salami</span>
                            <span className="text-[#0E5AF2] text-[14px]">UIUX Design Customer</span>
                          </div>
                        </div>

                      </div>

                      <div className="rounded-xl bg-[#EFF1F5] p-10 content-center h-[292px] space-y-5 hover:bg-white transition-all duration-700 hover:shadow-2xl">
                        <div className="flex justify-center">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex self-center">
                            <path d="M16.8599 14.3399V7.85994C16.8599 7.28707 17.0874 6.7376 17.4926 6.33264C17.8977 5.92751 18.447 5.69998 19.0199 5.69998H24.0599C24.6327 5.69998 25.1822 5.92749 25.5872 6.33264C25.9923 6.7376 26.2198 7.28707 26.2198 7.85994V17.2199C26.2198 18.4839 25.8872 19.7254 25.2552 20.8199C24.6234 21.9145 23.7144 22.8235 22.6198 23.4553C21.5253 24.0873 20.2838 24.4199 19.0198 24.4199C18.638 24.4199 18.2717 24.2683 18.0016 23.9982C17.7316 23.7282 17.5799 23.3619 17.5799 22.98C17.588 22.5973 17.745 22.2329 18.0174 21.964C18.2897 21.6952 18.6564 21.543 19.0391 21.54C20.1815 21.5349 21.2754 21.0776 22.0814 20.268C22.8874 19.4584 23.3398 18.3623 23.3398 17.2199V16.5001H19.0198C18.447 16.5001 17.8977 16.2724 17.4925 15.8674C17.0874 15.4623 16.8599 14.9128 16.8599 14.3399L16.8599 14.3399ZM6.05992 16.4999H10.3799V17.2199C10.3799 18.3623 9.92739 19.4583 9.12133 20.2679C8.3154 21.0776 7.22156 21.5349 6.07916 21.5399C5.69629 21.543 5.32985 21.6951 5.05745 21.964C4.7849 22.2329 4.62802 22.5973 4.61983 22.98C4.61983 23.3619 4.77167 23.7282 5.04171 23.9982C5.31174 24.2682 5.67805 24.4199 6.05991 24.4199C7.32368 24.4199 8.56538 24.0873 9.65991 23.4553C10.7544 22.8235 11.6633 21.9144 12.2953 20.8199C12.9273 19.7254 13.2599 18.4839 13.2599 17.2199V7.85991C13.2599 7.28704 13.0324 6.73757 12.6273 6.33261C12.2221 5.92748 11.6728 5.69995 11.1 5.69995H6.05995C5.48708 5.69995 4.93761 5.92746 4.53265 6.33261C4.12752 6.73757 3.89999 7.28704 3.89999 7.85991V14.3399C3.89999 14.9128 4.12751 15.4623 4.53265 15.8674C4.93762 16.2723 5.48708 16.5 6.05995 16.5L6.05992 16.4999Z" fill="#0E5AF2"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-[14px] text-center">
                            Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit. Diam pharetra varius mor<br/>
                            bi mattis ipsum semper mattis. Morbi ali<br/>
                            uam pellentesque arcu risus egestas.
                          </p>
                          <div className="grid justify-center text-center pt-5 space-y-2">
                            <span className="text-[18px] font-bold"> Johnson Winifred</span>
                            <span className="text-[#0E5AF2] text-[14px]">Sound Engineering Customer</span>
                          </div>
                        </div>

                      </div>
                </div>
              </div>


              <div>
                <Footer/>
              </div>


      </div>

    </div>
  )
}
export default About