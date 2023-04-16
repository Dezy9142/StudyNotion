import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading ,setLoading]=useState(false);
  // post is array of data that we fetch from api ans set at starting empty
  const [post,setPost]=useState([]); 

  async function fetchProductData(){
    setLoading(true);
    try{
       const res=await fetch(API_URL);
       console.log(API_URL);
       const data=await res.json();
       setPost(data);

    } 
    catch(err){
      console.log("error aa gya ji in api call");
      setPost([]);
    }
    setLoading(false);
  }

  // For calling fetchApi Function we use useEffect for find data comes in first render 
  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div>
       {
        loading ?(<Spinner/>):
        (
          post.length>0 ?
          (
            <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
             {
               post.map((post)=>(<Product key={post.id} post={post}/>))
             }
            </div>
          ):
          (
            <div className="flex justify-center items-center"><p>No Data Found</p></div>
          )
        )
       }
    </div>
  );
};

export default Home;
