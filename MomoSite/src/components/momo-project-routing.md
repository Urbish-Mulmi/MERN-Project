# for api handling:fetch and access stuffs
import axios from "axios"

# create a function to do fetchapi here api is to get recipe so make a funciton called getRecipes using api further

const fetchRecipes = async()=>{
  # axios.get("url")
  axios.get("("https://dummyjson.com/recipes?limit=10");")
  const res = await axios.get("https://dummyjson.com/recipes?limit=10");    

  api may break, api server may crash at times so use try catch        

    try {
      const response = await axios.get("https://dummyjson.com/recipes?limit=10");
      console.log(response)
      console.log(response.data.objname from api)
      }
    catch (error) { console.log(error);}


<!-- to  make the api call function only once or when page loads to aoid loop of calls use, useeffect hook -->
  useEffect(() => {
    getRecipes();   
  }, [])
  
  <!-- now to show api response in ui not in console -->
  <!-- implement usestate bcoz we need state and setstate to append ui -->
  <!-- use below code as a refernce: check length of responses in a state ternary operator used here, then use .map to return elements and make it viewable in ui  -->

return (
        <div className="w-full mx-auto py-30  p-20">
      {recipes.length > 0 ? (
        <div className='flex flex-wrap justify-center'>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-4">            
              <div className="bg-white w-100 h-100 shadow-lg rounded-xl p-4 text-center">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-70 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-3">{recipe.name}</h2>
                <h3 className="text-orange-700 text-2xl font-bold">
                  Rs. {recipe.caloriesPerServing}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">Loading Recipes...</div>
      )}
    </div>
  )


  <!-- now to enable dynamic routing such that product details opens for each product clicked -->
  <!--implement useNavigate hook  -->

  
  <!-- dynamic routing using onclick function and usenavigate -->

define routie in approutes:
<Route path='/product-details/:id' element= {<ProductDetails />}/>


then,

  const navigate = useNavigate();


  return (
        <div className="w-full mx-auto py-30  p-20">
      {recipes.length > 0 ? (
        <div className='flex flex-wrap justify-center'>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-4"
              <!-- usenavigate allows passing states as well and key name is state where we can place state which has been declared using usestate  -->
              onClick={()=>{navigate(`/product-details/${recipe.id}`, {state:recipe})}}>            
              <div className="bg-white w-100 h-100 shadow-lg rounded-xl p-4 text-center">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-70 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-3">{recipe.name}</h2>
                <h3 className="text-orange-700 text-2xl font-bold">
                  Rs. {recipe.caloriesPerServing}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">Loading Recipes...</div>
      )}
    </div>
  )

  <!-- new hooks introduced -->
  useNavigate, useLocaion

  <!-- new library introduced -->
  carousel,slick
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css"; 
    import Slider from "react-slick";