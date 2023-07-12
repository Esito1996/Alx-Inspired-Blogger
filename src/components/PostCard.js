import { doc, deleteDoc} from "firebase/firestore";
import { auth,db } from "../firebase/config";

export const PostCard = ({post,toggle,setToggle}) => {
  //const navigate=useNavigate();
  const isAuth=JSON.parse(localStorage.getItem("isAuth"));

  const {id,title,description,author}=post;
  

  async function handleDelete(){
    const document=doc(db,"posts",id);
    await deleteDoc(document);
    setToggle(!toggle);
  }
  return (
    <div className="card">
      <div className="titleandescription">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
       </div>
     <div className="control">
     <div className="picandname">
       {  <img className="userpic"  src={author.photo} alt="userpic" /> }
       <span className="author">{author.name}</span>
     </div>
       {isAuth && (author.id === auth.currentUser.uid) && <span onClick={handleDelete} className="delete"><i className="bi bi-trash"></i> </span>}
      </div>
    </div>
  )
}
