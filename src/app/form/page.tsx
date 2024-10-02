import { createPost } from "../actions/actions";

export default function Form() {

  return (
    <form
    action={createPost}
      className="flex flex-col place-content-center w-80 h-64 bg-gradient-to-l from-blue-400 to-purple-400 p-10 m-5 rounded-md"
    >
      <label htmlFor="title" className="text-blue-800 flex justify-start pl-1 text-xl font-medium">
        Title
      </label>
      <input
        type="text"
        placeholder="title"
        className="p-1 m-1 h-9 w-5/4 rounded-md text-slate-700"
        name="title"
      />
      <label htmlFor="content" className="text-blue-800 flex justify-start pl-1 text-xl font-medium">
        Content
      </label>
      <textarea
        placeholder="content"
        rows={5}
        className="p-1 m-1 h-32 w-5/4 rounded-md overflow-scroll text-slate-700"
        name="content"
      ></textarea>

      <button type="submit" className="bg-blue-500 py-2 text-white rounded-sm">
        Submit
      </button>
    </form>
  );
}










// //import React, { useState } from "react";
// import { createPost } from "../actions/actions";

// export default function Form() {
// //   const [title, setTitle] = useState("");
// //   const [content, setContent] = useState("");

// //   const handleSubmit = (e:any) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("content", content);
// //     createPost(formData);
// //   };

//   return (
//     <form
//       action={createPost}
//       className="flex flex-col place-content-center w-80 h-64 bg-gradient-to-l from-blue-400 to-purple-400 p-10 m-5 rounded-md"
//     >
//       <label htmlFor="title" className="text-blue-800 flex justify-start pl-1 text-xl font-medium">
//         Title
//       </label>
//       <input
//         type="text"
//         placeholder="title"
//         className="p-1 m-1 h-9 w-5/4 rounded-md"
//         name="title"
//         // value={title}
//         // onChange={(e) => setTitle(e.target.value)}
//       />
//       <label htmlFor="content" className="text-blue-800 flex justify-start pl-1 text-xl font-medium">
//         Content
//       </label>
//       <textarea
//         placeholder="content"
//         rows={5}
//         className="p-1 m-1 h-32 w-5/4 rounded-md overflow-scroll"
//         name="content"
//         // value={content}
//         // onChange={(e) => setContent(e.target.value)}
//       ></textarea>

//       <button className="bg-blue-500 py-2 text-white rounded-sm" 
//       //type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }















// import React, { useState } from "react";
// import { createPost } from "../actions/actions";

// export default function Form() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     createPost(formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col place-content-center w-80 h-64 bg-gradient-to-l from-blue-400 to-purple-400 p-10 m-5 rounded-md"
//     >
//       <label htmlFor="title" className="text-blue-800 flex justify-start pl-1 text-xl font-medium">
//         Title
//       </label>
//       <input
//         type="text"
//         placeholder="title"
//         className="p-1 m-1 h-9 w-5/4 rounded-md"
//         name="title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <label htmlFor="content" className="text-blue-800 flex justify-start pl-1 text-xl font-medium">
//         Content
//       </label>
//       <textarea
//         placeholder="content"
//         rows={5}
//         className="p-1 m-1 h-32 w-5/4 rounded-md overflow-scroll"
//         name="content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       ></textarea>

//       <button className="bg-blue-500 py-2 text-white rounded-sm" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }
