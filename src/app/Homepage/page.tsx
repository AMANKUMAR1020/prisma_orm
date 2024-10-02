import Link from "next/link"
import PostPage from "../posts/page"
import { postCount } from "../posts/page";

export default async function HomePage(){

  return (
    <>
    <header className=" w-auto max-h-max bg-gradient-to-l from-blue-400 to-purple-400 pt-10">
      <main className=" flex justify-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Welcome to My blog </main>
      <div className=" flex justify-center p-3 m-3 text-left text-2xl font-semibold text-blue-900">Total number of blog is {postCount()}</div>
    </header>

    <Link href="/posts" className=" flex justify-center text-xl text-blue-400 hover:bg-blue-600 width-auto">go to posts</Link>
    
    <PostPage/>
    </>
  )
}