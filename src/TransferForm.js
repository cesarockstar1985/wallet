import React from "react";

const TransferForm = (props) => (
   <div className="row d-flex justify-content-center">
      <div className="col-md-6">

         <form
            className="form justify-content-center"
            onSubmit={props.onSubmit}
         >
            <div className="form-goup mb-2">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="title"
                  value={props.form.title}
                  onChange={props.onChange}
               />
            </div>
            <div className="form-group mb-2">
               <textarea
                  type="text"
                  placeholder="Body"
                  className="form-control"
                  name="body"
                  value={props.form.body}
                  onChange={props.onChange}
               />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
               Add
            </button>
         </form>
      </div>
   </div>
);

export default TransferForm;
