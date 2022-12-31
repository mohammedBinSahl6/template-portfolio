import { useState } from 'react'
import avatar from '../imgs/avatar.webp'
import pro1 from '../imgs/pro-1.jpg'
import pro2 from '../imgs/pro-2.jpg'
import pro4 from '../imgs/pro-3.jpg'
import pro3 from '../imgs/pro-4.jpg'
export default function Home(){
   const [liked, setLiked] = useState(false)
   const [liked2, setLiked2] = useState(false)
   const [liked3, setLiked3] = useState(false)
   const [liked4, setLiked4] = useState(false)

   const lke = ()=> setLiked(true)
   const lke2 = ()=> setLiked2(true)
   const lke3 = ()=> setLiked3(true)
   const lke4 = ()=> setLiked4(true)
   
   
    return(
        <div>

            <div className="container-fluid start" id="land">
                <div className="row p-3">
                    <div className="avatar-holder">
                        <img className="avatar" src={avatar} />
                    </div>
                    <div className='row p-3'>
                        <h1 className='h1 name'>John Flake</h1>
                        <h2 className='job'>Front-End Developer</h2>
                        <p className='bio'>Junior Front-End Developer with a passion for creating innovative, user-friendly web applications. Experienced in HTML, CSS, JavaScript, and ReactJS. Skilled at delivering modern designs while optimizing performance and scalability. Driven to help teams succeed by leveraging problem solving strategies and communication skills.</p>

                    </div>
                </div>
            </div>
            <hr />

            <div className='container-fluid' id='projects'>
                <div className='row p-3 mt-5'>
                    <h1 className='text-center heading'>My Projects</h1>
                </div>
                <div className='row p-3'>
                    <div className='col-sm-6 p-3'>
                        <div className='project '>
                            <img className='project-img' src={pro1} />
                            <div className='project-info p-3'>
                                <h3 className='project-title'>Project 1</h3>
                                <p>This is some of my best work , UI Design</p>
                                <i className={liked ? "bi bi-heart-fill liked" :"bi bi-heart-fill"} onClick={lke}></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 p-3'>
                        <div className='project '>
                            <img className='project-img' src={pro2} />
                            <div className='project-info p-3'>
                                <h3 className='project-title'>Project 2</h3>
                                <p>This is some of my best work , UI Design</p>
                                <i  className={liked2 ? "bi bi-heart-fill liked" :"bi bi-heart-fill"} onClick={lke2}></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 p-3'>
                        <div className='project '>
                            <img className='project-img' src={pro3} />
                            <div className='project-info p-3'>
                                <h3 className='project-title'>Project 3</h3>
                                <p>This is some of my best work , UI Design</p>
                                <i  className={liked3 ? "bi bi-heart-fill liked" :"bi bi-heart-fill"} onClick={lke3}></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 p-3'>
                        <div className='project '>
                            <img className='project-img' src={pro4} />
                            <div className='project-info p-3'>
                                <h3 className='project-title'>Project 4</h3>
                                <p>This is some of my best work , UI Design</p>
                                <i  className={liked4 ? "bi bi-heart-fill liked" :"bi bi-heart-fill"}  onClick={lke4}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<hr />

            <div className='container' id='contact'>
                <div className='row p-3'>
                    <h1 className='text-center heading'>Contact</h1>
                </div>
                <div className='p-3 contact-body'>
                    <form>
                        <div className='mt-3 mb-3'>
                            <label htmlFor='name' className='form-label'>Your Name</label>
                            <input className='form-control' id='name' required />
                        </div>
                        <div className='mt-3 mb-3'>
                            <label htmlFor='name' className='form-label'>Email Address</label>
                            <input className='form-control' id='name' required />
                        </div>
                        <div className='mt-3 mb-3'>
                            <label htmlFor='name' className='form-label'>Message</label>
                            <textarea className='form-control' id='name' required rows='5'/>
                        </div>
                        <button className='btn submit-btn mt-3'>Send</button>
                    </form>
                </div>
            </div>
















        </div>
    )
}