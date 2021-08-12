
import Axios from 'axios';
import React from 'react'
import AdminLayouts from '../../../components/AdminLayouts';
import Loading from '../../../components/Loading';

import {storage} from '../../../firebase/index';

class CreateTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            thumbnail: null,
            addBtnStatus: true,
            progress:0,
            url:null,
            submitBtnStatus: false,
            request_error:[]
         }
    }


imageUpload = ()=>{

    const {thumbnail, name} = this.state;

    if(!name) {
        alert('Set Team Name Please')
    }else if(thumbnail.type !== "image/jpeg" && thumbnail.type !== "image/png" ){
        alert('Sorry! , Only Image File Accept')
    } else {

        const uploadTask = storage.ref(`teams/${thumbnail.name}`).put(thumbnail)

        // console.log(uploadTask);

        uploadTask.on('state_changed',
            (snapshot) => {
                let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                this.setState({
                    progress: progress,
                    addBtnStatus: true,
                })


            }, 
            (error) => { 
            //error function
                console.log(error)
            }, 
            ()=>{
                //complete function
                //after complete uploade, look for the file uploaded
                storage
                    .ref('teams')  //folder where we saved in cloud
                    .child(thumbnail.name)  // look for the image name we saved
                    .getDownloadURL() // finally get the download url
                    .then( url => {
                        this.setState({
                            url: url,
                            thumbnail: null,
                            submitBtnStatus: false
                            
                        })
                    }) // return respomse and print url in console


            } 

        )

    }

} // end of function

submitHandle = async (e)=>{
        e.preventDefault();
        const {url,name} = this.state


        try {
            const result = await  Axios.post(`${process.env.REACT_APP_API_SERVER}/team`, { name: name, thumbnail: url})

            if(result.status === 200) {
                this.props.history.push('/admin/teams')
            }

        } catch (error) {

            if(error.request) {
                // console.log(error.request)
                this.setState({
                    request_error: [`Request Error ${error.request.status} - ${error.request.statusText}`]
                })
             }
            
        }

}


    render() { 
        const {thumbnail,progress,addBtnStatus, url,submitBtnStatus,request_error} = this.state
        return (
           <AdminLayouts>

                        
                {
                    request_error.length > 0 &&
                        request_error.map( (error,key) =>{
                            return(
                                <div className="alert alert-warning" role="alert" key={key}>
                                    <span>{error}</span>       
                                </div>
                            )
                        })
                

                }

                <div className="container">
                    <form onSubmit={this.submitHandle}>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Team Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Team Name" 
                        onChange={(e)=>this.setState({ name: e.target.value})} />
                      </div>

                      <div className="form-group d-flex">

                        <label htmlFor="formGroupExampleInput2">Thumbnail</label>
                        <input type="file" className="form-control-file" id="formGroupExampleInput2" placeholder="Thumbnail" 
                        onChange={(e)=>this.setState({ 
                            thumbnail: e.target.files[0],
                            addBtnStatus: false,
                        })}
                        />

                        <button className="btn btn-secondary" disabled={addBtnStatus} type="button" 
                            onClick={this.imageUpload}
                        >Add</button>

                      </div>

                    
                   

                 
                          
                          <div className="progress">
                            <div className={`progress-bar`} style={{ width: `${progress}%` }}role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={progress}>{progress}%</div>
                          </div>

                          {
                              progress !== 0 && progress !== 100 ?
                              <Loading />

                              :

                              <div className="w-25 h-25">
                                <img src={url} className="img-fluid" />
                              </div>
                          }


                       
                          
                      <button type="submit" className="btn btn-primary" disabled={submitBtnStatus}>Submit</button>
                    </form>
                    
                </div>
           </AdminLayouts>
          );
    }
}
 
export default CreateTeam;