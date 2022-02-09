import { atom } from "recoil";

export const snsOverlayState = atom({
    key: "snsState",
    default: false,
});

export const boxsClickState = atom({
    key: "boxsState",
    default: {
        url: "",
        title: "",
        text: "",
    },
});