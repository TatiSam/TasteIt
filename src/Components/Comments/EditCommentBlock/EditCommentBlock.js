import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contentService from '../../../Services/contentService';
import { updateComment } from '../../../store/slices/countriesSlice';
import AlertError from '../../Alerts/AlertError';
import ButtonWithProgress from '../../Buttons/ButtonWithProgress/ButtonWithProgress';
import './editcommentblock.css';

function EditCommentBlock({ countryId, comment, callBack }) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const [commentBody, setCommentBody] = useState(comment.body);
    const [apiError, setApiError] = useState();
    const [pendingApiCall, setPendingApiCall] = useState(false);
    let disableSubmit = comment === '';

    const onChangeComment = (event) => {
        setCommentBody(event.target.value);
    }

    const clearApiError = () => {
        setApiError();
    }

    const editCommentHandler = () => {
        setPendingApiCall(true);
        const newComment = {
            authorName: comment.authorName,
            authorEmail: comment.authorEmail,
            body: commentBody
        };
        contentService.updateComment(user, comment.id, newComment)
            .then(response => {
                setPendingApiCall(false);
                const updatedComment = response.data;
                dispatch(updateComment({ countryId, updatedComment }));
                setCommentBody("");
                callBack();
            }).catch(e => {
                setPendingApiCall(false);
                setApiError(e.message);
            });
    }

    return (
        <div className='edit_comment_block'>
            <label htmlFor='edit_text_comment'>
                <span className='color_red'>*</span>Edit your comment</label>
            <textarea id='edit_text_comment' onChange={onChangeComment} value={commentBody} />
            {apiError && 
                <AlertError
                    text={apiError}
                    callBack={clearApiError} />
            }
            <div className='edit_comment_block_btn'>
                <ButtonWithProgress
                    text='Update'
                    disabled={disableSubmit}
                    showProgress={pendingApiCall}
                    onClick={editCommentHandler}
                />
            </div>
        </div>
    );
}

export default EditCommentBlock;
