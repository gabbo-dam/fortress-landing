import axios from 'axios';

import * as actionTypes from './actionTypes';
import api from '../../../utils/api';

export const getTokenData = () => ({
  type: actionTypes.GET_TOKEN_DATA,
  payload: api.get('/fortress'),
});