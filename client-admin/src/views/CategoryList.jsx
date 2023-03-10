import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryTableRow from "../components/CategoryTableRow";
import { fetchCategory } from "../stores/actions/categoryAction";
import CategoryPostModals from "../components/CategoryPostModals";
import LoadingComponent from "../components/LoadingComponent";

export default function CategoryList() {
     const categories = useSelector((state) => state.categoryReducer.categories);
     const {isLoading} = useSelector((state) => state.loadingReducer)
     const dispatch = useDispatch();

     //local states
     const [categoryModals, setCategoryModals] = useState(false);
     const [headerName, setHeaderName] = useState('')
     const [editCategoryData, setEditCategoryData] = useState({})

     function editCategoryHandler(data) {
          setEditCategoryData(data)
     }


     const setModalstrue = () => {
          setCategoryModals(true);
     };
     const setModalsFalse = () => {
          setCategoryModals(false);
     };
     const setHeaderNameToEdit = () => {
          setHeaderName('edit');
     };

     useEffect(() => {
          dispatch(fetchCategory());
     }, []);

     return (
          <>
               <CategoryPostModals
                    visible={categoryModals}
                    setModalsFalse={setModalsFalse}
                    headerName={headerName}
                    editCategoryData={editCategoryData}
               />
               {
                    isLoading ? (
                         <LoadingComponent/>
                    ) : (
                         <div className="container flex justify-center ml-10  flex-col">
                    <div className="flex justify-between">
                         <h2 className="text-2xl font-extrabold contain my-4">
                              Category List
                         </h2>
                         <button
                              onClick={() => {
                                   setModalstrue()
                                   setHeaderName('add')
                              }}
                              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
                         >
                              + Create new Category
                         </button>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                   <tr>
                                        <th scope="col" className="px-6 py-3">
                                             No
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             Created At
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             Updated At
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             Action
                                        </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {categories.map((categories, index) => {
                                        return (
                                             <CategoryTableRow
                                                  key={categories.id}
                                                  categories={categories}
                                                  index={index}
                                                  setHeaderNameToEdit={setHeaderNameToEdit}
                                                  setModalstrue={setModalstrue}
                                                  editCategoryHandler={editCategoryHandler}

                                             />
                                        );
                                   })}
                              </tbody>
                         </table>
                    </div>
               </div>
                    )
               }
               
          </>
     );
}
