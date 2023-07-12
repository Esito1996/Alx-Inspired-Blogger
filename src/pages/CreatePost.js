import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { addDoc, collection} from "firebase/firestore";
import { db, auth } from "../firebase/config";


export const CreatePost = () => {
 const navigate=useNavigate();
 useTitle("Create Post");
  const postRef = collection(db, "posts");

  async function handleCreatePost(event){
    event.preventDefault();
    const document ={
      title:event.target.title.value,
      description:event.target.description.value,
      author:{
        name:auth.currentUser.displayName,
        id:auth.currentUser.uid,
        photo:auth.currentUser.photoURL
      }
    }
    await addDoc(postRef,document);
    navigate("/");
  }


  return (
    <section className="create">
      <div className="heading">
        <h1>Share Your Thoughts</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input type="text" className="title" name='title' placeholder='Title' maxLength={50} required />
        <textarea type="text" className='description' name="description" placeholder="Description" maxLength="600" required />
        <button type='submit' className="submit">Post</button>
      </form>
    </section>
  )
}
