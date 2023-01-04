import logo from './logo.svg';
import './onepage.css';

function App() {
  return (
  <> 
  <nav classNameName="navbar navbar-light bg-light">
  <a className="navbar-brand">
    <img src="onepageimages/campbell-3ZUsNJhi_Ik-unsplash.jpg" width="30" height="30" className="d-inline-block align-top" alt=" companylogo"/>
    Cars - Buy the best
  </a>
  <div>
  <a classNameName="navbar-brand">
  <img src="onepageimages/sa.jpg" width="20" height="20" className="d-inline-block align-top" alt="South African flag"/>
  </a>
  
  <a classNameName="navbar-brand">
  <img src="onepageimages/gh.png" width="20" height="20" className="d-inline-block align-top" alt="Ghana flag"/>
  </a>
  <a classNameName="navbar-brand">
  <img src="onepageimages/naija.jpg" width="20" height="20" className="d-inline-block align-top" alt="Nigerian flag"/>
  </a>
  </div>
  <div>
  	<a>ABOUT US</a>
  </div>
</nav>


<div className="container container1">
	<div className="row homepageimage">
		<div className="col-md-12 mainim">
			<div className="mainimage">
			<img className="maini" src="onepageimages/obi-pixel6propix-aZKJEvydrNM-unsplash.jpg" alt=""/>
		    </div>
			
		</div>		
	</div>

	<div className="row cartypes">
		<div className="col-md-12">
			<h3 styleProperty="text-align: center" >Car Types</h3>
		</div>
    </div>
    	

	
	<div className="row row2images"> 
		<div className="col-md-3">
			<div className="Image1">
			<img className="Image1" src="onepageimages/prashob-s-c6hHuDYA0rs-unsplash.jpg" alt="SUV" style={{width:'100% ', height:'300px', padding:'20px'}} />
        <div className="caption">
            <h3>Crosscountry</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
		</div>
    <br/>

		<div className="col-md-3">
			<div className="Image12">
			<img className="Image-12" src="onepageimages/adam-niescioruk-qKNbsUi1jYs-unsplash.jpg" alt="car" style={{width:'100% ', height:'300px',  padding:'20px'}}/>
        <div className="caption">
            <h3>Cruiser</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
		</div>

		<div className="col-md-3">
			<div className="Image1">
			<img className="Image1" src="onepageimages/andre-tan-u0SvvBR_jlw-unsplash.jpg" alt="redcar" style={{width:'100% ', height:'300px',  padding:'20px'}}/>
        <div className="caption">
            <h3>Crazy</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
		</div>

		<div className="col-md-3">
			<div className="Image1">
			<img className="Image1" src="onepageimages/dillon-kydd-D5wFTfv6Emc-unsplash.jpg" alt="Saloon" style={{width:'100% ', height:'300px',  padding:'20px'}}/>
        <div className="caption">
            <h3>Comfort</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
		</div>
		</div>		
	</div>
	
</div>
</>
  );
}

export default App;
