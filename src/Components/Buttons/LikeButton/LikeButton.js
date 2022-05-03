import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import userService from '../../../Services/userService';
import { addResourceToUser, deleteResourceFromUser } from '../../../store/slices/userSlice';
import Message from '../../Message/Message';
import './likebutton.css';


function LikeButton({ resourceName, resourceId, isSelected = false }) {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const [showMsg, setShowMsg] = useState(false);
    const [apiError, setApiError] = useState();
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const disableSubmit = pendingApiCall;
    const [selected, setSelected] = useState(isSelected);
    let style = selected ? 'like_btn color_red' : 'like_btn';

    const hideMessage = () => {
        setShowMsg(false);
    }

    const clearApiError = () => {
        setApiError();
        hideMessage();
    }

    const onClickButton = () => {
        if (isLoggedIn) {
            setPendingApiCall(true);
            if (!selected) {
                userService.addResourceToUser(user, resourceName, resourceId)
                    .then(response => {
                        setSelected(!selected);
                        setPendingApiCall(false);
                        const resource = response.data;
                        dispatch(addResourceToUser({ resourceName, resource }));
                    }).catch(e => {
                        setPendingApiCall(false);
                        setApiError(e.message);
                    });
            } else {
                userService.deleteResourceFromUser(user, resourceName, resourceId)
                    .then(response => {
                        setSelected(!selected);
                        setPendingApiCall(false);
                        const resource = response.data;
                        dispatch(deleteResourceFromUser({ resourceName, resource }));
                    }).catch(e => {
                        setPendingApiCall(false);
                        setApiError(e.message);
                    })
            }
        } else {
            setShowMsg(true);
        }
    }

    return (
        <div className='like_btn_box'>
            <button className={style} disabled={disableSubmit} onClick={onClickButton}>
                <AiFillHeart />
            </button>
            {showMsg &&
                <div className='comments_msg_block'>
                    <Message
                        text='You must Login before'
                        callBack={hideMessage} />
                </div>
            }
            {apiError &&
                <div className='comments_msg_block'>
                    <Message
                        text={apiError}
                        callBack={clearApiError} />
                </div>
            }
        </div>
    );
}

export default LikeButton;
