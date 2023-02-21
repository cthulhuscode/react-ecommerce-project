import { toast } from "react-hot-toast";
import { storeApi } from "../../../api/storeApi";
import { setAuthUser, setToken } from "./userSlice";

export const logInUser = (user) => {
	return async (dispatch, getState) => {
		const loginPromise = storeApi.post("/auth/login", user);

		const { data } = await toast.promise(loginPromise, {
			loading: "Signing up",
			success: "Signed up successfully!",
			error: "Error while signing up",
		});

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
		const registerPromise = storeApi.post("/auth/", user);

		const { data } = await toast.promise(registerPromise, {
			loading: "Creating account",
			success: "Account created successfully!",
			error: "Error while creating the account",
		});

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
