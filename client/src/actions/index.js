import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, POST_CLASSES } from './types';

export const fetchUser = () => async dispatch  => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data }); 
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({type: FETCH_USER, payload: res.data});
}

export const submitSurvey = (formValues, history) => async dispatch => {
   console.log(formValues);
   const res = await axios.post('/api/surveys', formValues);
   history.push('/graders')
   dispatch({type: FETCH_USER, payload: res.data});
}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    console.log(res);
    dispatch( { type: FETCH_SURVEYS, payload: res.data});
}

export const submitClasses = (classInformation) => async dispatch => {
    console.log("submitting class information", classInformation);
    const res = await axios.post('/api/classes', classInformation);
    dispatch( { type: POST_CLASSES, payload: res.data});
}
