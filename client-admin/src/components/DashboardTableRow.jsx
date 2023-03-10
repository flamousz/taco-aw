import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteFood } from "../stores/actions/foodAction";

export default function DashboardTableRow({
     food,
     index,
     setHeaderNameToEdit,
     setModalstrue,
     editFoodHandler,
}) {
     let dispatch = useDispatch();
     return (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td className="px-6 py-4">{index + 1}</td>
               <td className="px-6 py-4">{food.name}</td>
               <td className="px-6 py-4">{food.Category.name}</td>
               <td className="px-6 py-4">Rp. {food.price}</td>
               <td className="px-6 py-4">{food.User?.name}</td>
               <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
               >
                    <img
                         className="w-14 h-14 rounded-full"
                         src={food.imgUrl}
                         alt="Main Ingredient"
                    />
                    <div className="pl-3">
                         <div className="text-base font-semibold">
                              {food.Ingredients[0].name}
                         </div>
                         <div className="font-normal text-gray-500">
                              {food.name}
                         </div>
                    </div>
               </th>

               <td className="px-6 py-4">
                    <Link
                         to={`/ingredients/${food.id}`}
                         className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                         Ingredients
                    </Link>
               </td>
               <td className="px-6 py-4 ">
                    <a
                         href="#"
                         onClick={() => {
                              setModalstrue();
                              setHeaderNameToEdit();
                              editFoodHandler(food);
                         }}
                         className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
                    >
                         Edit
                    </a>
                    <a
                         href="#"
                         onClick={(e) => {
                              dispatch(deleteFood(food.id))
                                   .then((data) => {
                                        toast.success(`${data}`);
                                   })
                                   .catch((err) => {
                                        toast.error(`${err.message}`);
                                   });
                         }}
                         className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                         Delete
                    </a>
               </td>
          </tr>
     );
}
