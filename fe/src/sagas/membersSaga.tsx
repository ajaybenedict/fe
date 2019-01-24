import "regenerator-runtime/runtime";
import { call, put } from 'redux-saga/effects';
import {memberAPI} from '../api/member';
import {fetchMembersCompletedAction} from '../components/members/actions';
import {MemberEntity} from '../model/memberEntity';
import gql from "graphql-tag";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
//import { ApolloProvider } from './../index';


const GET_COURSE = gql`
    {
        allcourses {
        id
        title
        author
        description
        topic
        url
        }
    }
    `;
    const graphqlUri= "http://localhost:4000/graphql";

    const httpLink = new HttpLink({
      uri: graphqlUri
    });
    
    const cache = new InMemoryCache();
    
    const client = new ApolloClient({
      link: httpLink,
      cache,
    });


// worker Saga: will be fired on LOAD_MEMBERS_REQUESTED actions
export function* fetchMembers() {
    var members: Array<MemberEntity>;

   
    const ProductsListWithData =  client.query({
        query: gql`
        {
            allcourses {
            id
            login
            avatar_url
            }
        }
        `
      }).then(function(res) {
  
        let data = res.data;
        
        members = data['allcourses'];
        //console.log("mem--->",members);
        
        put(fetchMembersCompletedAction(members));
    });
      
      
     /* ProductsListWithData.then(function(res) {
          console.log("Response-> ",res['allcourses']);
          
          members = res['allcourses'];
          put(fetchMembersCompletedAction(members));
      });*/


    members = yield call(memberAPI.fetchMembers);

    console.log("saga",members);
    
    yield put(fetchMembersCompletedAction(members));
}