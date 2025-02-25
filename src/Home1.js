import React from 'react';
const Home1 = () =>{
return(
    <div id ='div5'>
        <body id='bdy'>
        <details><summary>Menu</summary>
            <header><a href='home.html'><h5>Main</h5></a>
           <a href='#'><h5>Dashboard</h5></a>
           <a href='#'><h5>Note</h5></a>
           <a href='#'><h5>Classes</h5> </a>
           </header><br/><br/>
           <footer><a href='#'><h5>Support</h5></a>
             <a href='#'><h5>Feedback</h5></a>
           <a href='#'><h5>Having issues</h5></a>
           </footer>
        </details>
       <p id='wel'>Welcome back,{}</p><br/>
            <div className='div7'>
                <img id='img1' src='loading' alt='John'/>
                <img id='img1'  src='loading' alt='John'/>
                <img id='img1'  src='loading' alt='John'/><br/><br/><br/><br/>
                <p>Recent</p>
                </div>      
      
       </body>
    </div>
)
}
export default Home1;