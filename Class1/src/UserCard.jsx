function User(){
  return ( 
  <div className="card-container">
  <span className="pro online">ONLINE</span>
  <img src="images/gokul.jpg"className="img" alt="user" />
  <h3>GOKUL B</h3>
  <h3>Karur</h3>
  <p>Front end Developer</p>
  <div className="buttons">
    <button className="primary">Messages</button>
    <button className="primary outline">Following</button>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI/UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>
  </div>
  )
}
export const UserCard = () => {
  return <User /> 
}

export default UserCard