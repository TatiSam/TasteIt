import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contentService from '../../../Services/contentService';
import { addComment } from '../../../store/slices/countriesSlice';
import AlertError from '../../Alerts/AlertError';
import ButtonWithProgress from '../../Buttons/ButtonWithProgress/ButtonWithProgress';
import './addcommentblock.css';

function AddCommentBlock({ countryId }) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const [comment, setComment] = useState("");
    const [apiError, setApiError] = useState();
    const [pendingApiCall, setPendingApiCall] = useState(false);
    let disableSubmit = comment === "";

    const onChangeComment = (event) => {
        setComment(event.target.value);
    }

    const clearApiError = () => {
        setApiError();
    }

    const postCommentHandler = () => {
        setPendingApiCall(true);
        const newComment = {
            authorName: user.userNameOrEmail,
            authorEmail: user.userNameOrEmail,
            body: comment
        };
        contentService.postComment(user, countryId, newComment)
            .then(response => {
                setPendingApiCall(false);
                const comment = response.data;
                dispatch(addComment({ countryId, comment }));
                setComment("");
            }).catch(e => {
                setPendingApiCall(false);
                setApiError(e.message);
            });
    }

    return (
        <div className='addcomment_block'>
            <label htmlFor="text_comment">
                <span className='color_red'>*</span>Comment
            </label>
            <textarea id="text_comment" onChange={onChangeComment} value={comment} />
            <ButtonWithProgress
                text="Post Comment"
                disabled={disableSubmit}
                showProgress={pendingApiCall}
                onClick={postCommentHandler}
            />
            {apiError && 
                <AlertError
                    text={apiError}
                    callBack={clearApiError} />
            }
        </div>
    );
}

export default AddCommentBlock;
