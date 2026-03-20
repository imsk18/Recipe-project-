import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { nanoid } from "nanoid";
import { RecipeContext } from '../context/RecipeContext';

const CreateRecipe = () => {

  const {Data,setData} = useContext(RecipeContext)

  const {register,handleSubmit,reset} = useForm()


  const submitHandler = (recipe)=>{
   
    recipe.id = nanoid() ; //random id generate

    // console.log(recipe);

    // const copyData =  [...data]
    // copyData.push(recipe)
    // setdata(copyData)


    setData([...Data,recipe]) ;
    
    


    reset();


    

  }

 
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input {...register("title")}type="text" 
      placeholder='enter recipe Title'
      />
      <br />
      <br />
      <input {...register("image")}
      type="url" 
      placeholder='enter img url'
      />
       <br />
      <br />

      <textarea 
      {...register("ingredients")}
      placeholder='enter description'


      ></textarea>
       <br />
      <br />

      <textarea 
      {...register("instruction")}
      placeholder='write instruction'


      ></textarea>
       <br />
      <br />

      <select 
      {...register("category")}
      >
        <option value="cat 1">category 1</option>
        <option value="cat 2">category 2</option>
        <option value="cat 3">category 3</option>
      </select>
       <br />
      <br />

      <button>create recipe</button>
      




    </form>
  )
}

export default CreateRecipe