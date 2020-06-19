import {SIGN_UP_FORM, API} from "./types";

const apiURL = process.env.BASE_URL

export function signUp(travelerSignUpForm) {
    return apiAction({
        method: "POST",
        url: `${apiURL}/traveler/sign_up`,
        onSuccess: sendSignUpInformation(travelerSignUpForm),
        onFailure: () => console.log(""),
        label: SIGN_UP_FORM
    });
}

function sendSignUpInformation(data) {
    return {
        type: SIGN_UP_FORM,
        payload: data
    };
}

function apiAction({
                       url = "",
                       method = "GET",
                       data = null,
                       accessToken = null,
                       onSuccess = () => {
                       },
                       onFailure = () => {
                       },
                       label = "",
                       headersOverride = null
                   }) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride
        }
    };
}