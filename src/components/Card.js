import React from 'react';

const Card = ({ name, email, id }) => {
  console.log("navigator===========>>",navigator?.serviceWorker)
  if('serviceWorker' in navigator) {
		navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`).then(function(register){
			console.log("worked", register);
		}).catch(function(err){
			console.log("error!")
		});
	}
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;