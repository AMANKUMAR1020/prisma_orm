"use server"

import Prisma from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    await Prisma.post.create({
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "_")
                .toLowerCase(),
            content: formData.get("content") as string
        },
    });
    revalidatePath('/posts')
}

export async function editPost(formData: FormData, id: string) {
    await Prisma.post.update({
        where: {id},
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "_")
                .toLowerCase(),
            content: formData.get("content") as string
        },
    });
}

export async function deletePost(id: string) {
    await Prisma.post.delete({where: {id} });
}








// "use server"

// import Prisma from "@/lib/db"

// export async function createPost(){
//     await Prisma.post.create({
//         data:{
//             title:formData.get("title") as string
//             title:(formData.get("title") as string)
//             .replace(/\s+/g,"-")
//             .toLowerCase(),
//         content: FormData.get("content") as string
//         },
//     });
// }