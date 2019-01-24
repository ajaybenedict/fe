import * as React from 'react';
import { MemberEntity, MemberErrors } from '../../model';
import Course from './course';
import { Input, Button } from '../../common/components/form';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


interface Props {
  member: MemberEntity;
  memberErrors: MemberErrors;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      param: ""
    }
  }
  componentWillMount() {
    
  }
  render() {
    return (
      <Query
        query={gql`
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
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return data.allcourses.map((currentCourse, index) => (
            <Course key={index} course={currentCourse} />
          ));
        }}
      </Query>
    );
  }
}

export const MemberForm = Courses;