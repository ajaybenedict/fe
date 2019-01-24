import { fork, all, takeLatest } from 'redux-saga/effects';
import { fetchMembers } from './membersSaga';
import { fetchCourse } from './courseSaga';
import { actionTypes } from '../common/constants/actionTypes';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js
function* watchLoadMembersRequest() {
  yield takeLatest(actionTypes.FETCH_MEMBER_REQUEST_START, fetchMembers);
}

function* watchLoadCourseRequest() {
  yield takeLatest(actionTypes.FETCH_COURSE_REQUEST_START, fetchCourse);
}

// Register all your watchers
export default function* root() {
  yield all([
    fork(watchLoadMembersRequest),
    fork(watchLoadCourseRequest),
  ])
}

// fork(yield takeLatest(actionTypes.FETCH_MEMBER_REQUEST_START, fetchMembers)),
