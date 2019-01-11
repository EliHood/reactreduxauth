import React, {Component} from 'react';
import {fire} from '../firebaseConfig';
import { connect} from "react-redux";
import moment from 'moment';
import  '../index.css';
import {withRouter, Redirect} from "react-router-dom";
import Card from '@material-ui/core/Card';
import {getPosts} from '../actions'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin:'40px 0px',

  },
  p:{
      margin:'20px 0px',
      letterSpacing: '2.7px',
      fontSize:'0.8em',
      fontStyle: 'italic'
  },
  h:{
    letterSpacing: '5px' 
  }
};

const equalArrays = (arr1, arr2) => {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

class Dashboard extends Component{

    constructor(props){
        super(props)
        
        this._isMounted = false;
        this.state = {
            username:"",
            loading: true,
            posts:[]
        }

    }
  
    componentDidMount(){
        this._isMounted = true;
        if(this.props.userId){
            const collection = fire.collection('users');
            collection.get().then(snapshot => {
            if(!this._isMounted){return }
              snapshot.forEach(doc => { 
                this.setState({
                    username: doc.data().username,
                    loading:false
                })                 
              });   
            });
  
        }

        this.props.getPosts();

    }

    componentWillMount(){
        this._isMounted = false;
    }

    componentDidUpdate(prevProps) {
        const prevMyPosts = prevProps.myPosts;
        const myPosts = this.props.myPosts;

        if (!equalArrays(prevMyPosts, myPosts)) {
            this.setState({ posts: myPosts })
        }
    }
 
    render(){
        if (!this.props.userId) return <Redirect to='/' />
        const { loading, posts } = this.state;

        if(loading){
           return(
            <div className="loader"></div>
           ) 
        }
        return(
            <div className="container"> 
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <h1>Welcome {this.state.username.toLowerCase()}</h1>
                  
                        {posts.map((post, key)=> {
                            return(
                                 <Card key={key} style={styles.card}>
                                        <CardContent>

                                        <Typography variant="h4" component="h2" style={styles.h}>
                                            {post.description}
                                        </Typography>
                                        <Typography component="p" style={styles.p}>
                                            by: {post.username}
                                        </Typography>

                                        <Typography component="p">
                                            by: {moment(post.createdAt.toDate()).calendar()}
                                        </Typography>
                                                                    
                                    </CardContent>
                                </Card>
                            ); 
                        })} 
                    </div>
                </div>
            </div>
          

        );
    }


}

const mapStateToProps = (state) => ({
    user: state.auths.user,
    userId: state.auths.userId,
    myPosts: state.auths.myPosts
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts())
})

export default withRouter(connect(mapStateToProps,  mapDispatchToProps)(Dashboard));
