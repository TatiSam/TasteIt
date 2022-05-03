import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import contentService from '../../../Services/contentService';
import { deleteComment } from '../../../store/slices/countriesSlice';
import EditCommentBlock from '../EditCommentBlock/EditCommentBlock';
import Spinner from '../../Spinner/Spinner';
import './commentitem.css';

function CommentItem({ comment, countryId }) {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const [aouthorLoggedIn, setAuthorLoggedIn] = useState(false);
    const [switchedEdit, setSwitchedEdit] = useState(false);
    const [apiError, setApiError] = useState();
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const disableSubmit = pendingApiCall;

    const arr = comment.date.split('T');
    const date = arr[0];
    const time = arr[1].split('.')[0];

    useEffect(() => {
        if (isLoggedIn) {
            if (comment.authorName === user.userNameOrEmail || comment.authorEmail === user.userNameOrEmail) {
                setAuthorLoggedIn(true);
            }
        }
    }, []);

    const onClickDelete = () => {
        setApiError();
        setPendingApiCall(true);
        contentService.deleteComment(user, comment.id)
            .then(() => {
                setPendingApiCall(false);
                dispatch(deleteComment({ countryId, comment }));
            }).catch(e => {
                setPendingApiCall(false);
                setApiError(e.message);
            });
    }

    return (
        <div className='comment_item'>
            <div className='comment_item_author'>
                <h4>Author:{comment.authorName}</h4>
                <span>{date} ({time})</span>
            </div>
            <div className='comment_item_text'>
                {aouthorLoggedIn &&
                    <div className='comment_item_text_top'>
                        <button
                            disabled={disableSubmit}
                            className='delete_comment_btn'
                            onClick={()=> setSwitchedEdit(!switchedEdit)}>
                            <AiOutlineEdit />
                        </button>
                        {apiError &&
                            <p>{apiError}</p>
                        }
                        {pendingApiCall &&
                            <Spinner />
                        }
                        <button
                            disabled={disableSubmit}
                            className='delete_comment_btn'
                            onClick={onClickDelete}>
                            <AiOutlineDelete />
                        </button>
                    </div>
                }
                {comment.body}
            </div>
            {switchedEdit && 
                <EditCommentBlock 
                    countryId={countryId}
                    comment={comment}
                    callBack={()=> setSwitchedEdit(!switchedEdit)} />
            }
        </div>
    );
}

export default CommentItem;
