import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Card_info() {
  const { cardId } = useParams();//id ta ekhane asbe... cardID e store hobe...
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("https://jsonfakery.com/blogs")
      .then(res => res.json())
      .then(data => setBlog(data.find(item => item.id == cardId)));//cardId ta element.id or item.id er sathe match korle blog e data jabe...
  }, [cardId]);

  if (!blog) return <p className="text-5xl text-center p-5">Loading...</p>; //blog na paoah porjonto loading show korbe...

  return (
    <>
    <div className="text-center">
      <div className="flex justify-center">
        <img className="h-180" src={blog.featured_image}/>
      </div>
      <div className="text-2xl">
        <h1 className="text-4xl py-5">{blog.title}</h1>
        
        <p className="px-3">{blog.summary}</p>
        <br></br>
        <div className="px-3">{blog.main_content}</div>
      </div>
    </div>
    </>
  );
}
