import { handlePopupContent } from "./popup-template";

export const defineLayerSettings = ({ outFields = ["*"], popupTitle = "{TextString}" }) => {
  return {
    outFields,
    objectIdField: "ObjectID",
    popupTemplate: {
      title: popupTitle,
      outfields: outFields,
      content: handlePopupContent,
    },
  };
};

export const layerSettings = {
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{TextString}",
    outfields: ["*"],
    content: handlePopupContent,
  },
};
