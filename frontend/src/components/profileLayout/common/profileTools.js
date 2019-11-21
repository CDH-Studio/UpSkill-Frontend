import React, { useState } from "react";

import "./common.css";

export function renderValue(intl, profileValue, fallbackIntlId, forceFallback) {
  if (!profileValue || profileValue == "" || forceFallback) {
    if (fallbackIntlId !== null) {
      return (
        <span className="greyedOut">
          {intl.formatMessage({ id: fallbackIntlId || "profile.undefined" })}
        </span>
      );
    }
    return null;
  }
  return profileValue;
}
