import * as React from 'react';
import { MemberEntity, MemberErrors } from '../../model';
import Course from './course';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// interface Props {
//   memberId: number;
//   member: MemberEntity;
//   memberErrors: MemberErrors;
//   fetchMemberById: (id: number) => void;
//   onChange: (member: MemberEntity, fieldName: string, value: string) => void;
//   onSave: (member: MemberEntity) => void;
// }

interface State { param: Number };
interface Props { match: any };


export class MemberDetailPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      param: null,
    }
  }
  componentWillMount() {
    
    this.setState({ param: parseInt(this.props.match.params.id) })
  }


  render() {
    const GET_COURSE_BY_ID = gql`
    query getSingleCourse($courseId: Int!) {
      course(id:$courseId) {
        id
        title
        author
        description
        topic
        url
      }
    }
  `;
    return (
      <Query
        query={GET_COURSE_BY_ID} variables={{ "courseId": this.state.param }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          //return data.course.map((currentCourse, index) => (
          return (
            <Course course={data.course} />
          )
          // ));
        }}
      </Query>
    );
  }
}
