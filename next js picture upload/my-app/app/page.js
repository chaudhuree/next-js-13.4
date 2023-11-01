"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function Home() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [submitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          image: image,
        }),
      });

      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
    
  };
  return (
    <main className="flex items-center justify-center w-full h-screen bg-slate-200">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">User Name</label>
            <input onChange={(e)=>setName(e.target.value)} name="name" id="name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Upload Image</label>
            <CldUploadWidget
           uploadPreset="envelope"
           options={{
             sources: ["local"],
             multiple: false,
             maxFiles: 5,
           }}
           onUpload={(result, widget) => {
             console.log(result.info.secure_url);
             if (result.event !== "success") return;
             setImage(result.info.secure_url);
            
           }}
         >
           {({ open }) => (
             <button type='button' className="w-full  px-4 py-2 rounded-md flex justify-center bg-blue-400 hover:bg-blue-600" onClick={() => open()}>
               Upload
             </button>
           )}
         </CldUploadWidget>
          </div>
          <button disabled={submitting} type="submit" className="form-submit-btn" style={{width:"100%"}}>
          {submitting ? `submitting...` : "Submit"}
          </button>
        </form>

      </div>
    </main>
  );
}
