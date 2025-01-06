import axios from "axios";
import { API_ENDPOINTS } from "../config/config";

axios.defaults.baseURL = "http://localhost:5000/";

export const UserService = {
  createUser: async (userData: any) => {
    try {
      const response = await axios.post(API_ENDPOINTS.USER.CREATE, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.USER.GET_ALL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUser: async (id: string) => {
    try {
      const response = await axios.get(API_ENDPOINTS.USER.GET.replace(":id", id));
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (id: string, userData: any) => {
    try {
      const response = await axios.put(API_ENDPOINTS.USER.UPDATE, { id, ...userData });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (id: string) => {
    try {
      const response = await axios.delete(API_ENDPOINTS.USER.DELETE.replace(":id", id));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
