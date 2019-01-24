import * as React from 'react';

const Course = (props) => (
    <div key={props.course.id}>
        <p>{`${props.course.title} by ${props.course.author}`} test</p>
    </div>
);
export default Course;