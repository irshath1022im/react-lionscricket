import Axios from 'axios';
import React from 'react'
import { storage } from '../../firebase/index';
import AdminLayouts from '../../components/AdminLayouts';
import Loading from '../../components/Loading';


class CreatePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit_palyerId:'',
            name:'',
            dob:'',
            team_id:1,
            thumbnail: null,
            progress: 0,
            addBtnStatus: false,
            url: null,
            submitBtnStatus: false,
            request_error:[],
            updateBtnStatus: false
         }
    }



componentDidMount(){
    // console.log(this.props.match.params.id)
    const {match} = this.props

    if(match.params.id) {
       


        Axios.get(`${process.env.REACT_APP_API_SERVER}/player/${match.params.id}`)
        .then( res =>{
            if(res.status === 200) {
                const {name,dob,url,team_id } = res.data
                this.setState({
                    name,
                    dob,
                    url,
                    team_id,
                    updateBtnStatus: true,
                    submitBtnStatus: true,
                    edit_palyerId: match.params.id
                })
            }
        })
        .catch( error =>{
            if(error.request) {
                // console.log(error.request)
                this.setState({
                    request_error: [`Request Error ${error.request.status} - ${error.request.statusText}`]
                })
            }else if(error.response){
                console.log(error.response.status)
            }
        })
    }
}

imageUpload = ()=>{

        const {thumbnail, name} = this.state;
    
        if(!name) {
            alert('Set Player Name Please')
        }else if(thumbnail.type !== "image/jpeg" && thumbnail.type !== "image/png" ){
            alert('Sorry! , Only Image File Accept')
        } else {
    
            const uploadTask = storage.ref(`players/${thumbnail.name}`).put(thumbnail)
    
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
                        .ref('players')  //folder where we saved in cloud
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


submitHandle = async (e) =>{
    e.preventDefault();

    const {name, url, dob,team_id} = this.state
    let data = {
        name,
        url,
        dob,
        team_id
    }

    try {
        

        const result = await Axios.post(`${process.env.REACT_APP_API_SERVER}/player`, data)

            if(result.status === 200) {
                this.props.history.push('/admin/players')
            }

        // console.log(result)

    } catch (error) {
        if(error.request) {
            // console.log(error.request)
            this.setState({
                request_error: [`Request Error ${error.request.status} - ${error.request.statusText}`]
            })
        }else if(error.response){
            console.log(error.response.status)
        }
    }
    

}

updatePlayer = async () => {

    const {name, url, dob,team_id,edit_palyerId} = this.state
    let data = {
        name,
        url,
        dob,
        team_id
    }

    try {
        

        const result = await Axios.put(`${process.env.REACT_APP_API_SERVER}/player/${edit_palyerId}`, data)

            if(result.status === 200) {
                this.props.history.push('/admin/players')
            }

        // console.log(result)

    } catch (error) {
        if(error.request) {
            // console.log(error.request)
            this.setState({
                request_error: [`Request Error ${error.request.status} - ${error.request.statusText}`]
            })
        }else if(error.response){
            console.log(error.response.status)
        }
    }

}

render() { 
        const {name,dob,thumbnail,url,updateBtnStatus,addBtnStatus,submitBtnStatus,request_error,progress} = this.state

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
                <div>
                   <form>

                     <div className="form-group">
                       <label htmlFor="formGroupExampleInput">Player Name</label>
                       <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Player Name" required onChange={ (e)=>this.setState({ name: e.target.value})} value={name}/>
                     </div>

                <select className="custom-select my-1 mr-sm-2" onChange={ (e)=>this.setState({ team_id: e.target.value})}>
                  <option value={1}>Lions</option>
                </select>




                     <div className="form-group">
                       <label htmlFor="formGroupExampleInput2">Date Of Birth</label>
                       <input type="date" className="form-control" id="formGroupExampleInput2"          
                        onChange={ (e)=>this.setState({ dob: e.target.value})}
                        value={dob}
                        />
                     </div>

                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="fileupload"  onChange={ (e)=> this.setState({ thumbnail: e.target.files[0]})}/>
                      <label className="custom-file-label" htmlFor="fileupload">Player Picture</label>

                      <span className="text-danger">***</span>

                      {
                       thumbnail !== null &&
                       <div>
                       
                       <span className="alert alert-info">{thumbnail.name} </span>

                        <button className="btn btn-success btn-sm" type="button" disabled={addBtnStatus} 
                            onClick={this.imageUpload}
                           
                         >Upload Picture</button>
                     

                       <div className="progress">
                        <div className={`progress-bar`} style={{ width: `${progress}%` }}role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={progress}>{progress}%</div>
                        </div>

                        </div>

                      }
                    </div>

                    {
                        progress !== 0 && progress !== 100 ?
                        <Loading />

                        :

                        <div className="w-25 h-25">
                          <img src={url} className="img-fluid" alt='' />
                        </div>
                    }



                    <hr/>
                    

                        <button type="button" className="btn btn-primary" disabled={submitBtnStatus}onClick={this.submitHandle}>Add</button>

                        {
                            updateBtnStatus &&
                            <button type="button" className="btn btn-primary" onClick={this.updatePlayer}>Update</button>

                        }

                   </form>
                   
                </div>
            
            </AdminLayouts>
         );
    }
}
 
export default CreatePlayer;