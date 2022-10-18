import AnchorLink from "react-anchor-link-smooth-scroll"
import { AddAPhoto } from '@material-ui/icons';
import React, { Component } from 'react'
import styled from 'styled-components'
import "./Editprofile.css"
import Basic from './Basic';
import Others from './Others';
import Privacy from './Privacy';

const Button=styled.button`

background-color:light-gray;
font-size:20px;
margin:35px;
color:black;
border:1px;
padding:10px 100px 10px 100px;
border-radius:42px;
cursor:pointer;
box-shadow:0px 2px 2px lightgray;
transition: ease background-color 400ms;
&:hover{
  background-color:black;
  color:white;
  text-align: center;
    justify-content: center;
}
`
const Span=styled.span`
font-size:25px;
font-family: Arial, Helvetica, sans-serif;

`

export class Editprofile extends Component {
  state={
    profileImg:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  render() {
    const {profileImg} = this.state
    return (
      <div>
      
      <div className='heading'>Edit Profile</div>
        <div className='img-holder'>
          <img src={profileImg} alt="" id="img" className='img'/>
        </div>
       <div> <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
      
      <div className="label">
          <label className="image-upload" htmlFor="input">
          <AddAPhoto/>
						<i className="material-icons"> Upload Profile Pic</i>
        
					</label>
          </div>
          </div>
          <div>
          <AnchorLink href="#Basic"><Button>
          Basic Details
          </Button></AnchorLink>
          <AnchorLink href="#Others"><Button>
           Other Details
          </Button></AnchorLink>
          <AnchorLink href="#Privacy"><Button>
          Privacy Settings
          </Button></AnchorLink>
<Span><div id="Basic"><Basic/></div>
     <div id="Others"><Others/></div>
      <div id="Privacy"><Privacy/></div></Span>
      </div>
      
      </div>
    )
  }
}

export default Editprofile
