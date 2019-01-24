import * as React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => (
    <tr>
        <td>
        
        <Link
            to={`/memberDetail/${props.course.id}`}
        >
            {props.course.id}
        </Link>
        
        </td>
        <td>
            {props.course.title}
        
        </td>
        <td>
        <span>{props.course.author}</span>
        </td>
    </tr> 
);
export default Course;