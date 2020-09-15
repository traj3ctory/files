import React, { Component } from 'react';
import {withContext} from '../../common/context';
import { HTTPURL } from '../../common/global_constant';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...this.props, 
            name: ''
        }
    }

     editp() {
        // Make Form Editable
        const edit = document.querySelector('#edit');
        let input = document.getElementsByTagName('input');

//  edit(){
//         // Make Form Editable
//         let edit = document.querySelector('#edit');
//         let input = document.getElementsByTagName('input');

        for (let d = input.length - 1; d >= 0; d--) {
            edit.addEventListener("click", function (e) {
                input[d].removeAttribute("disabled");
            });
        };
    }
    
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

    handleSubmit = async e => {
        e.preventDefault()

        const headers = new Headers();
        headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
        let form = new FormData(document.getElementById("profileform"));


        fetch(HTTPURL + 'user/updateprofile', {
            method: 'POST',
            body: form,
            headers: headers
        })
        .then(response => response.json())
        .then(json => {
        console.log(json);
        return json;
        });

        console.log('Profile Updated!')
    }

   render() {
    return (
        <div className="container mx-auto">
        {this.props.profile.map(profile => 
            <div className="row mt-4">

                <div className="col-md-8 mb-3" id="profile">

                    <form id="profileform" onSubmit={this.handleSubmit}>
                        <div className="card">
                            <div className="card-header bg-medium font-weight-bold text-dark">
                                Profile Information
                <span className="float-right"  id='edit' style={{ cursor: 'pointer' }} onClick={this.editp}><i className="fas fa-pen-square fa-2x"></i>
                                </span>
                            </div>
                            <div className="card-body">
                                {this.props.profile.map(profile => <p>{profile.email}</p>)}

                                <div className="row">

                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Name</label>
                                            <input type="text" className="form-control form-control-sm" name="name"
                                                id="name" value={profile.fullname} placeholder="Name" disabled autoComplete="name" onChange={this.handleInputChange}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Email</label>
                                            <input type="text" className="form-control form-control-sm" name="email"
                                                id="email" value={profile.email} placeholder="johndoe@mail.com" disabled autoComplete="email" onChange={this.handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Phone-number</label>
                                            <input type="text" className="form-control form-control-sm" name="telephone"
                                                id="telephone" value={profile.telephone} placeholder="090 ......." disabled autoComplete="tel" onChange={this.handleInputChange}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Company&nbsp;Name</label>
                                            <input type="text" className="form-control form-control-sm" name="name"
                                                id="name" value="ghs" placeholder="john & Sons"  autoComplete="name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Company&nbsp;Address</label>
                                            <input type="text" className="form-control form-control-sm" name=""
                                                id="" value="" placeholder="lorem lorem lorem" disabled autoComplete="name" />
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Name</label>
                                            <input type="file" className="file form-control-sm" name=""
                                                id="" value="" placeholder=""/>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="float-right">

                                    <button type="submit" className="btn btn-sm btn-primary px-3">
                                        <i className="fas fa-folder-open pr-2"></i>
                        Save
                    </button>
                                
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-md-4 text-center" id='profilePix'>
                    <div className="card">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <img src="https://miratechnologiesng.com/img/icons/miraicon.png"
                                alt="profile picture" className="img-fluid" style={{ marginTop: '-80px' }} />
                                <h6 className="mt-3">{profile.name} </h6>
                                <p className="mt-2"><i class="fa fa-map-marker" aria-hidden="true"></i> Lagos <br/>
                                <i class="fa fa-envelope" aria-hidden="true"></i> {profile.email} </p>
                        </div>
                    </div>
                </div>

       
            </div>
                 )}
        </div>
    )
   }

}

export default withContext(Profile);