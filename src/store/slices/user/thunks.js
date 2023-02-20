import { storeApi } from "../../../api/storeApi";
import { setAuthUser, setToken } from "./userSlice";

export const logInUser = (user) => {
	return async (dispatch, getState) => {
		const { data } = await storeApi.post("/auth/login", user);

		if (data.success) {
			/* Get token */
			const token = data.data.token;
			dispatch(setToken(token));

			/* Get auth user data */
			const response = await storeApi.get("/auth", {
				headers: { "x-auth-token": token },
			});

			if (response.data.success) {
				const { displayName: name, email } = response.data.data;
				const user = {
					name,
					email,
				};

				dispatch(setAuthUser(user));

				return true;
			}
		}

		return false;
	};
};

export const registerUser = (user) => {
	return async (dispatch, getState) => {
		const { data } = await storeApi.post("/auth/", user);

		if (data.success) {
			/* Get token */
			const token = data.data.token;
			dispatch(setToken(token));

			/* Get auth user data */
			const response = await storeApi.get("/auth", {
				headers: { "x-auth-token": token },
			});

			if (response.data.success) {
				const { displayName: name, email } = response.data.data;
				const user = {
					name,
					email,
				};

				dispatch(setAuthUser(user));

				return true;
			}
		}

		return false;
	};
};
