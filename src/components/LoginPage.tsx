// "use client";
// import { adminApi } from "@/api/authApi";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Cookies from "js-cookie";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { serialize } from "object-to-formdata";
// import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { z } from "zod";

// const mySchema = z.object({
//   userName: z.string().min(1, { message: "Email is required." }),
//   password: z.string().min(1, { message: "Password is required." }),
// });

// type TMySchema = z.infer<typeof mySchema>;

// const MainPage = () => {
//   const router = useRouter();

  

//   return (
//     <>
//       <div  className="relative flex h-[100vh] w-full items-center justify-center bg-gradient-to-r from-zinc-600 to-indigo-600">
//         <div className="h-[50%] w-[30%]">
//           <div className="absolute top-[26rem] left-[14.5rem]rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
//             <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
//               <h3 className="text-center font-medium text-dark dark:text-white">
//                 Admin Login
//               </h3>
//             </div>
//             <div className="p-7 pt-0">
             
//                 <div className="flex justify-center gap-3">
//                   <Link
//                   href={'/admin-login'}>
//                   <button
//                     className="flex items-center justify-center rounded-[7px] bg-primary px-10 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                  
                   
//                   >
//                     Login
//                   </button>
//                   </Link>


                  
//                 </div>

//             </div>
//           </div>
//         </div>
//         <div className="h-[50%] w-[30%]">
//           <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
//             <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
//               <h3 className="text-center font-medium text-dark dark:text-white">
//                 Shop Login
//               </h3>
//             </div>
//             <div className="p-7 pt-0">
             
//                 <div className="flex justify-center gap-3">
//                     <Link 
//                     href={'/shop-login'}>
//                     <button
//                     className="flex items-center justify-center rounded-[7px] bg-primary px-10 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
//                   >
//                     Login
//                   </button>
//                     </Link>
                
//                 </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainPage;



'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const HomePage = () => {
 
    return (
        <>
        
            <div>

             <div className='relative'>
             <Link href={"/admin-login"}>
                <button
                      className="absolute top-[16rem] left-[14.5rem] bg-[#31511E] text-white  z-50 h-10 w-[10%] items-start rounded-full dark:bg-white dark:text-black"
                      type="submit"             >
                 Admin   Login
                    </button>
             </Link>
             <Link href={"/shop-login"}>
                <button
                      className="absolute top-[20rem] left-[14.5rem] bg-[#31511E] text-white  z-50 h-10 w-[10%] items-start rounded-full dark:bg-white dark:text-black"
                      type="submit"             >
                Shop   Login
                    </button>
             </Link>
              
                 <span className="h-12 w-[100%] rounded-full">
                 <div className="relative w-full h-[40rem]"><Image
                           fill
                            src="/images/login/User-01.png"
                            // style={{
                            //   width: "auto",
                            //   height: "auto",
                            // }}
                            alt="User"
                            className="object-fill"
                            /></div>
                            </span>
             </div>

                           <br></br>

               <span className="h-12 w-[100%]  rounded-full">
                         <div className="relative w-full h-[40rem]"><Image
                         fill
                          src="/images/home/User-02.png"
                          // style={{
                          //   width: "auto",
                          //   height: "auto",
                          // }}
                          alt="User"
                           className="object-fill"
                           /></div>
                      </span>
                      

               {/* <span className="h-12 w-[100%]  rounded-full">
               <div className="relative w-full h-[40rem]"> <Image
                          fill
                          src="/images/home/User-03.png"
                          // style={{
                          //   width: "auto",
                          //   height: "auto",
                          // }}
                          alt="User"
                          className="object-fill"
                          /></div>
                      </span> */}
                 </div>
          
        </>
    )
}

export default HomePage