import Prisma from "@/lib/db";

export default async function PostId({ params }: { params: { slug: string } }) {
    const post = await Prisma.post.findUnique({
    where : {
      slug: params.slug
    }  
    })

  return (
    <li className="p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
      <h3 className="flex justify-center font-bold">{post?.title}</h3>
      <p className="h-auto flex overflow-auto hover:overflow-scroll justify-self-center font-medium">
        {post?.content}
      </p>
    </li>
  );
}












// import Prisma from "@/lib/db";

// export default async function PostId({ params }: { params: { title: string } }) {
//     const post = await Prisma.post.findUnique({
//         // where: {
//         //   title: params.title,
//         // },

//         // where: {
//         //   title: {
//         //     endsWith:"Post"
//         //   },
//         // },
        
//         // orderBy:{
//         //   createAt: "desc"
//         // },
//         select:{
//           id:true,
//           title:true,
//           //slug:true;
//         }
//         take: 1, //it is used in pagenation
//         skip: 1, //it is skip upto n object
//       });        

//   return (
//     <li className="p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//       <h3 className="flex justify-center font-bold">{post?.title}</h3>
//       <p className="h-auto flex overflow-auto hover:overflow-scroll justify-self-center font-medium">
//         {post?.content}
//       </p>
//     </li>
//   );
// }















// import Prisma from "@/lib/db";

// export default async function PostId({ params }:{ params:String }) {
//     const post = await Prisma.post.findUnique({
//         where:{
//             slug: params.slug,
//         },
//     });

//     return (
//         <li className="p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//             <h3 className="flex justify-center font-bold">
//                 {post?.title}
//             </h3>
//             <p className="h-auto flex overflow-auto hover:overflow-scroll justify-self-center font-medium">
//                 {post?.content}
//             </p>
//         </li>
//     );
// }














// import Prisma from "@/lib/db";

// export default async function PostId({ params }:{ params:Number }) {
//     const post = await Prisma.post.findUnique({
//         where:{
//             id: Number(params.id),
//         },
//     })
//     return (
//         <li className="p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//             <h3 className="flex justify-center font-bold">
//                 {post?.title}
//             </h3>
//             <p className="h-auto flex overflow-auto hover:overflow-scroll justify-self-center font-medium">
//                 {post?.content}
//             </p>
//         </li>
//     );
// }












// import Prisma from "@/lib/db";

// export default async function PostId({ params }:{ params:Number }) {
//     const post = await Prisma.post.findUnique({
//         where:{
//             id: Number(params.id),
//         },
//     })
//     return (
//         <li className="p-3 m-3 w-80 h-auto border-solid border-x-2 border-purple-600 bg-purple-400 text-purple-950 rounded-xl">
//             <h3 className="flex justify-center font-bold">
//                 {post?.title}
//             </h3>
//             <p className="h-auto flex overflow-auto hover:overflow-scroll justify-self-center font-medium">
//                 {post?.content}
//             </p>
//         </li>
//     );
// }











// // function PostId({ post }: { post: Post }) {
//     function PostId({ post }: { post: {
//         id: string;
//         title: string;
//         content: string;
//         published: boolean | null;
//         updatedAt: Date;
//         createdAt: Date;
//     } }) {
//         return (
//             <>
//                 <h3 className="flex justify-center font-bold">
//                     <Link href={`/posts/${post.id}`}>
//                         {post.title}
//                     </Link>
//                 </h3>
//                 <p className="h-auto flex overflow-auto hover:overflow-scroll justify-self-center font-medium">
//                     {post.content}
//                 </p>
//             </>
//         );
//     }
    