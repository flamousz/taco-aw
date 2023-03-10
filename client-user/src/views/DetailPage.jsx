import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDetailFoods } from "../stores/actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import TesLoading from "../components/TesLoading";

const DetailPage = () => {
	const { id } = useParams();
	let food = useSelector((state) => state.foodReducer.food);
	const { isLoading } = useSelector((state) => state.loadingReducer);
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDetailFoods(id));
	}, [id]);

	return (
		<>
			{isLoading ? (
				<TesLoading />
			) : (
				<div className=' py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 bg-white'>
					<div className='container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
						<div className='mb-16 lg:mt-32 xl:mt-40 xl:mr-12 text-black'>
							<h1 className='text-2xl font-extrabold mb-5'>
								{food.name}
							</h1>
							<p className='p-large mb-8'>{food.description}</p>
						</div>
						<div className='xl:text-right'>
							<img
								className='inline'
								src={food.imgUrl}
								alt='taco awww'
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailPage;
