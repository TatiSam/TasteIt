import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddCommentBlock from '../AddCommentBlock/AddCommentBlock';
import CommentItem from '../CommentItem/CommentItem';
import ButtonWithProgress from '../../Buttons/ButtonWithProgress/ButtonWithProgress';
import AlertPrimary from '../../Alerts/AlertPrimary';
import './commentlist.css';

function CommentList({ comments, countryId }) {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [showAddCommentBlock, setShowAddCommentBlock] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const addCommentBtnHandler = () => {
        if (isLoggedIn)
            setShowAddCommentBlock(true);
        else
            setShowAlert(true);
    }

    const hideAlert = () => {
        setShowAlert(false);
    }

    return (
        <div className='comments'>
            <div className='comments_top'>
                {showAddCommentBlock &&
                    <AddCommentBlock
                        countryId={countryId} />
                }
                {!showAddCommentBlock &&
                    <ButtonWithProgress
                        text='Add Comment'
                        background='#777'
                        onClick={addCommentBtnHandler} />
                }
                {showAlert &&
                    <div className='comments_msg_block'>
                        <AlertPrimary
                            text='You must Login before'
                            callBack={hideAlert} />
                    </div>
                }
            </div>
            <div className='comments_bottom'>
                {comments.map(c =>
                    <CommentItem
                        comment={c}
                        countryId={countryId}
                        key={c.id} />
                )}
            </div>
        </div>
    );
}

export default CommentList;
