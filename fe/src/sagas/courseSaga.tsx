import "regenerator-runtime/runtime";
import { call, put } from 'redux-saga/effects';
import {memberAPI} from '../api/member';
import {fetchCourseCompletedAction} from '../components/members/actions';
import {CourseEntity} from '../model/courseEntity';
import gql from "graphql-tag";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

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
export function* fetchCourse() {
    let course: Array<CourseEntity>;

   
    const ProductsListWithData =  client.query({
        query: gql`
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
        `
      }).then(
      
        response => response.data
      
      
      );
      
      
      ProductsListWithData.then(function(res) {
          console.log("Response:::: ",res);
          
      
      
      });

      
{/*<Query
      query={GET_COURSE}>
      {({ loading, error, data }) => {
        console.log("data.course:::::",data);

      }}
    </Query>*/}
    course = yield call(memberAPI.fetchMembersAsync);

    //console.log("sage",members);
    
    yield put(fetchCourseCompletedAction(course));
}