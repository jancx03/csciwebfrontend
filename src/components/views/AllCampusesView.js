import { useState } from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses, addCampus, deleteCampus }) => {
  const [ campusName, setCampusName ] = useState('')
  const [ descriptionName, setDescriptionName ] = useState('')
  const [ imgUrlName, setImgUrlName ] = useState('')
  const [ addressName, setAddressName ] = useState('')


  const campuses = () => {
    
    if (!allCampuses.length) {
      return <div>There are no campuses.</div>;
    } else {
      return allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1 style={{ display: 'inline-block', marginRight: '.5rem' }}>{campus.name}</h1>
          </Link>
          <button 
            style={{ padding: '.2rem .5rem' }}
            onClick={() => deleteCampus(campus.id)} >
              X
          </button>
          <img src={campus.imageUrl} width="400px" style={{ display: 'block' }} />
        </div>
      ))
    }
  }

  const handleAddCampus = (e) => {
    e.preventDefault();
    const camp = {
      name: campusName, 
      // id: v4(), 
      description: descriptionName,
      address: addressName,
      // imageUrl: imgUrlName,

      students: []
    }
    
    if(imgUrlName !== ''){
      camp.imageUrl = imgUrlName
    }
    addCampus(camp)

  }

  return (
    <div>
      <div>
        {campuses()}
      </div>

      <h3>Add new campus</h3>
      <form onSubmit={handleAddCampus}>
        <label>Name</label>
        <input type="text" required value={campusName} onChange={(e) => setCampusName(e.target.value)} />
        <label>Description</label>
        <input type="text" required value={descriptionName} onChange={(e) => setDescriptionName(e.target.value)} />
        <label>Address</label>
        <input type="text" required value={addressName} onChange={(e) => setAddressName(e.target.value)} />
        <label>Image URL</label>
        <input type="text" value={(imgUrlName)} onChange={(e) => setImgUrlName(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  addCampus: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired
};

export default AllCampusesView;