import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { MemberEntity } from '../../model';
import { fetchMemberByIdAction } from './actions/fetchMemberById';
import { memberFieldChangeAction } from './actions/memberFieldChange';
import { saveMemberAction } from './actions/saveMember';
import { MemberDetailPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => ({ 
  memberId: Number(ownProps.match.params.id) || 0,
  member: state.member,
  memberErrors: state.memberErrors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemberById: (id: number) => dispatch(fetchMemberByIdAction(id)),
  onChange: (member: MemberEntity, fieldName: string, value: string) =>
    dispatch(memberFieldChangeAction(member, fieldName, value)),
  onSave: (member: MemberEntity) => dispatch(saveMemberAction(member)),
});

export const MemberDetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberDetailPage);
