import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


class PetList extends Component {
constructor(props) {
  super(props);

  this.state = {
    pets: props.pets
  }
}

render () {
  const petComponents = this.state.pets.map((pet, i) => {
  return (
    <div>
      <PetCard
      key={pet.id}
      index={i}
      onSelectPet={this.props.onSelectPet}
      pet={pet}
      // id={pet.id}
      // name={pet.name}
      // species={pet.about}
      // location={pet.location} />

      {...pet} />
      </div>
  );
});

return (
<div className="card-group">
  {petComponents}
</div>

)

}
}

// const PetList = (props) => {

// const petComponents = this.props.pets.map((pet, i) => {
//   return (
//     <div className="card-group">
//       <div>
//       <PetCard
//       index={i}
//       id={pet.id}
//       name={pet.name}
//       species={pet.about}
//       location={pet.location} />
//       </div>
//     </div>
//   )


// })
// }




PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
