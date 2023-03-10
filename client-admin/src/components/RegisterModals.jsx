import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postUser } from "../stores/actions/userAction";

export default function RegisterModals({ visible, setModalsFalse }) {
     const dispatch = useDispatch();

     const initialValue = {
          email: "",
          password: "",
          name: "",
          phoneNumber: "",
          address: "",
     };
     const [inputForm, setInputForm] = useState(initialValue);

     function registerState(val) {
          let data = {
               ...inputForm,
               [val.target.name]: val.target.value,
          };
          setInputForm(data);
     }

     if (!visible) {
          return;
     }

     return (
          <>
               <div className="w-full h-full top-0 bg-opacity-20 bg-slate-700 z-10 absolute">
                    {" "}
               </div>
               <div className="fixed inset-0 flex flex-col items-center justify-center z-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"></h1>
                              <form
                                   className="space-y-4 md:space-y-6"
                                   onSubmit={(e) => {
                                        e.preventDefault();
                                        dispatch(postUser(inputForm))
                                             .then((data) => {
                                                  toast.success(`🦄 ${data} `);
                                                  setModalsFalse();
                                                  setInputForm(initialValue)
                                             })
                                             .catch((err) => {
                                                  toast.error(`${err.message}`);
                                             });
                                   }}
                              >
                                   <div>
                                        <label
                                             htmlFor="email"
                                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                             Email
                                        </label>
                                        <input
                                             type="email"
                                             name="email"
                                             value={inputForm.email}
                                             onChange={registerState}
                                             id="email"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             placeholder="name@mail.com"
                                             required=""
                                        />
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="password"
                                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                             Password
                                        </label>
                                        <input
                                             type="password"
                                             name="password"
                                             value={inputForm.password}
                                             onChange={registerState}
                                             id="password"
                                             placeholder="••••••••"
                                             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             required=""
                                        />
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="name"
                                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                             Name
                                        </label>
                                        <input
                                             type="text"
                                             name="name"
                                             value={inputForm.name}
                                             onChange={registerState}
                                             id="name"
                                             placeholder="name ..."
                                             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             required=""
                                        />
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="phoneNumber"
                                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                             Phone Number
                                        </label>
                                        <input
                                             type="number"
                                             name="phoneNumber"
                                             id="phoneNumber"
                                             value={inputForm.phoneNumber}
                                             onChange={registerState}
                                             placeholder="Phone Number ...."
                                             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             required=""
                                        />
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="address"
                                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                             Address
                                        </label>
                                        <textarea
                                             id="address"
                                             name="address"
                                             rows="4"
                                             value={inputForm.address}
                                             onChange={registerState}
                                             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             placeholder="Write your address here..."
                                        ></textarea>
                                   </div>
                                   <div className="flex justify-center ">
                                        <div className=" flex col gap-x-5 ">
                                             <div>
                                                  <button
                                                       type="button"
                                                       onClick={setModalsFalse}
                                                       className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                  >
                                                       Cancel
                                                  </button>
                                             </div>
                                             <div>
                                                  <button
                                                       type="submit"
                                                       className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                  >
                                                       Submit
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     );
}
