import Link from "next/link";
import Prisma from "@/lib/db";

export default async function PostPage() {
    const posts = await Prisma.post.findMany()
    return (
        <ul className="flex justify-center justify-items-center">
            {posts.map((post) => (
                <Link href={`/posts/${post.slug}`}>
                    <li key={post.id} className=" flex justify-center justify-items-center p-3 m-3 w-1/12 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
                        {post.title}
                    </li>
                </Link>
            ))}
        </ul>
    );
}


export async function postCount(): Promise<number>{
    return await Prisma.post.count();
}









// import Link from "next/link";
// import Prisma from "@/lib/db";

// export default async function PostPage() {
//     const posts = await Prisma.post.findMany()
//     return (
//         <ul className="flex justify-center justify-items-center">
//             {posts.map((post) => (
//                 <Link href={`/posts/${post.slug}`}>
//                     <li key={post.id} className=" flex justify-center justify-items-center p-3 m-3 w-1/12 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//                         {post.title}
//                     </li>
//                 </Link>
//             ))}
//         </ul>
//     );
// }


// export async function postCount(): Promise<number>{
//     return await Prisma.post.count();
// }





// import Link from "next/link";
// import Prisma from "@/lib/db";

// export default async function PostPage() {
//     const posts = await Prisma.post.findMany()
//     // const posts = await Prisma.post.findMany({
//     //     // where: {
//     //     //   title:{
//     //     //     endsWith: '3'
//     //     //     },
//     //     // },
//     //     select:{ // it pass only selected parameter
//     //       id:true,
//     //       title:true,
//     //       slug:true
//     //     },
//     //     take: 2, //it is used in pagenation
//     //     skip: 1, //it is skip upto n object

//     // });

//     return (
//         <ul className="flex justify-center justify-items-center">
//             {posts.map((post) => (
//                 <Link href={`/posts/${post.slug}`}>
//                     <li key={post.id} className=" flex justify-center justify-items-center p-3 m-3 w-1/12 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//                         {post.title}
//                     </li>
//                 </Link>
//             ))}
//         </ul>
//     );
// }


// export async function postCount(): Promise<number>{
//     return await Prisma.post.count();
// }









// import Link from "next/link";
// import Prisma from "@/lib/db";

// export default async function PostPage() {
//     const posts = await Prisma.post.findMany();

//     return (
//         <ul className="flex justify-center justify-items-center">
//             {posts.map((post) => (
//                 <li key={post.id} className="p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//                     <Link href={`/posts/${post.id}`}>
//                         {post.title}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }















// import Link from "next/link";
// //import { Post } from "@/lib/Datetype";
// import Prisma from "@/lib/db";

// export default async function PostPage() {
//     const posts = await Prisma.post.findMany();

//     return (
//         <ul className="flex justify-center justify-items-center">
//             {posts.map((post) => (
//                 <li key={post.id} className="p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//                     <PostId post={post} />
//                 </li>
//             ))}
//         </ul>
//     );
// }



// function PostId({ post }: { post: {
//     id: string;
//     title: string;
//     content: string;
//     published: boolean | null;
//     updatedAt: Date;
//     createdAt: Date;
// } }) {
//     return (
//         <>
//             <h3 className="flex justify-center font-bold">
//                 <Link href={`/posts/${post.id}`}>
//                     {post.title}
//                 </Link>
//             </h3>
//             <p className="h-auto flex overflow-auto hover:overflow-scroll justify-self-center font-medium">
//                 {post.content}
//             </p>
//         </>
//     );
// }















// import Link from "next/link";
// import { Post } from "@/lib/Datetype";
// import Prisma from "@/lib/db";

// export default async function PostPage(){
//     const posts = await Prisma.post.findMany();

//     return (
//         <ul className=" flex justify-center justify-items-center">
//             {
//                 posts.map((post)=>{
//                     return(
//                     <li key={post.id} className=" p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//                         <PostId post={post}/>
//                     </li>)
//                 }) 
//             }
//         </ul>
//     )
// }


// function PostId({ post }: { post: Post }){
//     return(
//         <>
//         <h3 className=" flex justify-center font-bold">
//             <Link href={`/posts/${post.id}`}>{post.title}
//             </Link>
//         </h3>
//         <p className="h-auto flex overflow-auto hover:overflow-scroll  justify-self-center font-medium ">
//         {post.content}</p> 
//         </>
//     )
// }