import { actionTypes } from '../../../common/constants/actionTypes';
import { CourseEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { trackPromise } from 'react-promise-tracker';

export const fetchCourseStartAction = () => (
  {
    type: actionTypes.FETCH_COURSE_REQUEST_START,
  }
);




export const fetchCourseCompletedAction = (course: CourseEntity[]) => (
  {
    type: actionTypes.FETCH_COURSE_REQUEST_COMPLETED,
    payload: course,
  }
);

