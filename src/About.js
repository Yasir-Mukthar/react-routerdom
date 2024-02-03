import { useLoaderData } from "react-router-dom"
export default function About() {
  const data = useLoaderData();

  return (
    <div>
      <img 
      src={data.avatar_url}
      alt="avatar"
      width="200"
      height="200"
      style={{borderRadius:"50%"}}
      />
      <p>My name is Yasir Mukthar</p>
      <p>Github followers: {data.followers}</p>
    </div>

      
  )
}

export const githubProfile=async () =>{
   const response=await fetch("https://api.github.com/users/Yasir-Mukthar");

   return response.json();
  
}
