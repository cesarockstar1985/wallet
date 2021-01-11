import React from "react";

const TransferList = ({ posts }) => (

   <table className="table">
      <tbody className="text-center">
         {posts.map(post => (
            <tr key={post.id}>
               <td>{post.id}</td>
               <td className="text-success">
                  {post.title}
               </td>
            </tr>
         ))}
      </tbody>
   </table>
);

export default TransferList;
