import { actionTypes } from '../common/constants/actionTypes';
import { MemberEntity } from '../model';

export const membersReducer = (state: MemberEntity[] = [], action) => {
  console.log("action.payload",action.payload);
  switch (action.type) {
    case actionTypes.FETCH_MEMBER_REQUEST_COMPLETED:
      return handleFetchMembersStartedSaga(state, action.payload);
  }

  return state;
};

const handleFetchMembersStartedSaga = (state: MemberEntity[], payload: MemberEntity[]) => {
  return payload;
};
