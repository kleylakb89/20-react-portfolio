import React from 'react'

const styles = {
  card: {
    width: '50rem',
    margin: '50px auto'
  },
}

function Project(props) {
  return (
    <div>
      {props.projects.map((single) => {
        return (
          <div className='card' style={styles.card} key={single.title}>
            <img src={single.image} alt='Landing Page' className='card-img-top'></img>
            <div className='card-body text-center'>
              <a href={single.deployed} className='card-title'><h4>{single.title}</h4></a>
              <a href={single.github} className='card-text'><img src='images/github-logo.png' alt='github link' className='col-1'></img></a>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Project;