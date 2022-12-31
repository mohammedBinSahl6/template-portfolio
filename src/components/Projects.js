import { useState } from "react"
import pr1 from '../imgs/pro-1.jpg'
import pr2 from '../imgs/pro-2.jpg'
import pr3 from '../imgs/pro-3.jpg'
import pr4 from '../imgs/pro-4.jpg'
const projects = [
    {
        title : 'PROJECT 1',
        p : 'my project is a ui design',
        img : pr1,
        id : 1
    },
    {
        title : 'PROJECT 2',
        p : 'my project is a ui design',
        img : pr2,
        id : 2
    },
    {
        title : 'PROJECT 3',
        p : 'my project is a ui design',
        img : pr3,
        id : 3
    },
    {
        title : 'PROJECT 4',
        p : 'my project is a ui design',
        img : pr4,
        id : 4
    },
]


export default function Projects(){
   
    const [liked, setLiked] = useState(false)

    const lke = ()=> setLiked(true)
   
    return(
        <div className="start">
            <div className="row p-5">
                <h1 className="heading text-center">My Projects</h1>

            </div>

            <div className="row p-3">
                {projects.map((p)=>(
                     <div key={p.id} className='col-sm-6 p-3'>
                     <div className='project '>
                         <img className='project-img' src={p.img} />
                         <div className='project-info p-3'>
                             <h3 className='project-title'>{p.title}</h3>
                             <p>{p.p}</p>
                             <i  className={liked ? "bi bi-heart-fill liked" :"bi bi-heart-fill"}  onClick={lke}></i>
                         </div>
                     </div>
                 </div>
                ))}
            </div>
        </div>
    )
}