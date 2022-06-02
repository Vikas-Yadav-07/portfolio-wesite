import React from 'react'
import Project from './Project'


function Projects() {
  return (
    <div id='Portfolio' className='snap-start'>
   
        <Project 
        title = {'Pixel Movies'}
        discription={'Pixel Movie fetches the TMDB Movie Database Api And Shows information About trending Movies and Tv Shows !'}
        tech = {['React' , 'React-Router-Dom' , 'TMDB Api' , 'Axios' ]}
        link = {'https://pixelmovies.netlify.app/'}
        github = {'https://github.com/Vikas-Yadav-07/Pixel-Moveis'}
        img = {'/Projects image/PixelMovies.gif'}
        />
        <Project 
        title = {'Redux Store'}
        discription={'Redux Store is a Demo ecommerce app which uses Fackstore api for the products api is fatched using Redux Thunk !'}
        tech = {['React', 'Fakestore Api' , 'Redux' , 'Redux thunk' , 'tailwind css' ]}
        link = {'https://reduxthunkstore.netlify.app/'}
        github = {'https://github.com/Vikas-Yadav-07/ReduxStore'}
        img = {'/Projects image/ReduxStore.gif'}
        />
        <Project 
        title = {'Tesla Clone'}
        discription={'This was my one of the first project that i have built using React. Here i tried to clone the Home Page of the tesla.com website  !'}
        tech = {['React', 'Styled Components' ,   'React Awsome Reviel' ]}
        link = {'https://fascinating-naiad-e0befd.netlify.app/'}
        github = {'https://github.com/Vikas-Yadav-07/tesla-clone'}
        img = {'/Projects image/TeslaClone.gif'}
        />

  
    </div>
  )
}

export default Projects