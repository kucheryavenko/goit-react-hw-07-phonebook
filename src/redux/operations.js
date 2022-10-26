import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://63592d2bff3d7bddb99b14af.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, ThunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, ThunkAPI) => {
    try {
      const response = await axios.post('/contacts', data);
      toast.success('Success! Contact added.');
      return response.data;
    } catch (error) {
      toast.error('Ooops, someting went wrong. Please, try again.');
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, ThunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Success! Contact deleted.');
      return response.data;
    } catch (error) {
      toast.error('Ooops, someting went wrong. Please, try again.');
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
